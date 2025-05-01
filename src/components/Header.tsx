
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { FileText, HelpCircle, FileCheck } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-primary/5 to-accent/10 border-b backdrop-blur-sm">
      <div className="container flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
        <div className="flex items-center">
          <div className="font-bold text-2xl flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            <span>Clear</span>
            <span>Hold</span>
          </div>
          <div className="text-xs ml-2 px-2 py-1 bg-primary/10 rounded-full text-primary font-medium">
            compliance guardian
          </div>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-primary/5">Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="flex items-center gap-2 p-2 hover:bg-accent/10 rounded-md">
                    <FileCheck className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Content Compliance</div>
                      <div className="text-xs text-muted-foreground">Check your content against regulations</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-accent/10 rounded-md">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Document Review</div>
                      <div className="text-xs text-muted-foreground">Upload documents for analysis</div>
                    </div>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" className="text-muted-foreground hover:text-primary">
                About
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" className="text-muted-foreground hover:text-primary">
                Contact
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <HelpCircle className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button size="sm" className="rounded-full hidden md:inline-flex">Try Pro</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
