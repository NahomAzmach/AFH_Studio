import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Users, Heart, Shield, Flower2, TreePine, Sun } from "lucide-react";

export default function CedarGroveTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-50 to-emerald-50 dark:from-green-950 dark:via-green-900 dark:to-emerald-900">
      {/* Header */}
      <header className="bg-white/90 dark:bg-green-900/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TreePine className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-green-800 dark:text-green-100">Cedar Grove Living</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-green-700 hover:text-green-900 transition-colors">Home</a>
            <a href="#services" className="text-green-700 hover:text-green-900 transition-colors">Services</a>
            <a href="#amenities" className="text-green-700 hover:text-green-900 transition-colors">Amenities</a>
            <a href="#contact" className="text-green-700 hover:text-green-900 transition-colors">Contact</a>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Phone className="w-4 h-4 mr-2" />
            (555) 123-4567
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-green-800 dark:text-green-100 mb-6 leading-tight">
                Where Nature Meets 
                <span className="text-green-600 block">Compassionate Care</span>
              </h2>
              <p className="text-xl text-green-700 dark:text-green-200 mb-8 leading-relaxed">
                Nestled in a serene, garden-like setting, Cedar Grove Living provides personalized 
                adult family home care that honors the beauty of each season of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Schedule Your Tour
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Call Now: (555) 123-4567
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Beautiful garden setting with senior care"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-green-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-700 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-800 dark:text-green-100">24/7 Care</p>
                    <p className="text-sm text-green-600 dark:text-green-300">Always here for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50 dark:bg-green-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 dark:text-green-100 mb-4">
              Comprehensive Care Services
            </h3>
            <p className="text-xl text-green-600 dark:text-green-300">
              Tailored support for every aspect of daily living
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Personal Care",
                description: "Assistance with daily activities, medication management, and personal hygiene with dignity and respect.",
                features: ["Bathing & grooming", "Medication reminders", "Mobility assistance", "Meal preparation"]
              },
              {
                icon: Heart,
                title: "Health & Wellness",
                description: "Coordinated healthcare services and wellness programs to maintain optimal health and vitality.",
                features: ["Doctor coordination", "Physical therapy", "Mental health support", "Wellness activities"]
              },
              {
                icon: Sun,
                title: "Enrichment Programs",
                description: "Engaging activities and social programs designed to promote joy, purpose, and connection.",
                features: ["Garden therapy", "Art & music", "Social outings", "Community events"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-green-800/50 border-green-200 dark:border-green-700">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h4 className="text-2xl font-semibold text-green-800 dark:text-green-100 mb-4 text-center">
                    {service.title}
                  </h4>
                  <p className="text-green-700 dark:text-green-200 mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-green-600 dark:text-green-300">
                        <Flower2 className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 dark:text-green-100 mb-4">
              Home-Like Amenities
            </h3>
            <p className="text-xl text-green-600 dark:text-green-300">
              Every comfort of home in a beautiful, natural setting
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Spacious private and semi-private rooms",
                "Beautiful landscaped gardens and walking paths",
                "Cozy common areas with natural lighting",
                "Professional kitchen with home-cooked meals",
                "Peaceful outdoor patios and seating areas",
                "Secure, fenced property with 24/7 supervision"
              ].map((amenity, index) => (
                <div key={index} className="flex items-center space-x-4 animate-fade-in-left" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-lg text-green-700 dark:text-green-200">{amenity}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1495847785913-60c0b8f4e33f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Beautiful garden and outdoor spaces"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-800 dark:bg-green-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Visit Cedar Grove Living</h3>
              <p className="text-xl text-green-100 mb-8">
                Experience the warmth and tranquility of our nature-centered care community. 
                Schedule a personal tour today.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-300" />
                  <span className="text-lg">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-green-300" />
                  <span className="text-lg">123 Cedar Grove Lane, Peaceful Valley, WA 98101</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-green-300" />
                  <span className="text-lg">Tours available daily 9 AM - 5 PM</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50">
                Schedule Your Visit Today
              </Button>
            </div>
            
            <Card className="bg-white/10 border-green-600">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Quick Contact Form</h4>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 rounded-lg bg-white/20 border border-green-300 text-white placeholder-green-200"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 rounded-lg bg-white/20 border border-green-300 text-white placeholder-green-200"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-3 rounded-lg bg-white/20 border border-green-300 text-white placeholder-green-200"
                  />
                  <textarea 
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full p-3 rounded-lg bg-white/20 border border-green-300 text-white placeholder-green-200 resize-none"
                  ></textarea>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 dark:bg-green-950 text-green-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TreePine className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold">Cedar Grove Living</span>
          </div>
          <p className="text-green-300">
            © 2024 Cedar Grove Living. Licensed Adult Family Home #123456.
          </p>
          <p className="text-sm text-green-400 mt-2">
            Where nature meets compassionate care • (555) 123-4567
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}