import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Shield, Award, Users, Heart, Star, Mail, Calendar } from "lucide-react";
import afh2Image from "@assets/AFH2_1757374349746.jpg";
import afh4Image from "@assets/AFH4_1757374349759.jpg";
import afh6Image from "@assets/AFH6_1757374349764.jpg";

export default function MapleStoneTemplate() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 font-serif">
      {/* Classic Newspaper Header */}
      <header className="bg-white dark:bg-stone-800 border-b-4 border-amber-600 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center border-b-2 border-amber-600 pb-4 mb-4">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded border-2 border-amber-600 flex items-center justify-center">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 tracking-wide">
                  THE MAPLE & STONE
                </h1>
                <p className="text-amber-600 font-semibold tracking-widest text-sm">EST. 1995 • TRUSTED CARE • FAMILY OWNED</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-semibold">
            <span className="text-stone-600 dark:text-stone-400">📞 (555) 789-0123</span>
            <span className="text-stone-600 dark:text-stone-400">📍 Heritage Heights, WA</span>
            <span className="text-stone-600 dark:text-stone-400">🕐 Tours Daily 9-6</span>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold">
              SCHEDULE VISIT TODAY
            </Button>
          </div>
        </div>
      </header>

      {/* Breaking News Banner */}
      <div className="bg-amber-600 text-white py-2 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <span className="mx-8 font-bold">🏆 BREAKING: Maple & Stone Celebrates 28 Years of Excellence</span>
          <span className="mx-8">⭐ Recently Featured: "Best Adult Family Home" - Local Times</span>
          <span className="mx-8">📢 Now Accepting: Tour Appointments for 2024</span>
          <span className="mx-8 font-bold">🏆 BREAKING: Maple & Stone Celebrates 28 Years of Excellence</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main News Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Left Column - Main Story */}
          <div className="lg:col-span-3">
            <article className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden shadow-lg mb-8">
              <div className="bg-amber-600 text-white p-2 text-center">
                <span className="font-bold text-sm tracking-wide">HEADLINE STORY</span>
              </div>
              <img 
                src={afh2Image}
                alt="Professional care and personal attention at Maple & Stone"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4 leading-tight">
                  "A Legacy of Trust: How Three Generations Built Washington's Premier Adult Family Home"
                </h2>
                <p className="text-amber-600 font-semibold mb-4 text-lg">
                  By Sarah Johnson, Health Reporter | March 15, 2024
                </p>
                <div className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed space-y-4">
                  <p>
                    <strong>HERITAGE HEIGHTS, WA</strong> — In 1995, when the Johnson family first opened the doors of Maple & Stone Adult Family Home, they had a simple mission: provide the kind of care they would want for their own family members.
                  </p>
                  <p>
                    Nearly three decades later, that philosophy has made Maple & Stone one of the most trusted names in adult family care, serving over 500 families and maintaining an unprecedented 98% satisfaction rating.
                  </p>
                  <p>
                    "We're not just a business," says Margaret Johnson, third-generation owner and administrator. "We're a family caring for families. Every resident becomes part of our extended family tree."
                  </p>
                </div>
              </div>
            </article>

            {/* Photo Gallery News Style */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                <div className="bg-stone-100 dark:bg-stone-700 p-2 text-center border-b">
                  <span className="font-bold text-sm">PHOTO FEATURE</span>
                </div>
                <img 
                  src={afh4Image}
                  alt="Residents enjoying community activities"
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-2">Daily Activities Bring Joy</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400">Residents enjoy arts, crafts, and social hours in our comfortable common areas.</p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                <div className="bg-stone-100 dark:bg-stone-700 p-2 text-center border-b">
                  <span className="font-bold text-sm">TESTIMONIAL</span>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-stone-700 dark:text-stone-300 italic text-center mb-3">
                    "Maple & Stone gave Mom the dignity and care she deserved. We couldn't have asked for better."
                  </blockquote>
                  <p className="text-sm font-semibold text-center text-amber-600">— Jennifer Martinez, Family Member</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Quick Facts Box */}
            <Card className="bg-amber-50 dark:bg-amber-950 border-2 border-amber-600">
              <div className="bg-amber-600 text-white p-2 text-center">
                <span className="font-bold text-sm">QUICK FACTS</span>
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <span className="text-sm"><strong>Founded:</strong> 1995</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-amber-600" />
                  <span className="text-sm"><strong>Families Served:</strong> 500+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-amber-600" />
                  <span className="text-sm"><strong>Licensed:</strong> AFH #654321</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-amber-600" />
                  <span className="text-sm"><strong>Care Style:</strong> Family-centered</span>
                </div>
              </CardContent>
            </Card>

            {/* Services Directory */}
            <Card className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
              <div className="bg-stone-700 text-white p-2 text-center">
                <span className="font-bold text-sm">SERVICES DIRECTORY</span>
              </div>
              <CardContent className="p-4">
                <ul className="space-y-2 text-sm">
                  <li className="border-b border-stone-200 dark:border-stone-600 pb-1">
                    <strong>Personal Care</strong><br />
                    <span className="text-stone-600 dark:text-stone-400">Daily living assistance</span>
                  </li>
                  <li className="border-b border-stone-200 dark:border-stone-600 pb-1">
                    <strong>Medication Management</strong><br />
                    <span className="text-stone-600 dark:text-stone-400">Professional coordination</span>
                  </li>
                  <li className="border-b border-stone-200 dark:border-stone-600 pb-1">
                    <strong>Nutritional Support</strong><br />
                    <span className="text-stone-600 dark:text-stone-400">Home-cooked meals</span>
                  </li>
                  <li className="border-b border-stone-200 dark:border-stone-600 pb-1">
                    <strong>Activities Program</strong><br />
                    <span className="text-stone-600 dark:text-stone-400">Social engagement</span>
                  </li>
                  <li>
                    <strong>Family Communication</strong><br />
                    <span className="text-stone-600 dark:text-stone-400">Regular updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Weather Widget Style */}
            <Card className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
              <div className="bg-blue-600 text-white p-2 text-center">
                <span className="font-bold text-sm">VISITING CONDITIONS</span>
              </div>
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-bold">Excellent for Tours</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">Open Daily 9 AM - 6 PM</p>
                <p className="text-xs text-blue-600 mt-2">Walk-ins Welcome</p>
              </CardContent>
            </Card>

            {/* Advertisement Style */}
            <Card className="bg-gradient-to-b from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-950 border-2 border-amber-400">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">AWARD WINNER</h3>
                <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
                  "Best Adult Family Home 2023"<br />
                  — Regional Health Guide
                </p>
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Read Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Contact Form as Classified Ad */}
        <div className="mt-12 bg-stone-100 dark:bg-stone-800 border-4 border-stone-300 dark:border-stone-600 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2">CLASSIFIED OPPORTUNITY</h2>
            <p className="text-amber-600 font-semibold">Don't Miss Out - Limited Availability</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">SEEKING: Discerning Families</h3>
              <p className="text-stone-700 dark:text-stone-300 mb-4">
                For immediate placement in Heritage Heights' most trusted adult family home. 
                Must value quality care, family atmosphere, and 28-year legacy of excellence.
              </p>
              <div className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Call: (555) 789-0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Visit: 456 Maple Stone Drive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email: info@mapleandstone.care</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-white dark:bg-stone-700 border-2 border-amber-600">
              <div className="bg-amber-600 text-white p-3 text-center">
                <span className="font-bold">RESPOND TODAY</span>
              </div>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-stone-300 dark:border-stone-600 rounded bg-white dark:bg-stone-800"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 border border-stone-300 dark:border-stone-600 rounded bg-white dark:bg-stone-800"
                  />
                  <textarea 
                    placeholder="Tell us about your needs..."
                    rows={3}
                    className="w-full p-3 border border-stone-300 dark:border-stone-600 rounded bg-white dark:bg-stone-800 resize-none"
                  ></textarea>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3">
                    SUBMIT INQUIRY
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer as Newspaper Footer */}
      <footer className="bg-stone-800 dark:bg-stone-950 text-stone-300 py-8 border-t-4 border-amber-600">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Award className="w-8 h-8 text-amber-600" />
            <div>
              <h4 className="text-2xl font-bold text-white">THE MAPLE & STONE</h4>
              <p className="text-amber-400 text-sm">Adult Family Home • Est. 1995</p>
            </div>
          </div>
          <div className="border-t border-stone-600 pt-4">
            <p className="text-stone-400 text-sm">
              © 2024 Maple & Stone Adult Family Home • Licensed AFH #654321 • All Rights Reserved
            </p>
            <p className="text-amber-500 text-xs mt-1">
              "Where Family Values Meet Professional Care" • (555) 789-0123
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        @font-face {
          font-family: 'Newspaper';
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </div>
  );
}