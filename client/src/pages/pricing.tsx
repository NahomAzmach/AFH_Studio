import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">Choose the plan that fits your needs. Cancel anytime.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={`${plan.popular ? "border-2 border-primary shadow-lg relative" : "shadow-sm hover:shadow-lg"} transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    {plan.period && <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground">{plan.description || plan.period}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                    data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How fast can we launch my website?",
                answer:
                  "Most websites launch within 5-7 business days after receiving your content and photos. The Starter plan includes everything needed for a professional launch.",
              },
              {
                question: "Can you use my existing logo and photos?",
                answer:
                  "Absolutely! We'll integrate your existing branding and photos. If you need new photos, we can recommend affordable local photographers or help you take better photos with your phone.",
              },
              {
                question: "Do you help with domain setup?",
                answer:
                  "Yes, we'll help you register a domain name or connect your existing one. This includes setting up professional email addresses that match your domain.",
              },
              {
                question: "Do you write the content for my site?",
                answer:
                  "Yes! We write all the content based on information you provide about your home, services, and staff. We know what families are looking for when choosing care.",
              },
              {
                question: "Can I cancel my monthly plan anytime?",
                answer:
                  "Yes, you can cancel anytime with 30 days notice. Your website will remain live for 30 days after cancellation, giving you time to transition if needed.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <details className="group">
                  <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">Choose your plan and launch your professional AFH website this week.</p>
          <Link href="/contact">
            <Button size="lg" data-testid="pricing-bottom-cta">
              Start My Website Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
