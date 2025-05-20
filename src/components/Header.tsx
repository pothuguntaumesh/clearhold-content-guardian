
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { ChevronDown, LogOut, User } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { authState, signOut } = useAuth();
  const isAuthenticated = !!authState.user;
  const isSubscribed = !!authState.subscription?.subscribed;
  
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-primary/5 to-accent/10 border-b backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl flex items-center">
            <span className="text-[#7C3AED]">Clear</span>
            <span className="text-black">Hold</span>
          </Link>
          <div className="text-xs ml-2 px-2 py-1 bg-primary/10 rounded-full text-primary font-medium">
            compliance guardian
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/#features" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#demo" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              {isSubscribed && (
                <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  Premium
                </div>
              )}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    Account <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {authState.profile?.full_name || authState.user?.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/pricing" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Subscription</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link to="/auth">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link to="/auth?tab=register">
                <Button variant="outline" size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
          
          <Link to="/#app">
            <Button variant="default" size="sm">Try It Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
