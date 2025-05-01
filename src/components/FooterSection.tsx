
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="mt-auto py-6 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} clearHold. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
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
