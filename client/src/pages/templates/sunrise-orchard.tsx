import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Heart, Sun, Camera, Music, Coffee, Users, Activity, Smile } from "lucide-react";

export default function SunriseOrchardTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 dark:from-orange-950 dark:via-yellow-950 dark:to-pink-950">
      {/* Instagram-Style Header */}
      <header className="bg-white/95 dark:bg-orange-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-orange-200 dark:border-orange-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  @sunriseorchard
                </h1>
                <p className="text-sm text-orange-600 dark:text-orange-400">Following • 2.5k posts</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-full px-6">
              Follow Us
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="bg-white/90 dark:bg-orange-900/50 backdrop-blur-sm border border-orange-200 dark:border-orange-700 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                    alt="Sunrise Orchard profile"
                    className="w-32 h-32 rounded-full border-4 border-gradient-to-r from-orange-400 to-pink-400 shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-orange-800 dark:text-orange-100 mb-2">Sunrise Orchard</h2>
                  <p className="text-orange-600 dark:text-orange-300 mb-4">🌅 Active Living Community • ❤️ Where Every Day Shines</p>
                  <p className="text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
                    🎨 Daily activities & adventures ✨ | 📍 Bright Valley, WA | 🏡 Your home away from home | 
                    ☎️ (555) 456-7890 for tours!
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="text-center">
                      <div className="font-bold text-xl text-orange-600">2.5k</div>
                      <div className="text-sm text-stone-600 dark:text-stone-400">posts</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-xl text-orange-600">150+</div>
                      <div className="text-sm text-stone-600 dark:text-stone-400">families</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-xl text-orange-600">24/7</div>
                      <div className="text-sm text-stone-600 dark:text-stone-400">care</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full px-8">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="border-orange-400 text-orange-600 rounded-full px-8">
                    Schedule Tour
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Highlights */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[
              { label: "Morning", icon: Sun, color: "from-yellow-400 to-orange-400" },
              { label: "Activities", icon: Activity, color: "from-pink-400 to-red-400" },
              { label: "Music", icon: Music, color: "from-purple-400 to-pink-400" },
              { label: "Garden", icon: Heart, color: "from-green-400 to-blue-400" },
              { label: "Friends", icon: Users, color: "from-blue-400 to-purple-400" },
              { label: "Coffee", icon: Coffee, color: "from-amber-400 to-orange-400" }
            ].map((story, index) => (
              <div key={index} className="flex-shrink-0 text-center cursor-pointer group">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${story.color} p-1 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white dark:bg-stone-800 rounded-full flex items-center justify-center">
                    <story.icon className="w-6 h-6 text-stone-600 dark:text-stone-300" />
                  </div>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">{story.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Post 1 - Large */}
            <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                alt="Morning exercise class"
                className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">127 likes</span>
                  </div>
                  <p className="text-sm">#MorningYoga #ActiveLiving #CommunityLife</p>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Art therapy session"
                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-semibold">89</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Music therapy"
                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-semibold">156</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 4 */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Garden time"
                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-semibold">203</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 5 - Video Style */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Community dinner"
                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[6px] border-l-orange-500 border-y-[3px] border-y-transparent ml-0.5"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-semibold">298</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 6 */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Reading corner"
                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-semibold">74</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 7 - Multi-photo */}
            <div className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Holiday celebration"
                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2">
                <div className="bg-white/80 rounded-full px-2 py-1 text-xs font-bold text-stone-800">
                  1/4
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-semibold">342 likes</span>
                  </div>
                  <p className="text-xs">#HolidayParty #Community #Celebration</p>
                </div>
              </div>
            </div>

            {/* More posts in grid pattern... */}
            {[
              "https://images.unsplash.com/photo-1595091629736-f4e24d19df1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
              "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
              "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
              "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
              "https://images.unsplash.com/photo-1495847785913-60c0b8f4e33f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
            ].map((img, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <img 
                  src={img}
                  alt={`Community moment ${index + 8}`}
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs font-semibold">{Math.floor(Math.random() * 200) + 50}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section as Instagram Story */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                  alt="Join our community"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center px-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Smile className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Ready to Join Our Story?</h3>
                  <p className="text-xl mb-8 opacity-90">
                    Every day is an adventure at Sunrise Orchard! 
                    Schedule your tour and see why our community shines so bright ✨
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (555) 456-7890
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full">
                      <Camera className="w-5 h-5 mr-2" />
                      Schedule Photo Tour
                    </Button>
                  </div>
                  <div className="mt-6 flex items-center justify-center space-x-4 text-white/80">
                    <MapPin className="w-4 h-4" />
                    <span>789 Sunrise Orchard Way, Bright Valley, WA</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer as Instagram Footer */}
      <footer className="bg-white/90 dark:bg-orange-900/90 backdrop-blur-sm py-8 mt-12 border-t border-orange-200 dark:border-orange-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-orange-800 dark:text-orange-100">@sunriseorchard</h4>
              <p className="text-orange-600 dark:text-orange-300 text-sm">Making every day brighter</p>
            </div>
          </div>
          <div className="text-stone-600 dark:text-stone-400 space-y-1">
            <p className="text-sm">© 2024 Sunrise Orchard Active Living Community</p>
            <p className="text-sm">Licensed AFH #789012 • 🌅 Where every day shines • (555) 456-7890</p>
            <div className="flex justify-center space-x-4 mt-3">
              {["#ActiveLiving", "#CommunityLife", "#SunriseOrchard", "#BrightValley"].map((tag, index) => (
                <span key={index} className="text-orange-500 dark:text-orange-400 text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}