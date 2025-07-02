
import React, { useState } from 'react';
import { ChevronRight, Sparkles, Zap, Shield, Clock } from 'lucide-react';

const WhatWeOffer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    "Web Development",
    "E-commerce Platform Development", 
    "POS System Development",
    "Mobile App Development",
    "IoT Integration",
    "Cloud-Based System Development",
    "House Management System",
    "Custom Management Systems",
    "AI Solutions",
    "Augmented Reality (AR) Solutions",
    "Virtual Reality (VR) Applications",
    "Game Development",
    "Blockchain Application Development",
    "ERP System Development",
    "CRM System Development",
    "Learning Management System (LMS)",
    "Hospital/Clinic Management System",
    "HR & Payroll Software",
    "Real Estate Management System",
    "Logistics & Fleet Management System"
  ];

  const leftServices = services.slice(0, 10);
  const rightServices = services.slice(10);

  const keyFeatures = [
    { icon: Sparkles, text: "Precision Built", color: "text-orange-400" },
    { icon: Clock, text: "On-Time Always", color: "text-teal-400" },
    { icon: Zap, text: "Tailored to You", color: "text-orange-400" },
    { icon: Shield, text: "Scalable & Secure", color: "text-teal-400" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-teal-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Professional Services Portfolio
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">What We </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Offer
            </span>
            <span className="text-orange-500">?</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column */}
          <div className="space-y-4">
            {leftServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-3 h-3 rounded-full mr-4 transition-all duration-300 ${
                  hoveredIndex === index ? 'bg-orange-500 shadow-lg shadow-orange-500/50' : 'bg-orange-500/60'
                }`}></div>
                <span className="text-white font-medium flex-1">{service}</span>
                <ChevronRight className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${
                  hoveredIndex === index ? 'translate-x-1' : ''
                }`} />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightServices.map((service, index) => (
              <div
                key={index + 10}
                className="flex items-center group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index + 10)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-3 h-3 rounded-full mr-4 transition-all duration-300 ${
                  hoveredIndex === index + 10 ? 'bg-teal-400 shadow-lg shadow-teal-400/50' : 'bg-teal-400/60'
                }`}></div>
                <span className="text-white font-medium flex-1">{service}</span>
                <ChevronRight className={`w-5 h-5 text-teal-400 transition-transform duration-300 ${
                  hoveredIndex === index + 10 ? 'translate-x-1' : ''
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-orange-400 to-teal-400 h-1 w-32 rounded-full"></div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            At Pentarix, we craft precision-built solutions tailored to your unique needs. Our team is 
            committed to delivering on time every time without compromising quality. With secure 
            and scalable architecture and a clear communication process, we make innovation 
            seamless and success inevitable.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <span className={`font-semibold text-lg ${feature.color}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-teal-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full mb-4">
            <span className="text-orange-300 font-semibold text-lg mr-2">Contact Us:</span>
            <span className="text-white font-bold text-lg">
              070 723 3731 | 075 135 2570 | 074 055 8858
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
