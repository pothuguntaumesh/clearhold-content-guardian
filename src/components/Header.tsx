
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-primary/5 to-accent/10 border-b backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <div className="font-bold text-2xl flex items-center">
            <span className="text-[#7C3AED]">Clear</span>
            <span className="text-black">Hold</span>
          </div>
          <div className="text-xs ml-2 px-2 py-1 bg-primary/10 rounded-full text-primary font-medium">
            compliance guardian
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
