
import { User, Session } from '@supabase/supabase-js';

export interface AuthState {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  isLoading: boolean;
  subscription: SubscriptionDetails | null;
}

export interface UserProfile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface SubscriptionDetails {
  subscribed: boolean;
  subscription_tier: string | null;
  subscription_end: string | null;
}
