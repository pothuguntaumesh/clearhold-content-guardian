
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { AuthState, UserProfile, SubscriptionDetails } from '@/types/auth';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  authState: AuthState;
  signIn: (email: string, password: string) => Promise<{ error: any | null }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any | null }>;
  signOut: () => Promise<void>;
  checkSubscription: () => Promise<SubscriptionDetails | null>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    profile: null,
    isLoading: true,
    subscription: null,
  });

  const navigate = useNavigate();

  // Check for subscription status
  const checkSubscription = async () => {
    try {
      if (!authState.session) return null;

      const { data, error } = await supabase.functions.invoke('check-subscription', {
        body: { user_id: authState.user?.id },
      });

      if (error) throw error;
      if (data) {
        const subscriptionDetails = {
          subscribed: data.subscribed,
          subscription_tier: data.subscription_tier,
          subscription_end: data.subscription_end,
        };
        setAuthState(prev => ({ ...prev, subscription: subscriptionDetails }));
        return subscriptionDetails;
      }
      return null;
    } catch (error) {
      console.error('Error checking subscription:', error);
      return null;
    }
  };

  // Load user profile
  const loadUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      if (data) {
        setAuthState(prev => ({
          ...prev,
          profile: data,
        }));
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  // Initialize auth state and set up listener
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setAuthState(prev => ({
          ...prev,
          session,
          user: session?.user ?? null,
        }));

        if (session?.user) {
          // Defer Supabase calls with setTimeout to prevent deadlocks
          setTimeout(() => {
            loadUserProfile(session.user.id);
            checkSubscription();
          }, 0);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthState(prev => ({
        ...prev,
        session,
        user: session?.user ?? null,
        isLoading: false,
      }));

      if (session?.user) {
        loadUserProfile(session.user.id);
        checkSubscription();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate('/');
      return { error: null };
    } catch (error) {
      console.error('Error signing in:', error);
      return { error };
    }
  };

  // Sign up function
  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });
      if (error) throw error;
      navigate('/');
      return { error: null };
    } catch (error) {
      console.error('Error signing up:', error);
      return { error };
    }
  };

  // Sign out function
  const signOut = async () => {
    await supabase.auth.signOut();
    setAuthState({
      user: null,
      session: null,
      profile: null,
      isLoading: false,
      subscription: null,
    });
    navigate('/auth');
  };

  const value = {
    authState,
    signIn,
    signUp,
    signOut,
    checkSubscription,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
