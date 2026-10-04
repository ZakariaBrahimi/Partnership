import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";
import { METHODS, MethodMark, type Method } from "./CheckoutMock";
import { Reveal, Section, SectionHeader } from "./Section";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function PaymentMethods() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Method>("MizaniyaPay");

  return (
    <Section id={t.payments.id}>
      <SectionHeader eyebrow={t.payments.eyebrow} title={t.payments.title} />

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {t.payments.cards.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08} className="h-full">
            <button
              type="button"
              onClick={() => setSelected(c.name as Method)}
              className={cn(
                "flex h-full w-full flex-col items-start rounded-3xl border bg-white p-6 text-start shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
                selected === c.name ? "border-mz-700 ring-2 ring-mz-700/15" : "border-ink/10",
              )}
            >
              <MethodMark method={c.name as Method} className="h-12 w-12 text-sm" />
              <h3 className="mt-5 text-xl font-bold">{c.name}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{c.text}</p>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-10 max-w-4xl" delay={0.1}>
        <div className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-lift sm:p-8">
          <p className="mb-4 text-sm font-semibold text-ink-soft">{t.payments.selectorTitle}</p>
          <div
            role="radiogroup"
            aria-label={t.payments.selectorTitle}
            className="grid gap-2 rounded-2xl bg-canvas p-1.5 sm:grid-cols-3"
          >
            {METHODS.map((m) => {
              const active = selected === m;
              return (
                <button
                  key={m}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelected(m)}
                  className="relative flex items-center justify-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold"
                >
                  {active && (
                    <motion.span
                      layoutId="method-pill"
                      className="absolute inset-0 rounded-xl bg-white shadow-soft ring-2 ring-mz-700"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <MethodMark method={m} className="relative h-8 w-8" />
                  <span className={cn("relative", active ? "text-ink" : "text-ink-soft")}>{m}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-ink-mute">{t.payments.total}</p>
              <p className="text-3xl font-extrabold tabular-nums">{t.common.price}</p>
            </div>
            <Button size="lg" className="w-full sm:w-auto" type="button">
              <Lock className="h-4 w-4" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={selected}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  {t.payments.cta}
                </motion.span>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
