import { useCallback, useEffect, useRef, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const FIRST_OPEN_MS = 15000;
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
    document.body.classList.add("consultation-popup-open");

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("consultation-popup-open");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isSuccess) return;
    const timeout = setTimeout(() => setIsSuccess(false), 4000);
    return () => clearTimeout(timeout);
  }, [isSuccess]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closePopup]);

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
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-4 md:p-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <button
        type="button"
        aria-label="Close consultation popup"
        className="absolute inset-0 bg-foreground/50 backdrop-blur-[2px] animate-fade-in"
        onClick={closePopup}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-popup-title"
        className="relative z-10 flex w-full max-h-[min(92dvh,100%)] flex-col overflow-hidden rounded-t-[1.5rem] border border-border bg-card shadow-2xl animate-fade-in sm:max-h-[min(88dvh,640px)] sm:max-w-lg sm:rounded-[1.75rem]"
      >
        {/* Sticky header */}
        <div className="relative flex-shrink-0 border-b border-border/70 bg-card px-4 pb-3 pt-4 sm:px-6 sm:pb-4 sm:pt-5">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border sm:hidden" aria-hidden="true" />
          <button
            type="button"
            onClick={closePopup}
            className="absolute right-2.5 top-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:right-3 sm:top-3"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="pr-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px]">
              Consultation
            </p>
            <h2
              id="consultation-popup-title"
              className="mt-1 font-display text-xl font-semibold leading-tight text-foreground sm:mt-2 sm:text-2xl md:text-3xl"
            >
              Get a Free Consultation
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
              Select a service and we&apos;ll reach out within 24 hours.
            </p>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5 [-webkit-overflow-scrolling:touch]">
          {isSuccess && (
            <div className="mb-4 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-3 animate-fade-in sm:mb-5 sm:p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <p className="text-sm font-semibold text-green-800 sm:text-base">Enquiry Sent Successfully!</p>
                <p className="mt-1 text-xs text-green-700 sm:text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          <form id="consultation-popup-form" onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="popup-name" className="text-sm">
                  Full Name *
                </Label>
                <Input
                  id="popup-name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="h-11 rounded-xl border-border bg-background text-base sm:h-10 sm:text-sm"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="popup-phone" className="text-sm">
                  Phone Number *
                </Label>
                <Input
                  id="popup-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="h-11 rounded-xl border-border bg-background text-base sm:h-10 sm:text-sm"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="popup-email" className="text-sm">
                Email Address *
              </Label>
              <Input
                id="popup-email"
                name="email"
                type="email"
                inputMode="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="h-11 rounded-xl border-border bg-background text-base sm:h-10 sm:text-sm"
                autoComplete="email"
                required
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="popup-service" className="text-sm">
                Select Service *
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                <SelectTrigger
                  id="popup-service"
                  className="h-11 rounded-xl border-border bg-background text-base sm:h-10 sm:text-sm"
                >
                  <SelectValue placeholder="Choose a service..." />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  sideOffset={4}
                  collisionPadding={16}
                  className="z-[100] max-h-[min(240px,45dvh)] w-[var(--radix-select-trigger-width)]"
                >
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

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="popup-message" className="text-sm">
                Message
              </Label>
              <Textarea
                id="popup-message"
                name="message"
                placeholder="Tell us about your requirements..."
                rows={2}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="min-h-[72px] resize-none rounded-xl border-border bg-background text-base sm:min-h-[88px] sm:text-sm"
              />
            </div>
          </form>
        </div>

        {/* Sticky footer CTA */}
        <div className="flex-shrink-0 border-t border-border/70 bg-card px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-6 sm:pb-5 sm:pt-4">
          <Button
            type="submit"
            form="consultation-popup-form"
            size="lg"
            className="h-11 w-full rounded-full bg-hero-gradient text-base text-white shadow-md hover:opacity-95 sm:h-12"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
