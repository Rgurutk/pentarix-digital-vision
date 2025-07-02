
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      category: "Web & Mobile Development",
      items: [
        "Web Development",
        "E-commerce Platform Development",
        "Mobile App Development",
        "POS System Development"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      description: "Modern, responsive applications built with cutting-edge technologies",
      color: "from-orange-500 to-orange-600"
    },
    {
      category: "Enterprise Solutions",
      items: [
        "ERP System Development",
        "CRM System Development",
        "Custom Management Systems",
        "HR & Payroll Software"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      description: "Comprehensive business management solutions tailored to your needs",
      color: "from-teal-500 to-teal-600"
    },
    {
      category: "Advanced Technologies",
      items: [
        "AI Solutions",
        "IoT Integration",
        "Blockchain Application Development",
        "Cloud-Based System Development"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      description: "Next-generation technologies to future-proof your business",
      color: "from-orange-500 to-teal-500"
    },
    {
      category: "Immersive Experiences",
      items: [
        "Augmented Reality (AR) Solutions",
        "Virtual Reality (VR) Applications",
        "Game Development"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      description: "Immersive digital experiences that captivate and engage",
      color: "from-purple-500 to-orange-500"
    },
    {
      category: "Specialized Systems",
      items: [
        "Learning Management System (LMS)",
        "Hospital/Clinic Management System",
        "Real Estate Management System",
        "Logistics & Fleet Management System"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description: "Industry-specific solutions designed for optimal performance",
      color: "from-teal-500 to-blue-500"
    },
    {
      category: "Smart Solutions",
      items: [
        "House Management System"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Intelligent automation for modern living and working spaces",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-teal-100 rounded-full opacity-20 animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-teal-100 border border-orange-200 rounded-full text-orange-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Service Portfolio
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Professional
            <span className="block bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to elevate your business and drive digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 overflow-hidden relative">
                {/* Animated border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
                
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.category}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating icon */}
                  <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center transform transition-all duration-300 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-teal-500 transition-all duration-300">
                    {service.category}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700 group/item">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:scale-150`}></div>
                        <span className="text-sm font-medium group-hover/item:text-gray-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
