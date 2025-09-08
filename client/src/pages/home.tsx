import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, AlertCircle, Clock, Phone } from "lucide-react";
import { TEMPLATES } from "@/lib/constants";
import teamImage from "@assets/Team_1757374829738.jpeg";

export default function Home() {
  const openPreview = (url: string, templateName: string) => {
    // Handle internal template routes
    if (url.startsWith("/templates/")) {
      const fullUrl = window.location.origin + url;
      const event = new CustomEvent("openPreview", {
        detail: { url: fullUrl, templateName }
      });
      document.dispatchEvent(event);
    } else if (url === "https://everbloomcare.replit.app") {
      const event = new CustomEvent("openPreview", {
        detail: { url, templateName }
      });
      document.dispatchEvent(event);
    } else {
      alert("This demo will be available soon! Please contact us to see more examples.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Launch an Adult Family Home website you're proud of—this week
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Done‑for‑you design, content, and updates so you can focus on care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground px-8 py-4 text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  data-testid="hero-cta-primary"
                >
                  Start My Site
                </Button>
              </Link>
              <Link href="/templates">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-border px-8 py-4 text-lg hover:bg-muted transition-colors"
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground">Many AFH websites fail to convert visitors into tour bookings</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Outdated or unclear</h3>
                <p className="text-muted-foreground">Families can't quickly tell what you offer, your rooms, or how to book a tour.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hard to keep updated</h3>
                <p className="text-muted-foreground">Menu changes, new activities, or staffing updates shouldn't take weeks.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Effective AFH Websites</h2>
              <ul className="space-y-4">
                {[
                  "Modern design with clear services & amenities",
                  "Click‑to‑call and tour request options", 
                  "SEO basics and fast loading",
                  "Accessibility‑minded (contrast, keyboard nav, alt text)"
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
                className="rounded-xl shadow-xl w-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Built for AFHs</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "📱", title: "Mobile‑ready" },
                  { icon: "⚡", title: "Fast & lightweight" },
                  { icon: "🎯", title: "Friendly support" },
                  { icon: "🛡️", title: "No PHI collection" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2 text-center">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <p className="font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional adult family home environment" 
                className="rounded-xl shadow-xl w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Demos */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Template Demos</h2>
            <p className="text-xl text-muted-foreground">Choose a starting point. We'll tailor the colors, photos, and copy to your home.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {TEMPLATES.map((template) => (
              <Card key={template.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <img 
                  src={template.image}
                  alt={`${template.name} template preview`}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  <div className="flex flex-col space-y-2">
                    <Button 
                      onClick={() => openPreview(template.previewUrl, template.name)}
                      className="bg-primary text-primary-foreground hover:opacity-90"
                      data-testid={`template-preview-${template.id}`}
                    >
                      Live Preview
                    </Button>
                    <Link href="/contact">
                      <Button 
                        variant="outline" 
                        className="w-full border-border hover:bg-muted"
                        data-testid={`template-use-${template.id}`}
                      >
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
              <Button 
                size="lg"
                className="bg-secondary text-secondary-foreground px-8 py-4 text-lg hover:opacity-90 shadow-lg"
                data-testid="browse-all-templates"
              >
                Browse All Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mini Case Study */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Recent Outcome</h2>
            <p className="text-xl">
              <strong className="text-secondary">+40% tour inquiries</strong> after a simple redesign with clearer buttons and services highlights.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8">Pick a template and we'll tailor it to your home—copy, photos, and colors.</p>
          <Link href="/contact">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary px-8 py-4 text-lg hover:opacity-90 shadow-lg"
              data-testid="final-cta"
            >
              Start My Site
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
