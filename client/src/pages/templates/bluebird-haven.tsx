import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Crown, Diamond, Sparkles, Wine, Utensils, Flower, Car, Shield, Star } from "lucide-react";
import afhImage1 from "@assets/AFH1_1757372940863.jpg";
import afhImage2 from "@assets/AFH2_1757372940873.jpg";
import afhImage6 from "@assets/AFH6_1757372940884.jpg";

export default function BluebirdHavenTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Header */}
      <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100 dark:border-blue-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 elegant-slide-in">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-white sparkle-animation"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-900 bg-clip-text text-transparent">
                  Bluebird Haven
                </h1>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium tracking-wide">LUXURY ADULT FAMILY HOME</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#luxury" className="text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 relative group">
                Luxury Care
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#amenities" className="text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 relative group">
                Amenities
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#concierge" className="text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 relative group">
                Concierge
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            
            <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-blue-500">
              <Phone className="w-4 h-4 mr-2" />
              (555) 888-9999
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-800/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="luxury-fade-in">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 dark:from-blue-900 dark:via-indigo-900 dark:to-blue-900 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg border border-blue-200 dark:border-blue-700">
                <Diamond className="w-4 h-4 mr-2 animate-pulse" />
                Where Luxury Meets Compassionate Care
              </div>
              <h2 className="text-6xl md:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-8 leading-tight">
                Experience 
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent block luxury-shimmer">
                  Unparalleled
                </span>
                <span className="text-slate-600 dark:text-slate-400 text-5xl md:text-6xl">Elegance</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                At Bluebird Haven, we redefine luxury senior living. Our boutique adult family home 
                offers an exclusive, sophisticated environment where discerning residents enjoy 
                five-star amenities, personalized care, and uncompromising attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 text-white font-bold px-10 py-5 text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 border border-blue-500">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Reserve Your Private Tour
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold px-10 py-5 text-lg hover:scale-105 transition-all duration-300">
                  View Luxury Brochure
                </Button>
              </div>
            </div>
            
            <div className="relative luxury-slide-in">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>
              <div className="relative">
                <img 
                  src={afhImage1}
                  alt="Luxury adult family home with therapy dog and personal care"
                  className="rounded-3xl shadow-3xl w-full transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Luxury Feature Badges */}
                <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-800 luxury-float">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-100">5-Star Service</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">White-glove care</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-800 luxury-float-delayed">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Diamond className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-100">Boutique Living</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Exclusive & intimate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Services Section */}
      <section id="luxury" className="py-24 bg-white/70 dark:bg-slate-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Luxury Care Services
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Every detail crafted for comfort, dignity, and sophistication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Crown,
                title: "Personal Care Concierge",
                description: "Dedicated care coordinators ensuring every need is anticipated and met with discretion.",
                features: ["24/7 personal assistance", "Medication management", "Health monitoring", "Mobility support"],
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: Utensils,
                title: "Gourmet Dining Experience",
                description: "Chef-prepared meals with fine dining presentation and personalized nutrition plans.",
                features: ["Executive chef cuisine", "Dietary customization", "Wine pairing options", "Private dining"],
                gradient: "from-indigo-500 to-purple-600"
              },
              {
                icon: Sparkles,
                title: "Wellness & Spa Services",
                description: "Comprehensive wellness programs including massage therapy and holistic treatments.",
                features: ["In-house spa treatments", "Personal fitness training", "Meditation gardens", "Therapeutic programs"],
                gradient: "from-purple-500 to-pink-600"
              },
              {
                icon: Car,
                title: "Luxury Transportation",
                description: "Private chauffeur service for medical appointments and social outings.",
                features: ["Executive transportation", "Medical appointment escorts", "Cultural event outings", "Shopping excursions"],
                gradient: "from-green-500 to-teal-600"
              },
              {
                icon: Wine,
                title: "Cultural & Social Programs",
                description: "Curated cultural experiences and refined social activities for discerning tastes.",
                features: ["Private art viewings", "Wine tastings", "Cultural lectures", "Bridge tournaments"],
                gradient: "from-orange-500 to-red-600"
              },
              {
                icon: Shield,
                title: "Premium Security & Privacy",
                description: "Discreet security monitoring and complete privacy protection for peace of mind.",
                features: ["24/7 security monitoring", "Private entrance options", "Confidential records", "Emergency response"],
                gradient: "from-slate-500 to-slate-700"
              }
            ].map((service, index) => (
              <Card key={index} className="luxury-service-card hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-white/90 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 backdrop-blur-sm" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl luxury-icon-float`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <Star className="w-4 h-4 mr-3 text-yellow-500 flex-shrink-0" />
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

      {/* Luxury Amenities Section */}
      <section id="amenities" className="py-24 bg-gradient-to-br from-blue-100 via-indigo-100 to-slate-100 dark:from-blue-900 dark:via-indigo-900 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="luxury-content-slide">
              <h3 className="text-5xl font-bold text-slate-800 dark:text-slate-100 mb-8">
                Exclusive Amenities
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                Every space designed with luxury and comfort in mind, featuring the finest materials 
                and attention to detail that exceeds expectations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Private suites with premium furnishings",
                  "Landscaped gardens and walking paths",
                  "Library with fireplace and reading nooks",
                  "Executive chef kitchen and dining room",
                  "Spa and wellness center",
                  "Concierge and valet services",
                  "24/7 security and privacy protection",
                  "Luxury transportation fleet"
                ].map((amenity, index) => (
                  <div key={index} className="luxury-amenity-item flex items-center space-x-3" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="luxury-image-grid">
              <div className="grid grid-cols-2 gap-6">
                <img 
                  src={afhImage2}
                  alt="Elegant private suites with personal care"
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-700 col-span-2"
                />
                <img 
                  src={afhImage6}
                  alt="Premium dining experience with personal attention"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
                />
                <img 
                  src={afhImage1}
                  alt="Luxury private room with therapy services"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-bold mb-6">
                Begin Your Luxury Experience
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Discover the ultimate in sophisticated senior living. Schedule a private tour 
                and experience the Bluebird Haven difference.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold">Exclusive Consultation</h4>
                    <p className="text-2xl text-blue-200">(555) 888-9999</p>
                    <p className="text-blue-100">Private tours by appointment only</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold">Premier Location</h4>
                    <p className="text-xl text-blue-200">1000 Bluebird Haven Lane</p>
                    <p className="text-blue-100">Exclusive Estates, WA 98104</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold mb-4 flex items-center">
                    <Diamond className="w-6 h-6 mr-3" />
                    Exclusive Membership
                  </h4>
                  <p className="text-blue-100 leading-relaxed">
                    Bluebird Haven maintains an exclusive waiting list. Contact our concierge team 
                    for availability and to arrange a private consultation with our director.
                  </p>
                </div>
              </div>
              
              <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-10">
                  <h4 className="text-3xl font-bold text-white mb-8 text-center">
                    Request Private Tour
                  </h4>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="First Name" 
                        className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-blue-200 backdrop-blur-sm"
                      />
                      <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-blue-200 backdrop-blur-sm"
                      />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-blue-200 backdrop-blur-sm"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-blue-200 backdrop-blur-sm"
                    />
                    <select className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white backdrop-blur-sm">
                      <option value="">Preferred Tour Time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                      <option value="evening">Evening (5 PM - 7 PM)</option>
                    </select>
                    <textarea 
                      placeholder="Tell us about your specific needs and preferences..."
                      rows={4}
                      className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-blue-200 backdrop-blur-sm resize-none"
                    ></textarea>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-5 text-lg hover:scale-105 transition-all duration-300 shadow-xl">
                      <Crown className="w-5 h-5 mr-2" />
                      Schedule Exclusive Tour
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Bluebird Haven
                </h4>
                <p className="text-blue-400 font-medium">Luxury Adult Family Home</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Where sophisticated living meets compassionate care. An exclusive community 
              designed for discerning individuals who value luxury, privacy, and exceptional service.
            </p>
            <div className="space-y-2">
              <p className="text-slate-500 text-sm">
                © 2024 Bluebird Haven Luxury Adult Family Home. All rights reserved.
              </p>
              <p className="text-blue-400 text-sm">
                Licensed Luxury AFH #987654 | Member of Exclusive Care Communities
              </p>
              <p className="text-slate-600 text-xs">
                💎 Exceptional care for exceptional lives • (555) 888-9999
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes elegantSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes luxuryFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes luxurySlideIn {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes luxuryFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(1deg);
          }
          66% {
            transform: translateY(-4px) rotate(-0.5deg);
          }
        }
        
        @keyframes luxuryServiceCard {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes luxuryIconFloat {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(2deg);
          }
        }
        
        @keyframes luxuryShimmer {
          0%, 100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }
        
        @keyframes sparkleAnimation {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.7;
          }
        }
        
        @keyframes luxuryContentSlide {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes luxuryImageGrid {
          from {
            opacity: 0;
            transform: translateX(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes luxuryAmenityItem {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .elegant-slide-in {
          animation: elegantSlideIn 1s ease-out;
        }
        
        .luxury-fade-in {
          animation: luxuryFadeIn 1s ease-out;
        }
        
        .luxury-slide-in {
          animation: luxurySlideIn 1s ease-out 0.3s both;
        }
        
        .luxury-float {
          animation: luxuryFloat 4s ease-in-out infinite;
        }
        
        .luxury-float-delayed {
          animation: luxuryFloat 4s ease-in-out infinite 2s;
        }
        
        .luxury-service-card {
          animation: luxuryServiceCard 0.8s ease-out both;
        }
        
        .luxury-icon-float {
          animation: luxuryIconFloat 3s ease-in-out infinite;
        }
        
        .luxury-shimmer {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          background-size: 200% 100%;
          animation: luxuryShimmer 3s ease-in-out infinite;
        }
        
        .sparkle-animation {
          animation: sparkleAnimation 2s ease-in-out infinite;
        }
        
        .luxury-content-slide {
          animation: luxuryContentSlide 1s ease-out;
        }
        
        .luxury-image-grid {
          animation: luxuryImageGrid 1s ease-out 0.2s both;
        }
        
        .luxury-amenity-item {
          animation: luxuryAmenityItem 0.6s ease-out both;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}