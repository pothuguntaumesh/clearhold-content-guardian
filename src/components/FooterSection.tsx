
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="mt-auto py-6 bg-gradient-to-r from-primary/5 to-accent/10 border-t backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ClearHold. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <p className="text-xs text-muted-foreground">
              Helping financial professionals stay compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
