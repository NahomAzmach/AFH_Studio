import everbloomThumb from "@assets/everbloom_live.jpg";
import cedarGroveThumb from "@assets/afh_cedarGrove_1757375636778.jpg";
import mapleStoneThumb from "@assets/afh_maple_stone_1757375636781.jpg";
import sunriseOrchardThumb from "@assets/afh_SunriseOrchard_1757375636782.jpg";
import bluebirdHavenThumb from "@assets/afh_bluebird_1757375636774.jpg";
import willowCourtThumb from "@assets/mood-minimalist-airy.svg";
import sunbeamCottageThumb from "@assets/mood-vibrant-playful.svg";
import heritageManorThumb from "@assets/mood-traditional-trustworthy.svg";
import sageMeadowThumb from "@assets/mood-nature-calm.svg";

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
  {
    id: "willow-court",
    name: "Willow Court",
    description: "Minimalist & airy — clean layouts, lots of breathing room, soft neutral tones.",
    image: willowCourtThumb,
    previewUrl: "/templates/minimalist-airy",
  },
  {
    id: "sunbeam-cottage",
    name: "Sunbeam Cottage",
    description: "Vibrant & playful — bright colors and energetic photography that feel lively.",
    image: sunbeamCottageThumb,
    previewUrl: "/templates/vibrant-playful",
  },
  {
    id: "heritage-manor",
    name: "Heritage Manor",
    description: "Traditional & trustworthy — classic, professional, and reassuring for families.",
    image: heritageManorThumb,
    previewUrl: "/templates/traditional-trustworthy",
  },
  {
    id: "sage-meadow",
    name: "Sage Meadow",
    description: "Nature & calm — organic shapes, greens, and a peaceful, grounded feel.",
    image: sageMeadowThumb,
    previewUrl: "/templates/nature-calm",
  },
];
export const HOURLY_RATE = 95; 

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$600",
    period: "One-time build",
    setupFee: null,
    description: "Best for DIYers who just need the initial build.",
    features: [
      "Complete 5-page website",
      "Template customization",
      "Contact forms & click-to-call",
      "SEO basics setup",
      "30 days of post-launch bug fixes", 
    ],
    // Explicitly call out the cost of changes after the initial launch
    updatePolicy: `Future content updates billed at $${HOURLY_RATE}/hr (1-hr minimum).`, 
    popular: false,
    ctaText: "Get Started",
  },
  {
    name: "Standard",
    price: "$197",
    period: "/month",
    setupFee: "$550 one-time setup fee",
    description: "Everything you need for ongoing success & hands-off maintenance.",
    features: [
      "Everything in Starter",
      "Monthly content updates (Up to 2 hours)",
      "Hosting & security monitoring",
      "Analytics & reporting",
      "Email support",
    ],
    // Protect yourself from scope creep on the monthly plan
    updatePolicy: `Additional updates beyond 2 hours billed at a discounted $${HOURLY_RATE - 20}/hr.`,
    popular: true,
    ctaText: "Start Standard Plan",
  },
  {
    name: "Plus",
    price: "$347",
    period: "/month",
    setupFee: "$550 one-time setup fee",
    description: "Premium service with priority support and proactive improvements.",
    features: [
      "Everything in Standard",
      "Extended updates (Up to 4 hours/month)",
      "Quarterly photo refresh",
      "Copy tune-ups & optimization",
      "Priority support (24hr response)",
    ],
    updatePolicy: `Additional updates beyond 4 hours billed at a discounted $${HOURLY_RATE - 20}/hr.`,
    popular: false,
    ctaText: "Get Plus Plan",
  },
];
