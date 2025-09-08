import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Zap, Shield, Linkedin, ExternalLink } from "lucide-react";
import profileImage from "@assets/ME_1757374829730.jpeg";
import afhImage from "@assets/AFH1_1757374349744.jpg";

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex flex-col items-center mb-8">
            <img
              src={profileImage}
              alt="Nahom - AFH Web Studio Founder"
              className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg"
              style={{ objectPosition: 'center' }}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm Nahom
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            I understand Adult Family Homes because they're part of my family's
            story. My relatives own and operate AFHs, so I've seen firsthand the
            challenges of finding the right families, building trust, and
            managing all the moving parts of running a care home.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            As a recent Computer Science graduate from Western Washington
            University (with minors in Biology and Chemistry), I'm heading to
            the University of Washington for my Master's degree in AI/Machine
            Learning. This technical foundation, combined with my family's AFH
            experience, gives me a unique perspective on what your website
            really needs to succeed.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/nahom-azmach/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-semibold">Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
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
                  description:
                    "Choose from our AFH-specific designs or let us recommend the best fit.",
                },
                {
                  step: "2",
                  title: "Customize Everything",
                  description:
                    "We tailor colors, photos, and copy to match your home's personality and services.",
                },
                {
                  step: "3",
                  title: "QA & Launch",
                  description:
                    "Thorough testing across devices before going live with your approval.",
                },
                {
                  step: "4",
                  title: "Ongoing Care",
                  description:
                    "Regular updates, monitoring, and support to keep your site running smoothly.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={afhImage}
              alt="Caring support in adult family home - therapy animals and compassionate care"
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
                color: "primary",
              },
              {
                icon: Heart,
                title: "Empathy",
                description: "Understanding family concerns",
                color: "secondary",
              },
              {
                icon: Zap,
                title: "Speed",
                description: "Fast launch and quick updates",
                color: "accent",
              },
              {
                icon: Shield,
                title: "Reliability",
                description: "Always there when you need us",
                color: "primary",
              },
            ].map((value, index) => (
              <div key={index}>
                <div
                  className={`w-12 h-12 bg-${value.color}/10 text-${value.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                >
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Why AFH Specific */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why I Focus on Adult Family Homes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Personal Experience
                </h3>
                <p className="text-muted-foreground mb-4">
                  Growing up around my family's AFH operations, I've witnessed
                  the daily challenges: managing state regulations, building
                  trust with worried families, and communicating the warmth and
                  professionalism that makes a good care home special.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Understanding family concerns and decision process</li>
                  <li>• Knowledge of state licensing and compliance</li>
                  <li>• Insight into operational challenges</li>
                  <li>• Appreciation for the care and dedication required</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Technical Expertise
                </h3>
                <p className="text-muted-foreground mb-4">
                  My Computer Science background, combined with studies in
                  Biology and Chemistry, gives me a unique perspective on
                  healthcare technology and the importance of clear, trustworthy
                  communication.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Healthcare-focused web development</li>
                  <li>• Privacy and compliance considerations</li>
                  <li>• User experience for sensitive decisions</li>
                  <li>• Local SEO for care providers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Mission */}
        <div className="mt-16 bg-muted rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">My Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Having seen the impact of quality AFH care on families through my
            own relatives' work, I want to help more families discover and
            connect with the right care homes. A professional website shouldn't
            be a barrier—it should be a bridge that helps families find the
            compassionate care their loved ones deserve.
          </p>
        </div>
      </div>
    </div>
  );
}
