
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatWeOffer from '@/components/WhatWeOffer';
import Services from '@/components/Services';
import ScheduleMeeting from '@/components/ScheduleMeeting';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhatWeOffer />
      <Services />
      <ScheduleMeeting />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
