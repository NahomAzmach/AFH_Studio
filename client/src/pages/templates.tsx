import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TEMPLATES } from "@/lib/constants";

export default function Templates() {
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
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Starting Point</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'll tailor the colors, photos, and copy to your Adult Family Home. Each template is designed 
            specifically for AFH needs with clear services, tour booking, and family-friendly messaging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEMPLATES.map((template) => (
            <Card key={template.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <img 
                src={template.image}
                alt={`${template.name} template preview`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{template.name}</h3>
                  {template.featured && (
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      Live Demo
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{template.description}</p>
                <div className="flex flex-col space-y-2">
                  <Button 
                    onClick={() => openPreview(template.previewUrl, template.name)}
                    className="bg-primary text-primary-foreground hover:opacity-90"
                    data-testid={`template-preview-${template.id}`}
                  >
                    Live Preview
                  </Button>
                  <Link href={`/contact?template=${template.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full border-border hover:bg-muted"
                      data-testid={`template-select-${template.id}`}
                    >
                      Use This Template
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See What You're Looking For?</h2>
          <p className="text-muted-foreground mb-6">
            We can customize any template or create something completely unique for your Adult Family Home.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="custom-template-cta">
              Request Custom Design
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
