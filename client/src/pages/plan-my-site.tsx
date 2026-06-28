import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { TEMPLATES } from "@/lib/constants";
import {
  Sparkles,
  Check,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  PartyPopper,
  Home,
  Stethoscope,
  BedDouble,
  Users,
  Phone,
  MessageSquareHeart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import moodMinimal from "@assets/AFH5_1757374349761.jpg";
import moodVibrant from "@assets/AFH6_1757374349764.jpg";
import moodTraditional from "@assets/AFH3_1757374349753.jpg";
import moodNature from "@assets/AFH4_1757374349759.jpg";

const PALETTES = [
  { id: "warm", label: "Warm & Earthy", colors: ["#7c4a2d", "#c98a4b", "#e8c8a0"] },
  { id: "cool", label: "Cool & Calming", colors: ["#2c4a52", "#5b8a91", "#bfe0e0"] },
  { id: "pastel", label: "Soft Pastel", colors: ["#e8b4bc", "#f3d9c4", "#cdeac0"] },
  { id: "bold", label: "Bold & Modern", colors: ["#1f2937", "#e0a526", "#f4f4f5"] },
  { id: "forest", label: "Forest & Sage", colors: ["#2f3e2e", "#6b8f71", "#cdd9c4"] },
  { id: "sunset", label: "Sunset & Coral", colors: ["#c1440e", "#f08a4b", "#ffd1a9"] },
  { id: "monochrome", label: "Monochrome & Minimal", colors: ["#111827", "#6b7280", "#f3f4f6"] },
  { id: "ocean", label: "Ocean & Teal", colors: ["#0f4c5c", "#1f9c8a", "#bfece6"] },
];

interface StyleOption {
  id: string;
  label: string;
  description: string;
  image: string;
  previewUrl?: string;
}

const STYLE_OPTIONS: StyleOption[] = [
  ...TEMPLATES.map((t) => ({ id: t.id, label: t.name, description: t.description, image: t.image, previewUrl: t.previewUrl })),
  { id: "minimal", label: "Minimalist & Airy", description: "Clean layouts, lots of breathing room, soft neutral tones.", image: moodMinimal },
  { id: "vibrant", label: "Vibrant & Playful", description: "Bright colors and energetic photography that feel lively.", image: moodVibrant },
  { id: "traditional", label: "Traditional & Trustworthy", description: "Classic, professional, and reassuring for families.", image: moodTraditional },
  { id: "nature", label: "Nature & Calm", description: "Organic shapes, greens, and a peaceful, grounded feel.", image: moodNature },
];

const PAGE_OPTIONS = [
  "Home",
  "Services",
  "Rooms & Amenities",
  "Meals & Activities",
  "Staff & Care Team",
  "Photo Gallery",
  "Testimonials",
  "Tour Booking",
  "Pricing / Admission Info",
  "FAQ",
  "Contact",
];

const SERVICE_OPTIONS = [
  "Memory care",
  "Mobility assistance",
  "Medication management",
  "Hospice coordination",
  "Respite care",
  "Diabetic care",
  "24/7 supervision",
  "Personal hygiene assistance",
];

const AMENITY_OPTIONS = [
  "Private rooms",
  "Shared rooms",
  "Accessible bathrooms",
  "Outdoor garden / patio",
  "Common living areas",
  "Home-cooked meals",
  "Pet-friendly",
  "Transportation services",
];

const TOUR_OPTIONS = ["Click-to-call button", "Online contact form", "Booking calendar embed"];

interface Answers {
  name: string;
  email: string;
  phone: string;
  afhName: string;
  address: string;
  licenseNumber: string;
  numBeds: string;
  yearEstablished: string;
  visualStyle: string;
  colorPalette: string;
  pagesWanted: string[];
  careServices: string[];
  careServicesOther: string;
  amenities: string[];
  staffQualifications: string;
  staffRatio: string;
  licensingBody: string;
  safetyFeatures: string;
  tourPreferences: string[];
  hasTestimonials: string;
  hasPhotos: string;
  goals: string;
  inspirationSites: string;
  additionalNotes: string;
}

const initialAnswers: Answers = {
  name: "",
  email: "",
  phone: "",
  afhName: "",
  address: "",
  licenseNumber: "",
  numBeds: "",
  yearEstablished: "",
  visualStyle: "",
  colorPalette: "",
  pagesWanted: [],
  careServices: [],
  careServicesOther: "",
  amenities: [],
  staffQualifications: "",
  staffRatio: "",
  licensingBody: "",
  safetyFeatures: "",
  tourPreferences: [],
  hasTestimonials: "",
  hasPhotos: "",
  goals: "",
  inspirationSites: "",
  additionalNotes: "",
};

function toggleInArray(arr: string[], value: string) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

function openInNewTab(url: string) {
  const fullUrl = url.startsWith("/") ? window.location.origin + url : url;
  window.open(fullUrl, "_blank", "noopener,noreferrer");
}

function generateAIPrompt(a: Answers) {
  const palette = PALETTES.find((p) => p.id === a.colorPalette)?.label.toLowerCase() || "warm and welcoming";
  const style = STYLE_OPTIONS.find((s) => s.id === a.visualStyle)?.label || "a warm, welcoming design";

  const lines = [
    `Design and build a website for "${a.afhName || "[AFH Name]"}", an Adult Family Home at ${a.address || "[Address]"}${
      a.numBeds ? ` with ${a.numBeds} beds` : ""
    }${a.yearEstablished ? `, established in ${a.yearEstablished}` : ""}.`,
    `Visual direction: aim for a feel similar to "${style}", using a ${palette} color palette.`,
    a.pagesWanted.length
      ? `Include these pages/sections: ${a.pagesWanted.join(", ")}.`
      : "Include the standard pages: Home, Services, Rooms & Amenities, About, Testimonials, Contact.",
    a.careServices.length
      ? `Highlight these care services: ${a.careServices.join(", ")}${a.careServicesOther ? `, ${a.careServicesOther}` : ""}.`
      : "",
    a.amenities.length ? `Showcase these rooms/amenities: ${a.amenities.join(", ")}.` : "",
    a.staffQualifications || a.staffRatio || a.licensingBody
      ? `Communicate trust through staffing details: ${[a.staffQualifications, a.staffRatio, a.licensingBody].filter(Boolean).join("; ")}.`
      : "",
    a.safetyFeatures ? `Mention safety/oversight: ${a.safetyFeatures}.` : "",
    a.tourPreferences.length ? `Make it easy to take action via: ${a.tourPreferences.join(", ")}.` : "",
    a.hasTestimonials === "yes" ? "Include a testimonials section using the family's existing quotes." : "",
    a.hasPhotos === "yes" ? "Use the home's existing photography throughout." : "Source warm, appropriate stock photography until real photos are available.",
    a.goals ? `The site should make visitors feel and do this: ${a.goals}.` : "",
    a.inspirationSites ? `Take inspiration from: ${a.inspirationSites}.` : "",
    a.additionalNotes ? `Additional notes: ${a.additionalNotes}.` : "",
    "Keep the tone warm, trustworthy, and accessible (large readable text, high contrast, mobile-first), and avoid collecting any PHI in forms.",
  ].filter(Boolean);

  return lines.join("\n\n");
}

function OptionCard({
  selected,
  onClick,
  icon,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md",
        selected ? "border-primary bg-primary/5" : "border-border bg-card",
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2",
          selected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/30",
        )}
      >
        {selected && <Check className="h-3.5 w-3.5" />}
      </div>
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}

