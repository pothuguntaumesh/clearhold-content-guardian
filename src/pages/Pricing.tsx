
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Pricing = () => {
  const { authState, checkSubscription } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubscribe = async () => {
    if (!authState.user) {
      toast({
        title: "Authentication required",
        description: "Please log in to subscribe.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { price: 2000 } // $20.00
      });
      
      if (error) throw error;
      
      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Could not process subscription request",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) throw error;
      
      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Could not open subscription management",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Effect to periodically check subscription status
  React.useEffect(() => {
    if (authState.user) {
      const intervalId = setInterval(() => {
        checkSubscription();
      }, 5000);
      
      return () => clearInterval(intervalId);
    }
  }, [authState.user, checkSubscription]);
  
  const isSubscribed = authState.subscription?.subscribed;
  
  return (
    <div className="container max-w-5xl py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Subscription Plans</h1>
        <p className="text-muted-foreground">Choose the perfect plan for your compliance needs</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <Card className={`border-2 ${!isSubscribed ? 'border-primary' : 'border-muted'} relative`}>
          {!isSubscribed && (
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-md font-medium">
              Current Plan
            </div>
          )}
          <CardHeader>
            <CardTitle>Free Plan</CardTitle>
            <CardDescription>Basic compliance checking features</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Basic compliance checks</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>5 checks per day</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Limited educational resources</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" disabled>
              Current Plan
            </Button>
          </CardFooter>
        </Card>
        
        {/* Premium Plan */}
        <Card className={`border-2 ${isSubscribed ? 'border-primary' : 'border-muted'} relative`}>
          {isSubscribed && (
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-md font-medium">
              Current Plan
            </div>
          )}
          <CardHeader>
            <CardTitle>Premium Plan</CardTitle>
            <CardDescription>Advanced compliance features for professionals</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">$20</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Advanced compliance checks</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Unlimited checks</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>State-specific rule checking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Full educational resources access</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Premium support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            {isSubscribed ? (
              <Button className="w-full" onClick={handleManageSubscription} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Manage Subscription'}
              </Button>
            ) : (
              <Button className="w-full" onClick={handleSubscribe} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Subscribe Now'}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
      
      {/* Subscription details if subscribed */}
      {isSubscribed && authState.subscription?.subscription_end && (
        <div className="mt-8 text-center p-4 bg-muted/30 rounded-lg max-w-md mx-auto">
          <p className="font-medium">Your subscription is active</p>
          <p className="text-sm text-muted-foreground">
            Next billing date: {new Date(authState.subscription.subscription_end).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Pricing;
