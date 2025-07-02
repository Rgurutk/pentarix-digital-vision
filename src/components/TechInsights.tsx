
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Brain, Lightbulb, Target, Eye, Heart, TrendingUp, Code, Zap, Globe, Shield } from 'lucide-react';

const TechInsights = () => {
  const developmentSteps = [
    {
      step: "1",
      title: "Analysis & Planning",
      description: "Comprehensive requirement analysis with stakeholder collaboration",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "2", 
      title: "AI-Powered Design",
      description: "Leveraging AI tools for optimal architecture and user experience",
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Agile Development",
      description: "Iterative development with continuous client feedback integration",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Quality Assurance",
      description: "Rigorous testing with automated and manual quality checks",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const techPredictions = [
    {
      technology: "Generative AI Integration",
      impact: "Revolutionizing software development with 40% faster delivery",
      adoption: "95%",
      color: "bg-orange-500"
    },
    {
      technology: "Edge Computing",
      impact: "Reducing latency by 60% for IoT applications",
      adoption: "78%",
      color: "bg-blue-500"
    },
    {
      technology: "Quantum Computing",
      impact: "Breakthrough in cryptography and complex problem solving",
      adoption: "25%",
      color: "bg-purple-500"
    },
    {
      technology: "Sustainable Tech",
      impact: "50% reduction in carbon footprint for digital solutions",
      adoption: "83%",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="text-center mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader className="text-center">
                <Eye className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Smart world for everyone's wellbeing - Creating intelligent solutions that enhance quality of life globally
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Innovative solutions with sustainability - Delivering cutting-edge technology while preserving our planet
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="methodology" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="methodology">Development Methodology</TabsTrigger>
            <TabsTrigger value="ai-development">AI Augmented Development</TabsTrigger>
            <TabsTrigger value="tech-analysis">2025 Tech Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="methodology" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Development Methodology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven approach combining traditional best practices with cutting-edge AI integration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentSteps.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-orange-500">
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                  alt="Development Process"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Proven Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Project Success Rate</span>
                    <Badge className="bg-green-100 text-green-800">98%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">On-Time Delivery</span>
                    <Badge className="bg-blue-100 text-blue-800">95%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Client Satisfaction</span>
                    <Badge className="bg-orange-100 text-orange-800">100%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai-development" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                AI Augmented Development
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leveraging artificial intelligence to accelerate development and enhance solution quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                  alt="AI Development"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Brain className="w-8 h-8 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Code Generation</h3>
                    <p className="text-gray-600">AI-powered code suggestions and automated testing reduce development time by 40%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-8 h-8 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                    <p className="text-gray-600">Machine learning algorithms predict potential issues before they occur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-8 h-8 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Optimization</h3>
                    <p className="text-gray-600">AI continuously optimizes performance and user experience</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tech-analysis" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                2025 Technology Trends Analysis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Research-backed insights into the technologies that will shape the digital landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {techPredictions.map((tech, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {tech.technology}
                      </CardTitle>
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    </div>
                    <CardDescription className="text-gray-600 mb-4">
                      {tech.impact}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Market Adoption</span>
                        <span className="font-semibold">{tech.adoption}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${tech.color}`}
                          style={{ width: tech.adoption }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-orange-50 to-white rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Impact</h3>
                  <p className="text-gray-600">Technologies we develop will impact over 2 billion users by 2025</p>
                </div>
                <div>
                  <Brain className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Integration</h3>
                  <p className="text-gray-600">85% of our solutions will incorporate AI by end of 2024</p>
                </div>
                <div>
                  <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sustainability</h3>
                  <p className="text-gray-600">All projects designed with carbon-neutral principles</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechInsights;
