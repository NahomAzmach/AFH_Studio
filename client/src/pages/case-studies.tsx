import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, TrendingUp } from "lucide-react";
import everbloomImage from "@assets/everbloom_live.jpg";

export default function CaseStudies() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Results</h1>
          <p className="text-xl text-muted-foreground">See how our websites help AFHs attract more families</p>
        </div>

        <Card className="p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Everbloom Care Success Story</h2>
              <p className="text-muted-foreground mb-6">
                A complete website transformation that focuses on clear messaging and easy tour booking.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  "Clear services section with detailed amenities",
                  "Tour booking button visible on every page",
                  "Welcoming visuals that build trust",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">Result: +40% increase in tour inquiries</span>
                </div>
              </div>

              <a href="https://everbloomafh.com" target="_blank" rel="noopener noreferrer">
                <Button data-testid="everbloom-preview">View Live Site</Button>
              </a>
            </div>
            <div>
              <a href="https://everbloomafh.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={everbloomImage}
                  alt="Everbloom Adult Family Home — live website"
                  className="rounded-xl shadow-lg w-full transition-transform duration-300 hover:scale-[1.02]"
                />
              </a>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-destructive/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-destructive flex items-center gap-2">
                <X className="w-5 h-5" />
                Before: Common Issues
              </h3>
              <ul className="space-y-3">
                {[
                  "Unclear service offerings",
                  "Hidden contact information",
                  "Outdated design and slow loading",
                  "No clear call-to-action",
                  "Poor mobile experience",
                ].map((issue, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{issue}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                <Check className="w-5 h-5" />
                After: Our Solutions
              </h3>
              <ul className="space-y-3">
                {[
                  "Crystal clear services section",
                  "Above-the-fold phone number",
                  "Modern, mobile-friendly design",
                  "Prominent tour booking buttons",
                  "Fast loading and optimized",
                ].map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Key Website Improvements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">40%</span>
              </div>
              <h3 className="font-semibold mb-2">More Tour Inquiries</h3>
              <p className="text-sm text-muted-foreground">Clear call-to-action buttons and simplified contact forms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3x</span>
              </div>
              <h3 className="font-semibold mb-2">Faster Loading</h3>
              <p className="text-sm text-muted-foreground">Optimized images and modern code for better performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">95%</span>
              </div>
              <h3 className="font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-sm text-muted-foreground">Responsive design that works perfectly on all devices</p>
            </div>
          </div>
        </div>

        <Card className="p-8 text-center bg-primary/5">
          <blockquote className="text-lg italic mb-4">
            "Our new website has transformed how families find and contact us. The tour booking feature
            alone has increased our inquiries by 40%, and families consistently comment on how
            professional and welcoming our site feels."
          </blockquote>
          <footer className="text-muted-foreground">— Sarah Johnson, Owner, Everbloom Care</footer>
        </Card>
      </div>
    </div>
  );
}
