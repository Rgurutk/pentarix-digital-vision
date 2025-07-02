
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-orange-400/30 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }}
    />
  ));

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles}
      </div>
      
      {/* Interactive Cursor Effect */}
      <div 
        className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-orange-500/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-40 left-10 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-teal-400/20 rotate-12 animate-bounce" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Innovative Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-teal-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Innovation Meets Excellence
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
                  Digital Vision
                </span>
                <span className="block text-teal-300">Into Reality</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Pentarix delivers cutting-edge technology solutions with precision-built architecture. 
                We craft scalable, secure solutions tailored to your unique needs.
              </p>
            </div>
            
            {/* Interactive Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
              {[
                { icon: Target, number: "50+", label: "Projects", color: "text-orange-400" },
                { icon: Zap, number: "20+", label: "Services", color: "text-teal-400" },
                { icon: Sparkles, number: "100%", label: "Quality", color: "text-orange-400" },
                { icon: ArrowRight, number: "24/7", label: "Support", color: "text-teal-400" }
              ].map((stat, index) => (
                <div key={index} className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <stat.icon className={`w-6 h-6 ${stat.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <a href="#services" className="flex items-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-teal-400/50 text-teal-300 hover:bg-teal-400/10 hover:border-teal-400 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <a href="#schedule" className="flex items-center">
                  Schedule Consultation
                  <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Key Values */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
              {["Precision Built", "On-Time Always", "Tailored to You", "Scalable & Secure"].map((value, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-teal-500/20 backdrop-blur-sm text-orange-300 text-sm rounded-full border border-orange-500/30">
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive 3D Card */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-teal-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:scale-105 transition-all duration-500 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                  alt="Modern Development Workspace"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
                
                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Innovation Hub</h3>
                    <p className="text-gray-300 text-sm">Where ideas become reality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
