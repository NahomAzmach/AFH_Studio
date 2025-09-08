import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Shield, Award, Users, Heart, Star, CheckCircle } from "lucide-react";

export default function MapleStoneTemplate() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      {/* Header */}
      <header className="bg-white dark:bg-stone-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Maple & Stone</h1>
                <p className="text-sm text-stone-600 dark:text-stone-400">Adult Family Home</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-stone-700 dark:text-stone-300 hover:text-amber-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-stone-700 dark:text-stone-300 hover:text-amber-600 font-medium transition-colors">About</a>
              <a href="#services" className="text-stone-700 dark:text-stone-300 hover:text-amber-600 font-medium transition-colors">Services</a>
              <a href="#amenities" className="text-stone-700 dark:text-stone-300 hover:text-amber-600 font-medium transition-colors">Amenities</a>
              <a href="#contact" className="text-stone-700 dark:text-stone-300 hover:text-amber-600 font-medium transition-colors">Contact</a>
            </nav>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Call (555) 789-0123
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-50 dark:from-stone-800 dark:via-stone-900 dark:to-amber-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 fade-in-scale">
              <div className="inline-flex items-center bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Licensed & Trusted Since 1995
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-stone-800 dark:text-stone-100 mb-6">
                A Legacy of 
                <span className="text-amber-600 block">Trusted Care</span>
              </h2>
              <p className="text-xl text-stone-600 dark:text-stone-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                For nearly three decades, Maple & Stone has provided exceptional adult family home 
                care with the warmth of family and the professionalism you deserve. Our experienced 
                team creates a safe, nurturing environment where residents thrive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { number: "28+", label: "Years of Excellence" },
                { number: "500+", label: "Families Served" },
                { number: "24/7", label: "Professional Care" }
              ].map((stat, index) => (
                <div key={index} className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-sm counter-animate" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
                  <div className="text-stone-600 dark:text-stone-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 text-lg">
                Schedule a Personal Tour
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 font-semibold px-8 py-4 text-lg">
                Call: (555) 789-0123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="flex items-center mb-6">
                <div className="w-3 h-12 bg-amber-600 rounded-full mr-4"></div>
                <h3 className="text-3xl font-bold text-stone-800 dark:text-stone-100">Our Story</h3>
              </div>
              <p className="text-lg text-stone-600 dark:text-stone-300 mb-6 leading-relaxed">
                Founded in 1995 by the Johnson family, Maple & Stone began with a simple mission: 
                to provide the kind of care we would want for our own family members. What started 
                as a single home has grown into a trusted name in adult family care.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-300 mb-8 leading-relaxed">
                Our approach combines traditional values with modern care practices, ensuring each 
                resident receives personalized attention in a warm, home-like environment.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "State Licensed", subtitle: "Fully certified & inspected" },
                  { icon: Award, title: "Family Owned", subtitle: "Three generations of care" },
                  { icon: Users, title: "Experienced Staff", subtitle: "Average 10+ years experience" },
                  { icon: Heart, title: "Personalized Care", subtitle: "Tailored to each resident" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 dark:text-stone-100 mb-1">{item.title}</h4>
                      <p className="text-sm text-stone-600 dark:text-stone-400">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Caring staff with resident"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-100 dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
              Comprehensive Care Services
            </h3>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Every service designed with dignity, respect, and individual needs in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Care Assistance",
                items: ["Bathing and grooming", "Dressing assistance", "Mobility support", "Incontinence care"]
              },
              {
                title: "Medication Management",
                items: ["Prescription coordination", "Dosage monitoring", "Doctor communication", "Pharmacy liaison"]
              },
              {
                title: "Nutritional Support",
                items: ["Home-cooked meals", "Special dietary needs", "Hydration monitoring", "Nutritionist consultation"]
              },
              {
                title: "Health Coordination",
                items: ["Doctor appointments", "Physical therapy", "Specialist visits", "Health monitoring"]
              },
              {
                title: "Activities & Enrichment",
                items: ["Social programs", "Exercise classes", "Arts and crafts", "Community outings"]
              },
              {
                title: "Family Communication",
                items: ["Regular updates", "Care plan meetings", "Open visitation", "Emergency contact"]
              }
            ].map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 service-card-animate" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-4">
                    {service.title}
                  </h4>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-stone-600 dark:text-stone-400">
                        <CheckCircle className="w-4 h-4 mr-3 text-amber-600 flex-shrink-0" />
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

      {/* Testimonial Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-amber-200 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
              "Maple & Stone has been our family's blessing. The staff treats Mom with such genuine 
              care and respect. We couldn't have asked for a better place for her to call home."
            </blockquote>
            <footer className="text-amber-200">
              <p className="font-semibold">— Jennifer Martinez</p>
              <p className="text-sm">Daughter of resident Mary Martinez</p>
            </footer>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                Schedule Your Personal Tour
              </h3>
              <p className="text-xl text-stone-600 dark:text-stone-400">
                Experience the Maple & Stone difference firsthand
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">Contact Information</h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-stone-800 dark:text-stone-100">Phone</p>
                        <p className="text-stone-600 dark:text-stone-400">(555) 789-0123</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-stone-800 dark:text-stone-100">Address</p>
                        <p className="text-stone-600 dark:text-stone-400">456 Maple Stone Drive<br />Heritage Heights, WA 98102</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-stone-800 dark:text-stone-100">Tour Hours</p>
                        <p className="text-stone-600 dark:text-stone-400">Monday - Sunday<br />9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-950 rounded-xl">
                    <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Tours Available Daily</h5>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Walk-ins welcome, but appointments ensure dedicated time with our administrator.
                    </p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-stone-50 dark:bg-stone-900 border-stone-200 dark:border-stone-700">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">Request Information</h4>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="First Name" 
                        className="w-full p-3 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                      />
                      <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="w-full p-3 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                      />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-3 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                    />
                    <textarea 
                      placeholder="Tell us about your needs or questions..."
                      rows={4}
                      className="w-full p-3 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 resize-none"
                    ></textarea>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3">
                      Send Message & Schedule Tour
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 dark:bg-stone-950 text-stone-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Maple & Stone</h4>
                  <p className="text-sm text-stone-400">Adult Family Home</p>
                </div>
              </div>
              <p className="text-stone-400 text-sm">
                Nearly three decades of trusted, compassionate care in a warm, home-like environment.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Admissions</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Contact Info</h5>
              <div className="space-y-2 text-sm">
                <p>(555) 789-0123</p>
                <p>456 Maple Stone Drive<br />Heritage Heights, WA 98102</p>
                <p className="text-amber-400">Licensed AFH #654321</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 pt-8 text-center">
            <p className="text-stone-500 text-sm">
              © 2024 Maple & Stone Adult Family Home. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes counterUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes serviceCardFloat {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-scale {
          animation: fadeInScale 0.8s ease-out;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .slide-in-right {
          animation: slideInRight 0.8s ease-out 0.2s both;
        }
        
        .counter-animate {
          animation: counterUp 0.6s ease-out both;
        }
        
        .service-card-animate {
          animation: serviceCardFloat 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}