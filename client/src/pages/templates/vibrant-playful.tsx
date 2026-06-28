import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Sun, Music, Palette, Sparkles, Heart, Smile } from "lucide-react";
import afh4Image from "@assets/AFH4_1757374349759.jpg";
import afh6Image from "@assets/AFH6_1757374349764.jpg";

export default function VibrantPlayfulTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 dark:from-stone-950 dark:via-orange-950 dark:to-pink-950">
      <header className="sticky top-0 z-10 border-b-4 border-orange-300 bg-white/90 backdrop-blur-sm dark:border-orange-800 dark:bg-stone-950/95">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-orange-600">Sunbeam Cottage</span>
          </div>
          <Button className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500">
            <Phone className="h-4 w-4" /> Call Us!
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-sm font-bold text-pink-600">
          <Sparkles className="h-4 w-4" /> Every day is a good day here
        </span>
        <h1 className="mx-auto max-w-3xl text-5xl font-extrabold leading-tight text-orange-600 md:text-6xl">
          Care that's full of <span className="text-pink-500">color</span> and{" "}
          <span className="text-teal-500">life</span>!
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-stone-600 dark:text-stone-200">
          Sunbeam Cottage is all about music, laughter, and good company — care that feels like a celebration, not a routine.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="rounded-full bg-pink-500 hover:bg-pink-600">
            <Smile className="h-4 w-4" /> Book a Tour
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-2 border-teal-400 text-teal-600 hover:bg-teal-50 dark:text-teal-200 dark:hover:bg-teal-950">
            See Our Activities
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <img src={afh4Image} alt="Lively community activities at Sunbeam Cottage" className="h-72 w-full rounded-[2rem] object-cover shadow-lg" />
          <img src={afh6Image} alt="Residents enjoying social time" className="h-72 w-full rounded-[2rem] object-cover shadow-lg" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-orange-600">What makes us shine</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Music, title: "Music Every Day", color: "from-pink-400 to-pink-500", desc: "Sing-alongs, live music afternoons, and dance parties — yes, really." },
            { icon: Palette, title: "Arts & Crafts", color: "from-teal-400 to-teal-500", desc: "A rotating gallery of resident artwork brightens every hallway." },
            { icon: Heart, title: "Big Hearts, Bigger Hugs", color: "from-orange-400 to-orange-500", desc: "Our caregivers genuinely love what they do, and it shows." },
          ].map((item) => (
            <Card key={item.title} className="rounded-3xl border-0 shadow-md transition-transform hover:-translate-y-2 dark:bg-stone-900">
              <CardContent className="p-8 text-center">
                <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-stone-800 dark:text-stone-100">{item.title}</h3>
                <p className="text-stone-600 dark:text-stone-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-extrabold">Ready for a brighter day?</h2>
        <p className="mb-8 text-lg opacity-90">Come meet the crew — we promise it'll make you smile.</p>
        <Button size="lg" className="rounded-full bg-white text-orange-600 hover:bg-orange-50">
          Schedule Your Visit
        </Button>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-90">
          <MapPin className="h-4 w-4" /> 42 Sunbeam Lane, Brightwater, WA
        </div>
      </section>

      <footer className="bg-stone-900 py-8 text-center text-sm text-stone-400">
        © 2024 Sunbeam Cottage Adult Family Home · Licensed AFH #112233
      </footer>
    </div>
  );
}