const STEP_TITLES = [
  "Welcome",
  "The Basics",
  "Visual Style",
  "Color Palette",
  "Pages & Sections",
  "Care Services",
  "Rooms & Amenities",
  "Staff & Safety",
  "Tours & Contact",
  "Goals & Inspiration",
  "Review & Submit",
];

export default function PlanMySite() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const totalSteps = STEP_TITLES.length;
  const progress = Math.round((step / (totalSteps - 1)) * 100);
  const aiPrompt = useMemo(() => generateAIPrompt(answers), [answers]);

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) => setAnswers((prev) => ({ ...prev, [key]: value }));

  const canGoNext = () => {
    if (step === 1) return answers.name && answers.email && answers.phone && answers.afhName && answers.address;
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/plan-requests", {
        name: answers.name,
        email: answers.email,
        phone: answers.phone,
        afhName: answers.afhName,
        address: answers.address,
        answers,
        aiPrompt,
      });
      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "We saved what we could, but please reach out directly if this keeps happening.",
        variant: "destructive",
      });
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-20">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <PartyPopper className="h-8 w-8" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">Thanks, {answers.name.split(" ")[0] || "there"}!</h1>
          <p className="text-xl text-muted-foreground">
            We've got your answers for {answers.afhName || "your home"}. We'll review them and follow up within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <span className="section-eyebrow mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Plan My Site
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">{STEP_TITLES[step]}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Step {step + 1} of {totalSteps}
          </p>
          <Progress value={progress} className="mt-4" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <Card>
              <CardContent className="p-8">
                {step === 0 && (
                  <div className="text-center">
                    <Home className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <p className="mb-2 text-lg">
                      Answer a few visual questions about your Adult Family Home — it takes about 5 minutes.
                    </p>
                    <p className="text-muted-foreground">
                      Your answers become a clear brief we'll use to design your new website.
                    </p>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="pms-name">Your Name *</Label>
                        <Input id="pms-name" value={answers.name} onChange={(e) => update("name", e.target.value)} data-testid="pms-name" />
                      </div>
                      <div>
                        <Label htmlFor="pms-email">Email *</Label>
                        <Input id="pms-email" type="email" value={answers.email} onChange={(e) => update("email", e.target.value)} data-testid="pms-email" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="pms-phone">Phone *</Label>
                        <Input id="pms-phone" type="tel" value={answers.phone} onChange={(e) => update("phone", e.target.value)} data-testid="pms-phone" />
                      </div>
                      <div>
                        <Label htmlFor="pms-afh">AFH Name *</Label>
                        <Input id="pms-afh" value={answers.afhName} onChange={(e) => update("afhName", e.target.value)} data-testid="pms-afh-name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="pms-address">Full Address *</Label>
                      <Input
                        id="pms-address"
                        value={answers.address}
                        onChange={(e) => update("address", e.target.value)}
                        placeholder="Street, City, State, ZIP"
                        data-testid="pms-address"
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <Label htmlFor="pms-license">License # (optional)</Label>
                        <Input id="pms-license" value={answers.licenseNumber} onChange={(e) => update("licenseNumber", e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor="pms-beds">Number of Beds (optional)</Label>
                        <Input id="pms-beds" value={answers.numBeds} onChange={(e) => update("numBeds", e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor="pms-year">Year Established (optional)</Label>
                        <Input id="pms-year" value={answers.yearEstablished} onChange={(e) => update("yearEstablished", e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Pick the style that feels closest to your home, or preview a live example first.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {STYLE_OPTIONS.map((s) => {
                        const selected = answers.visualStyle === s.id;
                        return (
                          <div
                            key={s.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => update("visualStyle", s.id)}
                            onKeyDown={(e) => e.key === "Enter" && update("visualStyle", s.id)}
                            className={cn(
                              "relative cursor-pointer overflow-hidden rounded-xl border-2 text-left transition-all hover:-translate-y-1 hover:shadow-md",
                              selected ? "border-primary ring-2 ring-primary/30" : "border-border",
                            )}
                            data-testid={`pms-style-${s.id}`}
                          >
                            {selected && (
                              <div className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Check className="h-4 w-4" />
                              </div>
                            )}
                            <img src={s.image} alt={s.label} className="h-32 w-full object-cover" />
                            <div className="p-3">
                              <p className="font-semibold">{s.label}</p>
                              <p className="mb-2 text-xs text-muted-foreground">{s.description}</p>
                              {s.previewUrl && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openInNewTab(s.previewUrl!);
                                  }}
                                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                                  data-testid={`pms-style-preview-${s.id}`}
                                >
                                  <ExternalLink className="h-3 w-3" /> View live example
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {PALETTES.map((p) => {
                      const selected = answers.colorPalette === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => update("colorPalette", p.id)}
                          className={cn(
                            "relative rounded-xl border-2 p-5 text-left transition-all hover:-translate-y-1 hover:shadow-md",
                            selected ? "border-primary bg-primary/5 ring-2 ring-primary/30" : "border-border",
                          )}
                          data-testid={`pms-palette-${p.id}`}
                        >
                          {selected && (
                            <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                              <Check className="h-4 w-4" />
                            </div>
                          )}
                          <div className="mb-3 flex gap-2">
                            {p.colors.map((c) => (
                              <span key={c} className="h-8 w-8 rounded-full border border-border" style={{ backgroundColor: c }} />
                            ))}
                          </div>
                          <p className="font-semibold">{p.label}</p>
                        </button>
                      );
                    })}
                  </div>
                )}

                {step === 4 && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {PAGE_OPTIONS.map((page) => (
                      <OptionCard
                        key={page}
                        label={page}
                        selected={answers.pagesWanted.includes(page)}
                        onClick={() => update("pagesWanted", toggleInArray(answers.pagesWanted, page))}
                      />
                    ))}
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {SERVICE_OPTIONS.map((service) => (
                        <OptionCard
                          key={service}
                          icon={<Stethoscope className="h-4 w-4 text-primary flex-shrink-0" />}
                          label={service}
                          selected={answers.careServices.includes(service)}
                          onClick={() => update("careServices", toggleInArray(answers.careServices, service))}
                        />
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="pms-services-other">Other services (optional)</Label>
                      <Input id="pms-services-other" value={answers.careServicesOther} onChange={(e) => update("careServicesOther", e.target.value)} />
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {AMENITY_OPTIONS.map((amenity) => (
                      <OptionCard
                        key={amenity}
                        icon={<BedDouble className="h-4 w-4 text-primary flex-shrink-0" />}
                        label={amenity}
                        selected={answers.amenities.includes(amenity)}
                        onClick={() => update("amenities", toggleInArray(answers.amenities, amenity))}
                      />
                    ))}
                  </div>
                )}

                {step === 7 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="pms-staff-qual">Staff qualifications</Label>
                      <Textarea id="pms-staff-qual" rows={2} value={answers.staffQualifications} onChange={(e) => update("staffQualifications", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="pms-staff-ratio">Staff-to-resident ratio</Label>
                      <Input id="pms-staff-ratio" value={answers.staffRatio} onChange={(e) => update("staffRatio", e.target.value)} placeholder="e.g. 1:3 during the day" />
                    </div>
                    <div>
                      <Label htmlFor="pms-licensing">Licensing / oversight body</Label>
                      <Input id="pms-licensing" value={answers.licensingBody} onChange={(e) => update("licensingBody", e.target.value)} placeholder="e.g. WA DSHS" />
                    </div>
                    <div>
                      <Label htmlFor="pms-safety">Safety features</Label>
                      <Textarea id="pms-safety" rows={2} value={answers.safetyFeatures} onChange={(e) => update("safetyFeatures", e.target.value)} />
                    </div>
                  </div>
                )}

                {step === 8 && (
                  <div className="space-y-6">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {TOUR_OPTIONS.map((opt) => (
                        <OptionCard
                          key={opt}
                          icon={<Phone className="h-4 w-4 text-primary flex-shrink-0" />}
                          label={opt}
                          selected={answers.tourPreferences.includes(opt)}
                          onClick={() => update("tourPreferences", toggleInArray(answers.tourPreferences, opt))}
                        />
                      ))}
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <OptionCard
                        icon={<Users className="h-4 w-4 text-primary flex-shrink-0" />}
                        label="We have testimonials to use"
                        selected={answers.hasTestimonials === "yes"}
                        onClick={() => update("hasTestimonials", answers.hasTestimonials === "yes" ? "" : "yes")}
                      />
                      <OptionCard
                        icon={<MessageSquareHeart className="h-4 w-4 text-primary flex-shrink-0" />}
                        label="We have photos to use"
                        selected={answers.hasPhotos === "yes"}
                        onClick={() => update("hasPhotos", answers.hasPhotos === "yes" ? "" : "yes")}
                      />
                    </div>
                  </div>
                )}

                {step === 9 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="pms-goals">What should visitors feel or do on your site?</Label>
                      <Textarea id="pms-goals" rows={3} value={answers.goals} onChange={(e) => update("goals", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="pms-inspiration">Any websites you like the look of?</Label>
                      <Input id="pms-inspiration" value={answers.inspirationSites} onChange={(e) => update("inspirationSites", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="pms-notes">Anything else we should know?</Label>
                      <Textarea id="pms-notes" rows={3} value={answers.additionalNotes} onChange={(e) => update("additionalNotes", e.target.value)} />
                    </div>
                  </div>
                )}

                {step === 10 && (
                  <div className="space-y-6">
                    <div className="rounded-xl bg-muted p-4 text-sm">
                      <p>
                        <strong>{answers.afhName || "Your AFH"}</strong> at {answers.address || "—"} • Contact: {answers.name || "—"} (
                        {answers.email || "—"}, {answers.phone || "—"})
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      That's everything! Submit your answers below and we'll follow up within 24 hours.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          <Button variant="outline" onClick={back} disabled={step === 0}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          {step < totalSteps - 1 ? (
            <Button onClick={next} disabled={!canGoNext()} data-testid="pms-next">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isSubmitting} data-testid="pms-submit">
              {isSubmitting ? "Submitting..." : "Submit My Plan"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
