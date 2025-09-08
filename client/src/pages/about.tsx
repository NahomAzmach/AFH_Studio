import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Zap, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Built by Someone Who Understands</h1>
          <p className="text-xl text-muted-foreground">
            As a web developer who has worked with healthcare providers, I understand the unique 
            challenges Adult Family Homes face in attracting the right families while maintaining 
            compliance and trust.
          </p>
        </div>
        
        {/* Process Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our 4-Step Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pick Your Template",
                  description: "Choose from our AFH-specific designs or let us recommend the best fit."
                },
                {
                  step: "2", 
                  title: "Customize Everything",
                  description: "We tailor colors, photos, and copy to match your home's personality and services."
                },
                {
                  step: "3",
                  title: "QA & Launch", 
                  description: "Thorough testing across devices before going live with your approval."
                },
                {
                  step: "4",
                  title: "Ongoing Care",
                  description: "Regular updates, monitoring, and support to keep your site running smoothly."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Caring support in adult family home"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
        </div>
        
        {/* Values Section */}
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: Eye,
                title: "Clarity",
                description: "Every element serves a purpose",
                color: "primary"
              },
              {
                icon: Heart,
                title: "Empathy", 
                description: "Understanding family concerns",
                color: "secondary"
              },
              {
                icon: Zap,
                title: "Speed",
                description: "Fast launch and quick updates", 
                color: "accent"
              },
              {
                icon: Shield,
                title: "Reliability",
                description: "Always there when you need us",
                color: "primary"
              }
            ].map((value, index) => (
              <div key={index}>
                <div className={`w-12 h-12 bg-${value.color}/10 text-${value.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Why AFH Specific */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Adult Family Home Focused?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Industry Understanding</h3>
                <p className="text-muted-foreground mb-4">
                  Having worked with healthcare providers, I understand the unique regulations, 
                  privacy requirements, and family concerns that AFHs navigate daily.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• HIPAA compliance considerations</li>
                  <li>• State licensing requirements</li>
                  <li>• Family decision-making process</li>
                  <li>• Trust and safety messaging</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Specialized Features</h3>
                <p className="text-muted-foreground mb-4">
                  Every template and feature is designed with AFH-specific needs in mind, 
                  from service descriptions to tour booking flows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Care service highlighting</li>
                  <li>• Tour scheduling integration</li>
                  <li>• Family-friendly messaging</li>
                  <li>• Local SEO optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Mission */}
        <div className="mt-16 bg-muted rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">My Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To help Adult Family Homes build trust with families through clear, professional websites 
            that showcase the quality care they provide. Every family deserves to easily find and 
            connect with the right care for their loved ones.
          </p>
        </div>
      </div>
    </div>
  );
}
