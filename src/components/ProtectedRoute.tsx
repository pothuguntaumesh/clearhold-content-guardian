
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireSubscription?: boolean;
}

const ProtectedRoute = ({ children, requireSubscription = false }: ProtectedRouteProps) => {
  const { authState } = useAuth();
  
  // If auth is still loading, show a loading spinner
  if (authState.isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  // If not authenticated, redirect to login
  if (!authState.user) {
    return <Navigate to="/auth" replace />;
  }
  
  // If subscription is required but user doesn't have one, redirect to pricing
  if (requireSubscription && (!authState.subscription || !authState.subscription.subscribed)) {
    return <Navigate to="/pricing" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
