import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BrandLockup } from "./Logo";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, type Language } from "@/i18n/translations";

/** Full-screen first-visit language picker. Cards always read in their own language. */
export function LanguageSelector() {
  const { setLanguage } = useLanguage();
  // Card labels are identical in every translation set except the secondary name; use English as the neutral base.
  const en = translations.en.selector;

  return (
    <motion.main
      key="language-selector"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.985, filter: "blur(6px)" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -start-24 -top-24 h-96 w-96 rounded-full bg-flex-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -end-24 h-[28rem] w-[28rem] rounded-full bg-mz-700/20 blur-3xl" />
        <div className="absolute start-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-sun-400/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        dir="ltr"
        className="mb-10 sm:mb-14"
      >
        <BrandLockup logoClass="h-8 sm:h-11" animate />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8 text-center sm:mb-10"
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{en.choose}</h1>
        <p className="mt-3 text-base text-ink-soft sm:text-lg" lang="fr">
          {en.chooseFr}
        </p>
        <p className="mt-1 font-arabic text-base text-ink-soft sm:text-lg" lang="ar" dir="rtl">
          {en.chooseAr}
        </p>
      </motion.div>

      <ul className="grid w-full max-w-4xl gap-4 sm:grid-cols-3" dir="ltr">
        {en.options.map((opt, i) => (
          <motion.li
            key={opt.code}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          >
            <button
              type="button"
              onClick={() => setLanguage(opt.code as Language)}
              lang={opt.code}
              className="group relative flex h-full w-full flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-ink/10 bg-white/80 p-6 text-start shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-mz-700/40 hover:shadow-lift focus-visible:-translate-y-1 focus-visible:border-mz-700 active:translate-y-0 active:scale-[.99]"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-flex-500 to-mz-700 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
              <span className="flex items-start justify-between">
                <span className="rounded-lg bg-mz-50 px-2.5 py-1 text-xs font-bold tracking-widest text-mz-700">
                  {opt.tag}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink transition-all duration-300 group-hover:bg-mz-700 group-hover:text-white group-focus-visible:bg-mz-700 group-focus-visible:text-white">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </span>
              <span>
                <span
                  className={
                    "block text-3xl font-bold " + (opt.code === "ar" ? "font-arabic" : "")
                  }
                  dir={opt.code === "ar" ? "rtl" : "ltr"}
                >
                  {opt.native}
                </span>
                <span className="mt-1 block text-sm text-ink-mute">
                  {opt.code === "ar" ? "Arabic" : opt.name}
                </span>
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.main>
  );
}
