import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Heart, TreePine, Leaf, Mountain, ArrowDown } from "lucide-react";
import afhImage2 from "@assets/AFH2_1757372940873.jpg";
import afhImage3 from "@assets/AFH3_1757372940875.jpg";
import afhImage5 from "@assets/AFH5_1757372940879.jpg";

export default function CedarGroveTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-900 text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-green-900/80 backdrop-blur-md border-b border-green-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <TreePine className="w-8 h-8 text-green-300" />
            <span className="text-2xl font-bold">Cedar Grove Living</span>
          </div>
          <Button className="bg-green-600 hover:bg-green-500 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </nav>

      {/* Full Screen Hero with Parallax */}
      <section className="min-h-screen relative flex items-center justify-center parallax-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
backgroundImage: `url(${afhImage2})`
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white story-fade-in">
            Where Stories
            <span className="block text-green-300">Come to Rest</span>
          </h1>
          <p className="text-2xl md:text-3xl text-green-100 mb-12 story-fade-in-delayed leading-relaxed">
            Nestled among ancient cedars, we honor the stories of a lifetime with gentle care and endless compassion.
          </p>
          <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-green-300" />
        </div>
      </section>

      {/* Story Section 1 - Our Beginning */}
      <section className="min-h-screen flex items-center relative story-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
          style={{
backgroundImage: `url(${afhImage3})`
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="story-text-slide">
              <div className="flex items-center mb-6">
                <Mountain className="w-12 h-12 text-green-300 mr-4" />
                <span className="text-green-300 text-lg font-semibold tracking-wide">CHAPTER ONE</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                The Grove's
                <span className="block text-green-300">Beginning</span>
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-green-100">
                In 1987, Martha and James Cedar planted the first tree in what would become our healing garden. 
                They dreamed of a place where elders could find peace among nature's embrace, where every sunrise 
                brought new hope and every sunset held cherished memories.
              </p>
              <p className="text-lg text-green-200 mb-8">
                Today, those same trees tower overhead, their branches sheltering three generations of families 
                who have called Cedar Grove home.
              </p>
            </div>
            <div className="story-image-float">
              <img 
                src={afhImage2}
                alt="Caring staff providing personalized attention"
                className="rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2 - Our Philosophy */}
      <section className="min-h-screen flex items-center relative story-section bg-green-800/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="story-image-float order-2 lg:order-1">
              <img 
                src={afhImage3}
                alt="Residents enjoying community activities"
                className="rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="story-text-slide order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Leaf className="w-12 h-12 text-green-300 mr-4" />
                <span className="text-green-300 text-lg font-semibold tracking-wide">CHAPTER TWO</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Growing Together
                <span className="block text-green-300">Naturally</span>
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-green-100">
                We believe healing happens in cycles, like the seasons. Our approach to care mirrors nature itself - 
                patient, nurturing, and always focused on growth, even in life's winter chapters.
              </p>
              <div className="space-y-4">
                {[
                  "Morning walks through our medicinal herb garden",
                  "Afternoon tea in the greenhouse conservatory", 
                  "Evening stories by the stone fire pit",
                  "Stargazing from our elevated deck"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-green-200 text-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Philosophy - Full Width */}
      <section className="py-24 bg-gradient-to-r from-green-900 via-green-800 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-600/10 animate-pulse-slow"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              The Cedar Grove
              <span className="block text-green-300">Promise</span>
            </h2>
            <p className="text-2xl text-green-100 max-w-3xl mx-auto">
              Like the mighty cedars that shelter us, our care is deep-rooted, strong, and everlasting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rooted Care",
                description: "Deep, personalized attention that grows from understanding each resident's unique story and needs.",
                icon: TreePine
              },
              {
                title: "Seasonal Wellness", 
                description: "Activities and care that flow with nature's rhythms, promoting health in body, mind, and spirit.",
                icon: Leaf
              },
              {
                title: "Generational Love",
                description: "Creating bonds that span generations, where families become part of our extended Cedar Grove family.",
                icon: Heart
              }
            ].map((value, index) => (
              <Card key={index} className="bg-green-800/30 border-green-600 backdrop-blur-sm hover:bg-green-700/40 transition-all duration-500 transform hover:-translate-y-4 philosophy-card" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8 text-center">
                  <value.icon className="w-16 h-16 text-green-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-green-100 text-lg leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Story - Your Chapter */}
      <section className="min-h-screen flex items-center relative story-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
          style={{
backgroundImage: `url(${afhImage5})`
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-12 story-fade-in">
            Your Story
            <span className="block text-green-300">Continues Here</span>
          </h2>
          <p className="text-2xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed story-fade-in-delayed">
            Every life is a story worth celebrating. At Cedar Grove Living, we're honored to be part of 
            the chapters yet to be written, the memories yet to be made, and the legacy yet to unfold.
          </p>
          
          <div className="bg-green-800/60 backdrop-blur-lg rounded-3xl p-12 max-w-2xl mx-auto border border-green-600">
            <h3 className="text-3xl font-bold mb-8">Begin Your Next Chapter</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 text-xl">
                <Phone className="w-6 h-6 text-green-300" />
                <span>(555) 123-GROVE</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-xl">
                <MapPin className="w-6 h-6 text-green-300" />
                <span>123 Cedar Grove Lane, Peaceful Valley, WA</span>
              </div>
              <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white font-bold px-12 py-6 text-xl mt-8">
                Schedule Your Story Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes storyFadeIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes storyTextSlide {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes storyImageFloat {
          from {
            opacity: 0;
            transform: translateX(80px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes philosophyCard {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .story-fade-in {
          animation: storyFadeIn 1.5s ease-out;
        }
        
        .story-fade-in-delayed {
          animation: storyFadeIn 1.5s ease-out 0.5s both;
        }
        
        .story-text-slide {
          animation: storyTextSlide 1.2s ease-out;
        }
        
        .story-image-float {
          animation: storyImageFloat 1.2s ease-out 0.3s both;
        }
        
        .philosophy-card {
          animation: philosophyCard 0.8s ease-out both;
        }
        
        .story-section {
          background-attachment: fixed;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @media (max-width: 768px) {
          .parallax-hero {
            background-attachment: scroll;
          }
          .story-section {
            background-attachment: scroll;
          }
        }
      `}</style>
    </div>
  );
}