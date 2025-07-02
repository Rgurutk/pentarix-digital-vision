
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:pentarixlabs@gmail.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                      pentarixlabs@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                    <div className="space-y-1">
                      <a href="tel:0707233731" className="block text-gray-600 hover:text-orange-500 transition-colors">
                        070 723 3731
                      </a>
                      <a href="tel:0751352570" className="block text-gray-600 hover:text-orange-500 transition-colors">
                        075 135 2570
                      </a>
                      <a href="tel:0740558858" className="block text-gray-600 hover:text-orange-500 transition-colors">
                        074 055 8858
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Kalutara North<br />
                      Kalutara, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="mb-6">
                Join our satisfied clients who have transformed their businesses with our innovative solutions.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                <a href="#schedule">Schedule Free Consultation</a>
              </Button>
            </div>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
              <CardDescription>
                Have a question? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
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
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
