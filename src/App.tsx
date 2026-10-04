import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PartnershipOverview } from "@/components/PartnershipOverview";
import { Benefits } from "@/components/Benefits";
import { PaymentMethods } from "@/components/PaymentMethods";
import { HowItWorks } from "@/components/HowItWorks";
import { PaymentFlow } from "@/components/PaymentFlow";
import { MerchantBenefits } from "@/components/MerchantBenefits";
import { CustomerBenefits } from "@/components/CustomerBenefits";
import { FutureOpportunities } from "@/components/FutureOpportunities";
import { PartnershipValue } from "@/components/PartnershipValue";
import { MerchantJourney } from "@/components/MerchantJourney";
import { Comparison } from "@/components/Comparison";
import { TrustSection } from "@/components/TrustSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function App() {
  const { language, t } = useLanguage();

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        {language === null ? (
          <LanguageSelector key="selector" />
        ) : (
          <motion.div
            key="site"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a
              href="#main"
              className="sr-only z-[60] rounded-lg bg-white px-4 py-2 font-semibold shadow-lift focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
            >
              {t.common.skipToContent}
            </a>
            <Navbar />
            <main id="main">
              <Hero />
              <PartnershipOverview />
              <Benefits />
              <PaymentMethods />
              <HowItWorks />
              <PaymentFlow />
              <MerchantBenefits />
              <CustomerBenefits />
              <FutureOpportunities />
              <PartnershipValue />
              <MerchantJourney />
              <Comparison />
              <TrustSection />
              <CTA />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
