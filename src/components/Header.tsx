
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 border-b">
      <div className="container flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
        <div className="flex items-center">
          <div className="font-bold text-2xl flex items-center">
            <span className="text-primary">clear</span>
            <span>Hold</span>
          </div>
          <div className="text-xs ml-2 text-muted-foreground">compliance guardian</div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          clearhold.co
        </div>
      </div>
    </header>
  );
};

export default Header;
