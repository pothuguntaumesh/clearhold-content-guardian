
import React from 'react';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import ContentChecker from '@/components/ContentChecker';
import FooterSection from '@/components/FooterSection';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  const showApp = location.hash === '#app';

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {showApp ? (
          <div className="py-6">
            <ContentChecker />
          </div>
        ) : (
          <LandingPage />
        )}
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
