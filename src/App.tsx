import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import ConsultationPopup from "@/components/ConsultationPopup";
import Index from "./pages/Index";
import TallySales from "./pages/TallySales";
import TallySupport from "./pages/TallySupport";
import CRMSolutions from "./pages/CRMSolutions";
import ERPSolutions from "./pages/ERPSolutions";
import HRMSSolutions from "./pages/HRMSSolutions";
import POSBillingSolutions from "./pages/POSBillingSolutions";
import SoftskillsTraining from "./pages/SoftskillsTraining";
import Training from "./pages/Training";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ConsultationPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tally-sales" element={<TallySales />} />
          <Route path="/tally-support" element={<TallySupport />} />
          <Route path="/crm-solutions" element={<CRMSolutions />} />
          <Route path="/erp-solutions" element={<ERPSolutions />} />
          <Route path="/hrms-solutions" element={<HRMSSolutions />} />
          <Route path="/pos-billing-solutions" element={<POSBillingSolutions />} />
          <Route path="/softskills-training" element={<SoftskillsTraining />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
