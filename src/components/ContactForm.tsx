import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ContactFormProps = {
  subject?: string;
  className?: string;
  compact?: boolean;
};

const ContactForm = ({
  subject = "New Contact Form Submission from NnovityWorks Website",
  className = "",
  compact = false,
}: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isSuccess) return;
    const timeout = setTimeout(() => setIsSuccess(false), 5000);
    return () => clearTimeout(timeout);
  }, [isSuccess]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("service", formData.service);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("_subject", subject);
      formDataToSend.append("_captcha", "false");
      formDataToSend.append("_template", "table");

      const response = await fetch("https://formsubmit.co/ajax/smillath@nnovityworks.com", {
        method: "POST",
        body: formDataToSend,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          toast({
            title: "Message Sent Successfully!",
            description: "Thank you for contacting us. We'll get back to you within 24 hours.",
          });
          setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        } else {
          throw new Error("Submission failed");
        }
      } else {
        throw new Error("Network error");
      }
    } catch {
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      {isSuccess && (
        <div className="mb-6 flex items-start space-x-3 rounded-2xl border border-green-200 bg-green-50 p-4 animate-fade-in">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <p className="font-semibold text-green-800">Message Sent Successfully!</p>
            <p className="mt-1 text-sm text-green-700">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-6"}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="cf-name">Full Name *</Label>
            <Input
              id="cf-name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="rounded-xl border-border bg-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cf-phone">Phone Number *</Label>
            <Input
              id="cf-phone"
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="rounded-xl border-border bg-white"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cf-email">Email Address *</Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="rounded-xl border-border bg-white"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cf-service">Service Interested In *</Label>
          <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
            <SelectTrigger id="cf-service" className="rounded-xl border-border bg-white">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tally-sales">Tally Prime Sales</SelectItem>
              <SelectItem value="tally-customization">Tally Prime Customization</SelectItem>
              <SelectItem value="tally-cloud">Tally Prime on Cloud</SelectItem>
              <SelectItem value="tally-support">Tally Prime Technical Support</SelectItem>
              <SelectItem value="tally-training">Tally Prime Training</SelectItem>
              <SelectItem value="softskills-corporate">Corporate Softskills Training</SelectItem>
              <SelectItem value="softskills-personal">Personal Development Training</SelectItem>
              <SelectItem value="train-trainer">Train the Trainer Program</SelectItem>
              <SelectItem value="posh-training">POSH Training</SelectItem>
              <SelectItem value="hrms-crm-pos-solutions">HRMS/CRM/POS Solutions</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cf-message">Message *</Label>
          <Textarea
            id="cf-message"
            name="message"
            placeholder="Tell us about your requirements..."
            rows={compact ? 4 : 5}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="rounded-xl border-border bg-white"
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
