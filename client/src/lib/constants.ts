import afhImage1 from "@assets/AFH1_1757372940863.jpg";
import afhImage2 from "@assets/AFH2_1757372940873.jpg";
import afhImage3 from "@assets/AFH3_1757372940875.jpg";
import afhImage4 from "@assets/AFH4_1757372940877.jpg";
import afhImage5 from "@assets/AFH5_1757372940879.jpg";
import afhImage6 from "@assets/AFH6_1757372940884.jpg";

export const TEMPLATES = [
  {
    id: "everbloom",
    name: "Everbloom Care",
    description: "Warm, welcoming design with clear services and tour prompts.",
    image: afhImage3,
    previewUrl: "https://everbloomcare.replit.app",
    featured: true
  },
  {
    id: "cedar-grove",
    name: "Cedar Grove Living",
    description: "Nature‑forward layout with large hero and services icons.",
    image: afhImage2,
    previewUrl: "/templates/cedar-grove"
  },
  {
    id: "maple-stone",
    name: "Maple & Stone",
    description: "Classic, trustworthy design with detailed amenities section.",
    image: afhImage6,
    previewUrl: "/templates/maple-stone"
  },
  {
    id: "sunrise-orchard",
    name: "Sunrise Orchard",
    description: "Bright, cheerful theme focusing on activities and community.",
    image: afhImage4,
    previewUrl: "/templates/sunrise-orchard"
  },
  {
    id: "bluebird-haven",
    name: "Bluebird Haven",
    description: "Elegant, sophisticated design with emphasis on luxury care.",
    image: afhImage1,
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
