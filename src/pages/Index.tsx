
import React from 'react';
import Header from '@/components/Header';
import ContentChecker from '@/components/ContentChecker';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ContentChecker />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
