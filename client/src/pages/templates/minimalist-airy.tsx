import { Phone, MapPin, ArrowRight } from "lucide-react";
import afh2Image from "@assets/AFH2_1757374349746.jpg";
import afh5Image from "@assets/AFH5_1757374349761.jpg";

export default function MinimalistAiryTemplate() {
  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[#2a2a28]">
      <header className="border-b border-[#e7e3dc]">
        <div className="container mx-auto flex items-center justify-between px-6 py-6">
          <span className="text-lg font-light tracking-[0.2em]">WILLOW COURT</span>
          <a href="#" className="flex items-center gap-2 text-sm text-[#6b6a64] hover:text-[#2a2a28]">
            <Phone className="h-4 w-4" /> (555) 234-5678
          </a>
        </div>
      </header>

      <section className="container mx-auto px-6 py-28 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9b9890]">Adult Family Home</p>
        <h1 className="mx-auto max-w-3xl text-5xl font-light leading-[1.15] md:text-7xl">
          A quieter way <span className="block">to be cared for.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-[#6b6a64]">
          Willow Court offers calm, uncluttered living for a small number of residents — space to breathe, and people who notice.
        </p>
        <a href="#tour" className="mt-10 inline-flex items-center gap-2 border-b border-[#2a2a28] pb-1 text-sm tracking-wide">
          Schedule a visit <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <img src={afh2Image} alt="Calm, attentive personal care at Willow Court" className="mx-auto h-[420px] w-full max-w-4xl rounded-sm object-cover" />
      </section>

      <section className="border-t border-[#e7e3dc]">
        <div className="container mx-auto grid gap-16 px-6 py-24 md:grid-cols-3">
          {[
            { title: "Space", body: "Four private rooms, never more. Wide hallways, soft light, nothing crowded." },
            { title: "Attention", body: "A consistent, familiar care team — not a rotating cast of strangers." },
            { title: "Quiet", body: "Days shaped around rest, simple routines, and small moments of joy." },
          ].map((item) => (
            <div key={item.title} className="text-center md:text-left">
              <h3 className="mb-3 text-sm uppercase tracking-[0.25em] text-[#9b9890]">{item.title}</h3>
              <p className="text-lg leading-relaxed text-[#3f3e3a]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e7e3dc] bg-white">
        <div className="container mx-auto grid items-center gap-12 px-6 py-24 md:grid-cols-2">
          <img src={afh5Image} alt="Residents enjoying a calm shared afternoon" className="h-80 w-full rounded-sm object-cover" />
          <blockquote className="text-2xl font-light leading-relaxed text-[#2a2a28]">
            “It doesn't feel like a facility. It feels like somewhere my mother actually lives.”
            <footer className="mt-4 text-sm text-[#9b9890]">— A Willow Court family member</footer>
          </blockquote>
        </div>
      </section>

      <section id="tour" className="container mx-auto px-6 py-24 text-center">
        <h2 className="mb-6 text-3xl font-light">Come see it for yourself.</h2>
        <p className="mx-auto mb-8 max-w-md text-[#6b6a64]">Tours are unhurried, by appointment, with no obligation.</p>
        <div className="flex flex-col items-center justify-center gap-2 text-sm text-[#6b6a64]">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> 88 Willow Court Lane, Riverbend, WA
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> (555) 234-5678
          </span>
        </div>
      </section>

      <footer className="border-t border-[#e7e3dc] py-10 text-center text-xs uppercase tracking-[0.25em] text-[#9b9890]">
        Willow Court Adult Family Home
      </footer>
    </div>
  );
}
