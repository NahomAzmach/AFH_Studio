import { Button } from "@/components/ui/button";
import { Phone, MapPin, Leaf, Wind, Sprout } from "lucide-react";
import afh5Image from "@assets/AFH5_1757374349761.jpg";
import afh7Image from "@assets/AFH7_1757374349769.avif";

export default function NatureCalmTemplate() {
  return (
    <div className="min-h-screen bg-[#f4f6ee] text-[#2f3b2e]">
      <header className="border-b border-[#dde4cf] bg-[#f4f6ee]/90 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5c7a52]">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-[#3f4f3a]">Sage Meadow</span>
          </div>
          <Button className="rounded-full bg-[#5c7a52] hover:bg-[#4d6845]">
            <Phone className="h-4 w-4" /> (555) 345-9080
          </Button>
        </div>
      </header>

      <section className="container mx-auto grid items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e3ead6] px-4 py-1.5 text-sm font-medium text-[#4d6845]">
            <Sprout className="h-4 w-4" /> Rooted in calm, grounded care
          </span>
          <h1 className="mb-6 text-5xl font-semibold leading-tight text-[#3f4f3a]">
            Care that grows from the ground up.
          </h1>
          <p className="mb-8 text-lg text-[#5a6655]">
            Sage Meadow blends gentle daily routines with time outdoors — a peaceful place where residents feel
            grounded, not rushed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full bg-[#5c7a52] hover:bg-[#4d6845]">Plan a Visit</Button>
            <Button size="lg" variant="outline" className="rounded-full border-2 border-[#5c7a52] text-[#4d6845]">
              Our Gardens
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[55%_45%_60%_40%/50%_60%_40%_50%] bg-[#dde4cf]" />
          <img
            src={afh5Image}
            alt="Residents enjoying a peaceful afternoon together"
            className="relative h-96 w-full rounded-[55%_45%_60%_40%/50%_60%_40%_50%] object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="bg-[#eaf0de] py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-[#3f4f3a]">A gentler rhythm to each day</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { icon: Leaf, title: "Garden Walks", body: "Shaded paths and raised garden beds for fresh air every day." },
              { icon: Wind, title: "Quiet Spaces", body: "Sunlit common rooms designed for rest as much as company." },
              { icon: Sprout, title: "Grounded Routines", body: "Predictable days that bring comfort, not stress." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#5c7a52]/10">
                  <item.icon className="h-7 w-7 text-[#5c7a52]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#3f4f3a]">{item.title}</h3>
                <p className="text-[#5a6655]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto grid items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 rounded-[40%_60%_45%_55%/55%_45%_60%_40%] bg-[#e3ead6]" />
          <img
            src={afh7Image}
            alt="A calming moment in the garden"
            className="relative h-80 w-full rounded-[40%_60%_45%_55%/55%_45%_60%_40%] object-cover shadow-lg"
          />
        </div>
        <blockquote className="order-1 text-2xl font-medium leading-relaxed text-[#3f4f3a] md:order-2">
          “Dad spends every morning in the garden now. He's calmer than he's been in years.”
          <footer className="mt-4 text-sm font-normal text-[#7c8a76]">— A Sage Meadow family member</footer>
        </blockquote>
      </section>

      <section className="bg-[#3f4f3a] py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-semibold">Come breathe a little easier.</h2>
        <p className="mb-8 text-[#cdd9c4]">Tours are relaxed, unhurried, and always welcome.</p>
        <Button size="lg" className="rounded-full bg-[#dde4cf] text-[#3f4f3a] hover:bg-[#cdd9c4]">
          Schedule a Tour
        </Button>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#cdd9c4]">
          <MapPin className="h-4 w-4" /> 17 Sage Meadow Road, Riverbend, WA
        </div>
      </section>

      <footer className="bg-[#2f3b2e] py-8 text-center text-xs uppercase tracking-[0.15em] text-[#9caa93]">
        © 2024 Sage Meadow Adult Family Home · Licensed AFH #778899
      </footer>
    </div>
  );
}
