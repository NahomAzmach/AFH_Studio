export const TEMPLATES = [
  {
    id: "everbloom",
    name: "Everbloom Care",
    description: "Warm, welcoming design with clear services and tour prompts.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    previewUrl: "https://everbloomcare.replit.app",
    featured: true
  },
  {
    id: "cedar-grove",
    name: "Cedar Grove Living",
    description: "Immersive storytelling design with parallax scrolling and nature themes.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    previewUrl: "/templates/cedar-grove"
  },
  {
    id: "maple-stone",
    name: "Maple & Stone",
    description: "Classic newspaper-style layout with professional credibility and trust.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    previewUrl: "/templates/maple-stone"
  },
  {
    id: "sunrise-orchard",
    name: "Sunrise Orchard",
    description: "Instagram-style social layout showcasing community life and activities.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    previewUrl: "/templates/sunrise-orchard"
  },
  {
    id: "bluebird-haven",
    name: "Bluebird Haven",
    description: "Elegant, sophisticated design with emphasis on luxury care.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    previewUrl: "/templates/bluebird-haven",
    featured: true
  }
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$597",
    period: "One-time launch + 1 month support",
    features: [
      "Complete 5-page website",
      "Template customization",
      "Contact forms & click-to-call",
      "SEO basics setup",
      "1 month of updates"
    ],
    popular: false,
    ctaText: "Get Started"
  },
  {
    name: "Standard",
    price: "$197",
    period: "/month",
    description: "Everything you need for ongoing success",
    features: [
      "Everything in Starter",
      "Monthly content updates (2 hours)",
      "Hosting & security monitoring",
      "Analytics & reporting",
      "Email support"
    ],
    popular: true,
    ctaText: "Start Standard Plan"
  },
  {
    name: "Plus",
    price: "$347",
    period: "/month",
    description: "Premium service with priority support",
    features: [
      "Everything in Standard",
      "Extended updates (4 hours/month)",
      "Quarterly photo refresh",
      "Copy tune-ups & optimization",
      "Priority support (24hr response)"
    ],
    popular: false,
    ctaText: "Get Plus Plan"
  }
];
