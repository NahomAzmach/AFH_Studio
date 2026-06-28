import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, ShieldCheck, Award, BookOpen, Users } from "lucide-react";
import afh1Image from "@assets/AFH1_1757374349744.jpg";
import afh3Image from "@assets/AFH3_1757374349753.jpg";

export default function TraditionalTrustworthyTemplate() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#1f2733] dark:bg-slate-950 dark:text-slate-100">
      <div className="bg-[#13233f] py-2 text-center text-xs uppercase tracking-[0.2em] text-[#cdd6e3]">
        Licensed &amp; Accredited Adult Family Home · Est. 1998
      </div>
      <header className="border-b border-[#d8d2c2] bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#13233f]">
              <ShieldCheck className="h-6 w-6 text-[#d4af6a]" />
            </div>
            <div>
              <h1 className="font-display text-2xl text-[#13233f] dark:text-slate-100">Heritage Manor</h1>
              <p className="text-xs uppercase tracking-[0.15em] text-[#8a8367] dark:text-slate-400">Adult Family Home</p>
            </div>
          </div>
          <Button className="bg-[#13233f] hover:bg-[#1c3258]">
            <Phone className="h-4 w-4" /> (555) 678-1200
          </Button>
        </div>
      </header>

      <section className="container mx-auto grid items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display mb-6 text-4xl leading-tight text-[#13233f] md:text-5xl dark:text-slate-100">
            Trusted, dignified care for over 25 years.
          </h2>
          <p className="mb-8 text-lg text-[#48505c] dark:text-slate-300">
            Heritage Manor has served Riverbend families since 1998 with consistent staffing, careful oversight,
            and a standard of care families can rely on.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#13233f] hover:bg-[#1c3258]">Schedule a Visit</Button>
            <Button size="lg" variant="outline" className="border-2 border-[#13233f] text-[#13233f] dark:border-slate-500 dark:text-slate-100">Our Credentials</Button>
          </div>
        </div>
        <img src={afh3Image} alt="Attentive personal care at Heritage Manor" className="h-96 w-full rounded-md object-cover shadow-xl" />
      </section>

      <section className="border-y border-[#d8d2c2] bg-white py-10 dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-6 text-center md:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "Licensed AFH #445566" },
            { icon: Award, label: "State Accredited" },
            { icon: Users, label: "25+ Years Serving Families" },
            { icon: BookOpen, label: "Certified Care Staff" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <item.icon className="h-7 w-7 text-[#d4af6a]" />
              <p className="text-sm font-medium text-[#48505c] dark:text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <h3 className="font-display mb-10 text-center text-3xl text-[#13233f] dark:text-slate-100">Our Commitment to Families</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Consistent Staffing", body: "The same care team, day after day — no surprises, no strangers." },
            { title: "Clear Communication", body: "Families receive regular updates and have direct access to our administrator." },
            { title: "Careful Oversight", body: "Routine state inspections and an open-door policy for every family." },
          ].map((item) => (
            <Card key={item.title} className="border border-[#d8d2c2] bg-white shadow-none dark:border-slate-800 dark:bg-slate-900">
              <CardContent className="p-8">
                <h4 className="font-display mb-3 text-xl text-[#13233f] dark:text-slate-100">{item.title}</h4>
                <p className="text-[#48505c] dark:text-slate-300">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
          <img src={afh1Image} alt="A caring moment at Heritage Manor" className="h-80 w-full rounded-md object-cover shadow-lg" />
          <blockquote className="border-l-4 border-[#d4af6a] pl-6 text-xl italic text-[#1f2733] dark:text-slate-100">
            “We looked at four homes before choosing Heritage Manor. Their staff has been with them for years —
            that consistency made the decision easy.”
            <footer className="mt-4 text-sm font-medium text-[#8a8367] dark:text-slate-400">— The Coleman Family</footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-[#13233f] py-16 text-center text-white">
        <h3 className="font-display mb-4 text-3xl">Arrange a Private Tour</h3>
        <p className="mb-8 text-[#cdd6e3]">Visits are available Monday through Saturday, by appointment.</p>
        <Button size="lg" className="bg-[#d4af6a] text-[#13233f] hover:bg-[#c49d57]">
          Request a Tour
        </Button>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#cdd6e3]">
          <MapPin className="h-4 w-4" /> 210 Heritage Way, Riverbend, WA
        </div>
      </section>

      <footer className="bg-[#0d182b] py-8 text-center text-xs uppercase tracking-[0.15em] text-[#8492a8]">
        © 2024 Heritage Manor Adult Family Home · Licensed AFH #445566
      </footer>
    </div>
  );
}
