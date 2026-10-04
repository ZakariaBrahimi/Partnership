import { CheckCircle2, Lock, Timer, WalletCards, Zap, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { METHODS, MethodMark } from "./CheckoutMock";
import { Reveal, Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [WalletCards, Lock, Zap, Timer];

function PhoneMock() {
  const { t } = useLanguage();
  return (
    <div className="relative mx-auto w-full max-w-[17.5rem]">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-flex-500/20 to-mz-700/25 blur-3xl"
      />
      <div className="rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-lift">
        <div className="overflow-hidden rounded-[1.9rem] bg-white">
          <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-ink/15" aria-hidden />
          <div className="space-y-4 p-4 pt-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold">FlexDZ</span>
              <span className="text-ink-mute">{t.checkout.products}</span>
            </div>
            <div className="rounded-2xl bg-canvas p-3 text-center">
              <p className="text-[11px] text-ink-mute">{t.checkout.total}</p>
              <p className="text-2xl font-extrabold tabular-nums">{t.common.price}</p>
            </div>
            <div className="space-y-2">
              {METHODS.map((m, i) => (
                <div
                  key={m}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl border p-2",
                    i === 0 ? "border-mz-700 bg-mz-50" : "border-ink/10",
                  )}
                >
                  <MethodMark method={m} className="h-7 w-7 rounded-lg text-[9px]" />
                  <span className="flex-1 text-xs font-semibold">{m}</span>
                  <span
                    className={cn(
                      "h-4 w-4 rounded-full border",
                      i === 0 ? "border-4 border-mz-700" : "border-ink/20",
                    )}
                  />
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-mz-700 py-3 text-center text-sm font-semibold text-white">
              {t.checkout.paySecurely}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 rounded-xl bg-sun-100 px-3 py-2 text-xs font-semibold text-mz-900"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-mz-700" />
              {t.customers.phone.success}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CustomerBenefits() {
  const { t } = useLanguage();
  const c = t.customers;
  return (
    <Section tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader align="start" eyebrow={c.eyebrow} title={c.title} className="mb-8 sm:mb-10" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {c.items.map((it, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={it.title} delay={i * 0.07}>
                  <li className="h-full rounded-2xl border border-ink/10 bg-canvas p-5 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-soft">
                    <Icon className={cn("h-6 w-6", i % 2 === 0 ? "text-flex-600" : "text-mz-700")} />
                    <h3 className="mt-3 font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{it.text}</p>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
        <Reveal>
          <PhoneMock />
        </Reveal>
      </div>
    </Section>
  );
}
