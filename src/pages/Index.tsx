
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TechInsights from '@/components/TechInsights';
import ScheduleMeeting from '@/components/ScheduleMeeting';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <TechInsights />
      <ScheduleMeeting />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
