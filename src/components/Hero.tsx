import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BrandLockup } from "./Logo";
import { CheckoutMock } from "./CheckoutMock";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -start-32 top-0 h-[26rem] w-[26rem] rounded-full bg-flex-500/15 blur-3xl" />
        <div className="absolute -end-32 top-24 h-[30rem] w-[30rem] rounded-full bg-mz-700/15 blur-3xl" />
        <div className="absolute start-1/3 top-72 h-72 w-72 rounded-full bg-sun-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,27,36,.06)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-8">
        <div className="text-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            role="img"
            aria-label={t.hero.logosLabel}
            className="inline-flex rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 shadow-soft backdrop-blur sm:px-5"
          >
            <BrandLockup logoClass="h-7 sm:h-9" animate />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-7 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {t.hero.text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#collaboration">
                {t.hero.primary}
                <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#contact">{t.hero.secondary}</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
        >
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-flex-500/20 via-transparent to-mz-700/25 blur-2xl"
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <CheckoutMock className="mx-auto lg:ms-auto lg:me-0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
