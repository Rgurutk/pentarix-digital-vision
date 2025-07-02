
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
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
      description: "Modern, responsive applications built with cutting-edge technologies"
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
      description: "Comprehensive business management solutions tailored to your needs"
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
      description: "Next-generation technologies to future-proof your business"
    },
    {
      category: "Immersive Experiences",
      items: [
        "Augmented Reality (AR) Solutions",
        "Virtual Reality (VR) Applications",
        "Game Development"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      description: "Immersive digital experiences that captivate and engage"
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
      description: "Industry-specific solutions designed for optimal performance"
    },
    {
      category: "Smart Solutions",
      items: [
        "House Management System"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      description: "Intelligent automation for modern living and working spaces"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to elevate your business and drive digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.category}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {service.category}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
