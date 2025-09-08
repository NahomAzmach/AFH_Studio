import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, MapPin, Shield } from "lucide-react";

export default function Features() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need</h1>
          <p className="text-xl text-muted-foreground">
            Professional features designed specifically for Adult Family Homes
          </p>
        </div>

        {/* Design & Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Design & Content</h2>
            <ul className="space-y-4">
              {[
                "Complete page set: Homepage, Services, Rooms/Amenities, About, Testimonials, Contact",
                "Professional copywriting tailored to AFH industry",
                "Mobile-responsive design that works on all devices",
                "Custom color scheme and branding integration"
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Caring staff with seniors"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Lead Generation & SEO */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src="https://pixabay.com/get/gccf4bdc2d341edde7c624de90f829f8552b714e613ef5014765f7b650253747fe881459bed1aa78e81b3f41f4947c77c8698a37ca9fcb171030284d4768d2d95_1280.jpg"
              alt="Professional caregiving assistance"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Lead Generation & SEO</h2>
            <ul className="space-y-4">
              {[
                "Click-to-call buttons and contact forms",
                "Tour booking integration",
                "SEO optimization with proper titles and meta tags",
                "Google Analytics and tracking setup"
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why AFH-Specific */}
        <div className="bg-muted rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why AFH-Specific Matters</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-3">Family-Focused Content</h3>
                <p className="text-sm text-muted-foreground">
                  Content tuned for families choosing care with clear services, staffing, meals, and activities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-3">Easy Navigation</h3>
                <p className="text-sm text-muted-foreground">
                  Simple map/directions and repeated tour prompts to make booking effortless.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-3">Privacy Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  We don't collect PHI. Inquiry forms are limited to contact details and questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Updates & Support */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Updates & Support</h3>
              <ul className="space-y-3">
                {[
                  "Monthly content updates included",
                  "Security monitoring and backups",
                  "Performance optimization",
                  "24/7 uptime monitoring",
                  "Email support with quick response"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Accessibility Features</h3>
              <ul className="space-y-3">
                {[
                  "High contrast color schemes",
                  "Keyboard navigation support",
                  "Screen reader compatibility",
                  "Large, readable fonts",
                  "Alt text for all images"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
