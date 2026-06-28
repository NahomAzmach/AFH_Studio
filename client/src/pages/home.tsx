import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, AlertCircle, Clock, Phone, Sparkles } from "lucide-react";
import { TEMPLATES } from "@/lib/constants";
import teamImage from "@assets/Team_1757374829738.jpeg";
import everbloomImage from "@assets/afh_everbloom_1757375636779.jpg";

export default function Home() {
  const openPreview = (url: string, templateName: string) => {
    if (url.startsWith("/templates/")) {
      const fullUrl = window.location.origin + url;
      const event = new CustomEvent("openPreview", {
        detail: { url: fullUrl, templateName },
      });
      document.dispatchEvent(event);
    } else if (url === "https://everbloomcare.replit.app") {
      const event = new CustomEvent("openPreview", {
        detail: { url, templateName },
      });
      document.dispatchEvent(event);
    } else {
      alert("This demo will be available soon! Please contact us to see more examples.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-36 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <span className="section-eyebrow mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Built exclusively for Adult Family Homes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block overflow-hidden">
                <span className="inline-block animate-slide-up bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Launch an Adult Family Home website
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block animate-slide-up-delay bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  you're proud of—this week
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up">
              <span className="inline-block animate-bounce-subtle">Done‑for‑you</span> design, content, and updates so you can <span className="text-primary font-semibold animate-pulse-slow">focus on care</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-buttons">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 animate-glow"
                  data-testid="hero-cta-primary"
                >
                  <span className="relative z-10">Start My Site</span>
                </Button>
              </Link>
              <Link href="/plan-my-site">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 py-4 text-lg shadow-lg transform hover:-translate-y-1"
                  data-testid="hero-cta-plan"
                >
                  <Sparkles className="w-4 h-4" /> Plan My Site
                </Button>
              </Link>
              <Link href="/templates">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg hover:bg-muted transition-all duration-300 transform hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-lg"
                  data-testid="hero-cta-secondary"
                >
                  See Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative overflow-hidden py-20 bg-background">
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground">Many AFH websites fail to convert visitors into tour bookings</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-xl flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Outdated or unclear</h3>
                <p className="text-muted-foreground">Families can't quickly tell what you offer, your rooms, or how to book a tour.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hard to keep updated</h3>
                <p className="text-muted-foreground">Menu changes, new activities, or staffing updates shouldn't take weeks.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Low calls or tour requests</h3>
                <p className="text-muted-foreground">Your site should encourage action with clear buttons and friendly copy.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 bg-muted">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Effective AFH Websites</h2>
              <ul className="space-y-4">
                {[
                  "Modern design with clear services & amenities",
                  "Click‑to‑call and tour request options",
                  "SEO basics and fast loading",
                  "Accessibility‑minded (contrast, keyboard nav, alt text)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="AFH Web Studio team - experts in adult family home websites"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="relative overflow-hidden py-20 bg-background">
        <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Built for AFHs</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: "📱", title: "Mobile‑ready" },
                { icon: "⚡", title: "Fast & lightweight" },
                { icon: "🎯", title: "Friendly support" },
                { icon: "🛡️", title: "No PHI collection" },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <p className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Demos */}
      <section className="relative overflow-hidden py-20 bg-muted">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Template Demos</h2>
            <p className="text-xl text-muted-foreground">Choose a starting point. We'll tailor the colors, photos, and copy to your home.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {TEMPLATES.map((template) => (
              <Card key={template.id} className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img src={template.image} alt={`${template.name} template preview`} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  <div className="flex flex-col space-y-2">
                    <Button onClick={() => openPreview(template.previewUrl, template.name)} data-testid={`template-preview-${template.id}`}>
                      Live Preview
                    </Button>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full" data-testid={`template-use-${template.id}`}>
                        Use This Template
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/templates">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg shadow-lg" data-testid="browse-all-templates">
                Browse All Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="relative overflow-hidden py-20 bg-muted">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Success Story</h2>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Everbloom Care</h3>
                <p className="text-lg mb-6 text-muted-foreground">
                  After launching their new website with our warm, garden-themed design, Everbloom Care saw immediate results in family engagement.
                </p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">+40%</div>
                    <p className="text-sm text-muted-foreground">Tour Inquiries</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">85%</div>
                    <p className="text-sm text-muted-foreground">Mobile Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={everbloomImage} alt="Everbloom Care website success story" className="rounded-2xl shadow-xl w-full border border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Plan My Site teaser */}
      <section className="relative overflow-hidden py-20 bg-background">
        <div className="pointer-events-none absolute -top-10 right-1/3 h-56 w-56 rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div className="container relative mx-auto px-4 max-w-4xl text-center">
          <span className="section-eyebrow mb-6">
            <Sparkles className="w-3.5 h-3.5" /> New
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Answer a few visual questions about your home and we'll turn your answers into a clear brief for your new website.
          </p>
          <Link href="/plan-my-site">
            <Button size="lg" className="px-8 py-4 text-lg shadow-lg" data-testid="home-plan-my-site-cta">
              <Sparkles className="w-4 h-4" /> Plan My Site
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16 bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-pulse-slow" />
        <div className="container relative mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8">Pick a template and we'll tailor it to your home—copy, photos, and colors.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg shadow-lg" data-testid="final-cta">
              Start My Site
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
