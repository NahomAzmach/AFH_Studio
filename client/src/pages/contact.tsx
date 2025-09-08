import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  afhName: z.string().min(1, "AFH name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  city: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  template: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your home")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const selectedTemplate = watch("template");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll contact you within 24 hours to discuss your website needs.",
      });
      
      console.log("Form submitted:", data);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Website Today</h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your Adult Family Home and we'll get started right away.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className={errors.name ? "border-destructive" : ""}
                    data-testid="input-name"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="afhName">Adult Family Home Name *</Label>
                  <Input
                    id="afhName"
                    {...register("afhName")}
                    placeholder="Your AFH name"
                    className={errors.afhName ? "border-destructive" : ""}
                    data-testid="input-afh-name"
                  />
                  {errors.afhName && (
                    <p className="text-sm text-destructive mt-1">{errors.afhName.message}</p>
                  )}
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="(555) 123-4567"
                      className={errors.phone ? "border-destructive" : ""}
                      data-testid="input-phone"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your@email.com"
                      className={errors.email ? "border-destructive" : ""}
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    {...register("city")}
                    placeholder="Your city"
                    data-testid="input-city"
                  />
                </div>
                
                <div>
                  <Label htmlFor="website">Current Website (optional)</Label>
                  <Input
                    id="website"
                    type="url"
                    {...register("website")}
                    placeholder="https://yoursite.com"
                    data-testid="input-website"
                  />
                  {errors.website && (
                    <p className="text-sm text-destructive mt-1">{errors.website.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="template">Preferred Template</Label>
                  <Select onValueChange={(value) => setValue("template", value)} data-testid="select-template">
                    <SelectTrigger>
                      <SelectValue placeholder="Select one..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="everbloom">Everbloom Care</SelectItem>
                      <SelectItem value="cedar-grove">Cedar Grove Living</SelectItem>
                      <SelectItem value="maple-stone">Maple & Stone</SelectItem>
                      <SelectItem value="sunrise-orchard">Sunrise Orchard</SelectItem>
                      <SelectItem value="bluebird-haven">Bluebird Haven</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Tell us about your home *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    placeholder="Services offered, number of residents, special programs, etc."
                    className={errors.message ? "border-destructive" : ""}
                    data-testid="textarea-message"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground">
                  We don't collect PHI—please share only general inquiry details.
                </p>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  data-testid="submit-contact-form"
                >
                  {isSubmitting ? "Sending..." : "Start My Website"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info & Process */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Response Guarantee</h3>
                <p className="text-muted-foreground mb-4">
                  We respond to all inquiries within 24 hours, usually much sooner.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-sm">hello@afhwebstudio.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-sm">(555) 123-4567</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    "We'll schedule a 15-minute call to discuss your needs and recommend the best template.",
                    "You'll receive a detailed proposal with timeline and next steps.",
                    "Once approved, we start building your website immediately."
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">
                        {index + 1}
                      </div>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-muted rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">No Long-Term Contracts</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with confidence. Cancel anytime with 30 days notice. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
