
import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="mt-auto py-6 bg-gradient-to-r from-primary/5 to-accent/10 border-t backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ClearHold. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Helping financial professionals stay compliant
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/30 text-xs text-muted-foreground space-y-1">
          <p>This tool is for educational use only and does not constitute legal or compliance advice.</p>
          <p>You are solely responsible for your content and compliance decisions.</p>
          <p>We do not guarantee accuracy or regulatory approval.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
