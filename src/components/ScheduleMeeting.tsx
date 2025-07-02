
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ScheduleMeeting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Meeting request submitted:', formData);
    toast({
      title: "Meeting Request Submitted",
      description: "We'll contact you within 24 hours to confirm your meeting.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule a Meeting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your project? Book a consultation with our experts to explore how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="border-l-4 border-l-orange-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <Calendar className="mr-3 text-orange-500" size={24} />
                  Meeting Information
                </CardTitle>
                <CardDescription>
                  What to expect from your consultation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Duration</h4>
                    <p className="text-gray-600">30-60 minutes comprehensive discussion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <User className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Who You'll Meet</h4>
                    <p className="text-gray-600">Senior technical consultants and project managers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">What We'll Discuss</h4>
                    <p className="text-gray-600">Your requirements, timeline, budget, and technical approach</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Pentarix?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Custom solutions tailored to your needs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Transparent pricing and timeline</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Book Your Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ecommerce">E-commerce Platform</option>
                    <option value="erp">ERP System</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <Input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
                >
                  Schedule Meeting
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeeting;
