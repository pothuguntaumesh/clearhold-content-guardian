
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
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
            </ul>
          </nav>
          
          <Link to="/#app">
            <Button variant="outline" size="sm">Try It Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
