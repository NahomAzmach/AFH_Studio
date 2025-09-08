import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Calendar, Music, Palette, Users, Heart, Sun, Activity, Camera, Coffee, Gamepad2 } from "lucide-react";

export default function SunriseOrchardTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 dark:from-orange-950 dark:via-yellow-950 dark:to-orange-950">
      {/* Header */}
      <header className="bg-white/95 dark:bg-orange-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 bounce-in">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Sun className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Sunrise Orchard
                </h1>
                <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">Active Living Community</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-orange-700 dark:text-orange-300 hover:text-yellow-600 font-medium transition-all duration-300 hover:scale-105">Home</a>
              <a href="#activities" className="text-orange-700 dark:text-orange-300 hover:text-yellow-600 font-medium transition-all duration-300 hover:scale-105">Activities</a>
              <a href="#community" className="text-orange-700 dark:text-orange-300 hover:text-yellow-600 font-medium transition-all duration-300 hover:scale-105">Community</a>
              <a href="#amenities" className="text-orange-700 dark:text-orange-300 hover:text-yellow-600 font-medium transition-all duration-300 hover:scale-105">Amenities</a>
              <a href="#contact" className="text-orange-700 dark:text-orange-300 hover:text-yellow-600 font-medium transition-all duration-300 hover:scale-105">Contact</a>
            </nav>
            
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              (555) 456-7890
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-yellow-400/20 to-orange-400/20 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 text-orange-800 dark:text-orange-200 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                <Activity className="w-4 h-4 mr-2 animate-bounce" />
                Where Every Day Shines Bright!
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-orange-800 dark:text-orange-100 mb-6 leading-tight">
                Live Life to the 
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent block animate-color-shift">
                  Fullest!
                </span>
              </h2>
              <p className="text-xl text-orange-700 dark:text-orange-200 mb-8 leading-relaxed">
                At Sunrise Orchard, we believe every sunrise brings new opportunities for joy, 
                connection, and adventure. Join our vibrant community where active living meets 
                compassionate care in a bright, cheerful environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  Join Our Community Today!
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 font-semibold hover:scale-105 transition-all duration-300">
                  Watch Our Virtual Tour
                </Button>
              </div>
            </div>
            
            <div className="relative slide-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl blur opacity-75 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Active seniors enjoying community activities"
                className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Activity Cards */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-orange-800 p-4 rounded-xl shadow-lg float-animation">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-700 rounded-full flex items-center justify-center">
                    <Music className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-bold text-orange-800 dark:text-orange-100 text-sm">Music Therapy</p>
                    <p className="text-xs text-orange-600 dark:text-orange-300">Today 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-orange-800 p-4 rounded-xl shadow-lg float-animation-delayed">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-700 rounded-full flex items-center justify-center">
                    <Palette className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-bold text-orange-800 dark:text-orange-100 text-sm">Art Workshop</p>
                    <p className="text-xs text-orange-600 dark:text-orange-300">Tomorrow 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-white/70 dark:bg-orange-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-orange-800 dark:text-orange-100 mb-4">
              Daily Adventures Await
            </h3>
            <p className="text-xl text-orange-600 dark:text-orange-300 max-w-2xl mx-auto">
              From sunrise yoga to evening game nights, every day is filled with opportunities 
              to engage, learn, and have fun together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Music, title: "Music & Dance", description: "Live performances, sing-alongs, and dance parties", color: "from-purple-400 to-pink-400" },
              { icon: Palette, title: "Arts & Crafts", description: "Painting, pottery, and creative workshops", color: "from-blue-400 to-cyan-400" },
              { icon: Gamepad2, title: "Games & Puzzles", description: "Board games, puzzles, and brain teasers", color: "from-green-400 to-emerald-400" },
              { icon: Camera, title: "Photography Club", description: "Capture memories and explore creativity", color: "from-orange-400 to-red-400" },
              { icon: Coffee, title: "Social Hours", description: "Coffee talks and community gatherings", color: "from-amber-400 to-orange-400" },
              { icon: Activity, title: "Fitness Classes", description: "Chair yoga, gentle exercises, and wellness", color: "from-teal-400 to-blue-400" },
              { icon: Users, title: "Group Outings", description: "Museums, parks, and local adventures", color: "from-indigo-400 to-purple-400" },
              { icon: Heart, title: "Volunteer Projects", description: "Community service and giving back", color: "from-rose-400 to-pink-400" }
            ].map((activity, index) => (
              <Card key={index} className="activity-card hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white/90 dark:bg-orange-800/50 border-orange-200 dark:border-orange-700" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg activity-icon-bounce`}>
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-orange-800 dark:text-orange-100 mb-2">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-orange-600 dark:text-orange-300">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-orange-800 dark:text-orange-100 mb-4">
                Weekly Activity Calendar
              </h4>
              <p className="text-orange-600 dark:text-orange-300 mb-6">
                Check out this week's exciting lineup of activities and events!
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:scale-105 transition-transform duration-300">
                <Calendar className="w-4 h-4 mr-2" />
                View Full Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-100 dark:from-orange-900 dark:via-yellow-900 dark:to-orange-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h3 className="text-4xl font-bold text-orange-800 dark:text-orange-100 mb-6">
                A Community That Cares
              </h3>
              <p className="text-lg text-orange-700 dark:text-orange-200 mb-6 leading-relaxed">
                At Sunrise Orchard, we're not just a care facility—we're a family. Our residents 
                form lasting friendships, share stories, and support each other through every 
                chapter of life.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Intergenerational programs with local schools",
                  "Pet therapy and visiting animals",
                  "Cultural celebrations and holiday traditions",
                  "Book clubs and discussion groups",
                  "Community garden and outdoor spaces",
                  "Regular family events and barbecues"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 feature-slide-in" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                    <span className="text-orange-700 dark:text-orange-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:scale-105 transition-transform duration-300">
                Meet Our Community
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Residents enjoying group activities"
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Community garden activities"
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Music and entertainment"
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Caring staff interactions"
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-600 via-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              Ready to Start Your Sunrise Story?
            </h3>
            <p className="text-xl opacity-90">
              Join our vibrant community where every day brings new adventures and lasting friendships.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Call Us Today!</h4>
                  <p className="text-xl">(555) 456-7890</p>
                  <p className="text-orange-100">Available 24/7 for tours and questions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Visit Us</h4>
                  <p className="text-xl">789 Sunrise Orchard Way</p>
                  <p className="text-orange-100">Bright Valley, WA 98103</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3">🌅 Daily Tours Available!</h4>
                <p className="text-orange-100">
                  Experience our community firsthand. Tours available every day from 9 AM to 6 PM. 
                  Drop by anytime or schedule a personal tour.
                </p>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">
                  Get Started Today!
                </h4>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-orange-100 backdrop-blur-sm"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-orange-100 backdrop-blur-sm"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-orange-100 backdrop-blur-sm"
                  />
                  <textarea 
                    placeholder="Tell us about yourself or ask any questions!"
                    rows={4}
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-orange-100 backdrop-blur-sm resize-none"
                  ></textarea>
                  <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 text-lg hover:scale-105 transition-all duration-300">
                    Send Message & Schedule Tour
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-800 dark:bg-orange-950 text-orange-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                  Sunrise Orchard
                </h4>
                <p className="text-orange-300">Active Living Community</p>
              </div>
            </div>
            <p className="text-orange-300 mb-4">
              Where every sunrise brings new possibilities for joy, growth, and connection.
            </p>
            <p className="text-orange-400 text-sm">
              © 2024 Sunrise Orchard Adult Family Home. Licensed AFH #789012.
            </p>
            <p className="text-orange-500 text-xs mt-2">
              🌅 Making every day brighter • (555) 456-7890
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounceIn {
          from {
            opacity: 0;
            transform: scale(0.3) translateY(-50px);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        @keyframes floatAnimation {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes activityCardUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes iconBounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes featureSlideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes colorShift {
          0%, 100% {
            filter: hue-rotate(0deg);
          }
          50% {
            filter: hue-rotate(30deg);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        .bounce-in {
          animation: bounceIn 1s ease-out;
        }
        
        .slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        .slide-in-right {
          animation: slideInRight 0.8s ease-out 0.3s both;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .float-animation {
          animation: floatAnimation 3s ease-in-out infinite;
        }
        
        .float-animation-delayed {
          animation: floatAnimation 3s ease-in-out infinite 1.5s;
        }
        
        .activity-card {
          animation: activityCardUp 0.6s ease-out both;
        }
        
        .activity-icon-bounce {
          animation: iconBounce 2s ease-in-out infinite;
        }
        
        .feature-slide-in {
          animation: featureSlideIn 0.6s ease-out both;
        }
        
        .animate-color-shift {
          animation: colorShift 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}