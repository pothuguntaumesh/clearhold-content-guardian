
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, BookOpen, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center space-y-6 max-w-3xl">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="text-[#7C3AED]">Compliance</span> Made Clear
                </h1>
                <p className="mt-2 text-3xl text-muted-foreground">For financial professionals</p>
              </div>
              
              <p className="text-lg text-muted-foreground">
                Instantly check your marketing content against regulatory guidelines and industry best practices to ensure compliance and reduce risk.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link to="/#app">
                  <Button size="lg" className="gap-2">
                    Try It Now <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Video Demo Section */}
            <div className="rounded-xl overflow-hidden border shadow-lg max-w-4xl w-full bg-gradient-to-br from-[#1A1F2C] to-[#403E43]">
              <AspectRatio ratio={16 / 9} className="relative group cursor-pointer">
                {/* Professional looking code editor/dashboard image as placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1600" 
                  alt="ClearHold Demo Video" 
                  className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                  <div className="bg-white/10 backdrop-blur-md p-5 rounded-full hover:bg-white/20 transition-all group-hover:scale-110 border border-white/20">
                    <Play className="w-16 h-16 text-white" fill="white" />
                  </div>
                  <p className="text-white font-medium mt-6 text-lg tracking-wide px-4 py-2 bg-black/40 rounded-full">
                    Watch the 30-second demo
                  </p>
                </div>
              </AspectRatio>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-4 max-w-4xl w-full">
              <div className="flex flex-col items-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-medium mb-2">Input Your Content</h3>
                <p className="text-sm text-muted-foreground">Paste your marketing copy or website content</p>
              </div>
              <div className="flex flex-col items-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-medium mb-2">Select Your State</h3>
                <p className="text-sm text-muted-foreground">Choose the state for regulatory compliance</p>
              </div>
              <div className="flex flex-col items-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-medium mb-2">Get Results</h3>
                <p className="text-sm text-muted-foreground">Receive instant compliance analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/50" id="features">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose ClearHold?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our compliance solution helps financial professionals create compliant marketing content with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  Check your content against the latest regulatory guidelines and industry best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                <p className="text-muted-foreground">
                  Access compliance learning materials and examples to improve your marketing communications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">State-Specific Rules</h3>
                <p className="text-muted-foreground">
                  Get compliance checks tailored to specific state regulations for targeted marketing campaigns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary/5 border-y">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to ensure your marketing is compliant?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join financial professionals who trust ClearHold to review their content for regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/#app">
              <Button size="lg" className="gap-2">
                Try It Now <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
