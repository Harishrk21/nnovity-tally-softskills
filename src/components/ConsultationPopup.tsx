import { useCallback, useEffect, useRef, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const FIRST_OPEN_MS = 5000;
const REOPEN_MS = 20000;

const ConsultationPopup = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const reopenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (reopenTimerRef.current) {
      clearTimeout(reopenTimerRef.current);
      reopenTimerRef.current = null;
    }
    if (firstOpenTimerRef.current) {
      clearTimeout(firstOpenTimerRef.current);
      firstOpenTimerRef.current = null;
    }
  }, []);

  const openPopup = useCallback(() => {
    setIsOpen(true);
    setIsSuccess(false);
  }, []);

  const scheduleReopen = useCallback(() => {
    if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
    reopenTimerRef.current = setTimeout(() => {
      openPopup();
    }, REOPEN_MS);
  }, [openPopup]);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    scheduleReopen();
  }, [scheduleReopen]);

  useEffect(() => {
    firstOpenTimerRef.current = setTimeout(() => {
      openPopup();
    }, FIRST_OPEN_MS);

    return () => clearTimers();
  }, [clearTimers, openPopup]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isSuccess) return;
    const timeout = setTimeout(() => setIsSuccess(false), 4000);
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
      formDataToSend.append("_subject", "New Free Consultation Popup - NnovityWorks Website");
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
            title: "Enquiry Sent Successfully!",
            description: "Thank you. We'll reach out within 24 hours.",
          });
          setFormData({ name: "", email: "", phone: "", service: "", message: "" });
          setTimeout(() => {
            setIsOpen(false);
            scheduleReopen();
          }, 1800);
        } else {
          throw new Error("Submission failed");
        }
      } else {
        throw new Error("Network error");
      }
    } catch {
      toast({
        title: "Error Sending Enquiry",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close consultation popup"
        className="absolute inset-0 bg-foreground/45 backdrop-blur-[2px] animate-fade-in"
        onClick={closePopup}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-popup-title"
        className="relative z-10 max-h-[min(92vh,720px)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-[1.5rem] border border-border bg-white p-5 shadow-2xl animate-fade-in sm:rounded-[1.75rem] sm:p-7"
      >
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Consultation</p>
          <h2 id="consultation-popup-title" className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Get a Free Consultation
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Select a service and we'll reach out within 24 hours.
          </p>
        </div>

        {isSuccess && (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 animate-fade-in">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <p className="font-semibold text-green-800">Enquiry Sent Successfully!</p>
              <p className="mt-1 text-sm text-green-700">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name">Full Name *</Label>
            <Input
              id="popup-name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="rounded-xl border-border bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-phone">Phone Number *</Label>
            <Input
              id="popup-phone"
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="rounded-xl border-border bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-email">Email Address *</Label>
            <Input
              id="popup-email"
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
            <Label htmlFor="popup-service">Select Service *</Label>
            <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
              <SelectTrigger id="popup-service" className="rounded-xl border-border bg-white">
                <SelectValue placeholder="Choose a service..." />
              </SelectTrigger>
              <SelectContent className="z-[90]">
                <SelectItem value="tally-software-implementation-expert">Tally Software Implementation Expert</SelectItem>
                <SelectItem value="tally-sales">Tally Prime Sales</SelectItem>
                <SelectItem value="tally-support">Tally Prime Technical Support</SelectItem>
                <SelectItem value="tally-cloud">Tally Prime on Cloud</SelectItem>
                <SelectItem value="tally-training">Tally Prime Training</SelectItem>
                <SelectItem value="softskills-corporate">Corporate Soft Skills Training</SelectItem>
                <SelectItem value="posh-training">POSH Training</SelectItem>
                <SelectItem value="hrms-crm-pos-solutions">HRMS/CRM/POS Solutions</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-message">Message</Label>
            <Textarea
              id="popup-message"
              name="message"
              placeholder="Tell us about your requirements..."
              rows={3}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="rounded-xl border-border bg-white"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full bg-hero-gradient text-white shadow-md hover:opacity-95"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPopup;
