import everbloomThumb from "@assets/everbloom_live.jpg";
import cedarGroveThumb from "@assets/afh_cedarGrove_1757375636778.jpg";
import mapleStoneThumb from "@assets/afh_maple_stone_1757375636781.jpg";
import sunriseOrchardThumb from "@assets/afh_SunriseOrchard_1757375636782.jpg";
import bluebirdHavenThumb from "@assets/afh_bluebird_1757375636774.jpg";

export const TEMPLATES = [
  {
    id: "everbloom",
    name: "Everbloom Care",
    description: "Warm, welcoming design with clear services and tour prompts.",
    image: everbloomThumb,
    previewUrl: "https://everbloomafh.com",
    featured: true,
  },
  {
    id: "cedar-grove",
    name: "Cedar Grove Living",
    description: "Immersive storytelling design with parallax scrolling and nature themes.",
    image: cedarGroveThumb,
    previewUrl: "/templates/cedar-grove",
  },
  {
    id: "maple-stone",
    name: "Maple & Stone",
    description: "Classic newspaper-style layout with professional credibility and trust.",
    image: mapleStoneThumb,
    previewUrl: "/templates/maple-stone",
  },
  {
    id: "sunrise-orchard",
    name: "Sunrise Orchard",
    description: "Instagram-style social layout showcasing community life and activities.",
    image: sunriseOrchardThumb,
    previewUrl: "/templates/sunrise-orchard",
  },
  {
    id: "bluebird-haven",
    name: "Bluebird Haven",
    description: "Elegant, sophisticated design with emphasis on luxury care.",
    image: bluebirdHavenThumb,
    previewUrl: "/templates/bluebird-haven",
    featured: true,
  },
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
      "1 month of updates",
    ],
    popular: false,
    ctaText: "Get Started",
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
      "Email support",
    ],
    popular: true,
    ctaText: "Start Standard Plan",
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
      "Priority support (24hr response)",
    ],
    popular: false,
    ctaText: "Get Plus Plan",
  },
];
