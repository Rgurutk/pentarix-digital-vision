
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, MailOpen } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Kalutara, Sri Lanka",
      description: "Join our innovative team to build cutting-edge web applications and AI-powered solutions.",
      requirements: ["5+ years experience", "React/Node.js", "AI/ML knowledge preferred"]
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Kalutara, Sri Lanka",
      description: "Create stunning mobile applications with the latest technologies and frameworks.",
      requirements: ["3+ years experience", "React Native/Flutter", "iOS/Android development"]
    },
    {
      title: "AI Solutions Engineer",
      department: "Innovation",
      type: "Full-time",
      location: "Kalutara, Sri Lanka",
      description: "Lead our AI initiatives and develop intelligent solutions for tomorrow's challenges.",
      requirements: ["AI/ML expertise", "Python/TensorFlow", "Research background preferred"]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Kalutara, Sri Lanka",
      description: "Design beautiful and intuitive user experiences that delight our clients.",
      requirements: ["3+ years experience", "Figma/Adobe Suite", "User research skills"]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in an innovative environment"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-orange-500" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement in cutting-edge technologies"
    },
    {
      icon: <MailOpen className="w-8 h-8 text-orange-500" />,
      title: "Flexible Work",
      description: "Hybrid work options and flexible schedules for work-life balance"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-orange-500">Innovation</span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of a team that's shaping the future of technology. At Pentarix, we don't just build solutions - we create possibilities.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Pentarix?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-orange-100">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Current Opportunities</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {job.description}
                  </CardDescription>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h3>
          <p className="text-xl mb-8 opacity-90">
            Don't see the perfect role? We're always looking for exceptional talent to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-orange-600 border-white hover:bg-orange-50 px-8 py-4"
            >
              Send Your Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4"
            >
              <a href="mailto:pentarixlabs@gmail.com">Contact HR Team</a>
            </Button>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-gray-600">Innovation Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
