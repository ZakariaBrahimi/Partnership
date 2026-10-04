import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import { METHODS } from "./CheckoutMock";
import { Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

function StepCard({ n, children, delay }: { n: number; children: React.ReactNode; delay: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      className="relative flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-5 shadow-soft"
    >
      <span className="mb-3 grid h-7 w-7 place-items-center rounded-full bg-ink text-xs font-bold text-white">
        {n}
      </span>
      {children}
    </motion.li>
  );
}

export function MerchantJourney() {
  const { t } = useLanguage();
  const j = t.journey;
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => setPaid(true), 1600);
    return () => clearTimeout(id);
  }, [inView]);

  const arrow = (
    <li aria-hidden role="presentation" className="hidden items-center justify-center text-ink-mute lg:flex">
      <ArrowRight className="h-5 w-5 rtl:-scale-x-100" />
    </li>
  );

  return (
    <Section>
      <SectionHeader eyebrow={j.eyebrow} title={j.title} />
      <ol
        ref={ref}
        className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-2"
      >
        <StepCard n={1} delay={0}>
          <p className="text-sm text-ink-soft">{j.s1}</p>
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-canvas p-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-flex-50 text-flex-600">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold tabular-nums">{t.common.price}</span>
          </div>
        </StepCard>
        {arrow}

        <StepCard n={2} delay={0.1}>
          <p className="text-sm text-ink-soft">{j.s2Title}</p>
          <p className="mt-2 inline-flex w-fit rounded-xl border border-dashed border-ink/20 px-3 py-2 text-sm font-semibold text-ink-mute line-through">
            {j.cod}
          </p>
          <p className="mt-3 text-sm text-ink-soft">{j.s2Select}</p>
          <p className="mt-2 inline-flex w-fit rounded-xl bg-mz-700 px-3 py-2 text-sm font-semibold text-white">
            {j.online}
          </p>
        </StepCard>
        {arrow}

        <StepCard n={3} delay={0.2}>
          <p className="text-sm text-ink-soft">{j.s3}</p>
          <ul className="mt-3 grid gap-1.5 text-sm font-semibold">
            {METHODS.map((m, i) => (
              <li key={m} className="contents">
                <span
                  className={cn(
                    "rounded-xl border px-3 py-2",
                    i === 0 ? "border-mz-700 bg-mz-50" : "border-ink/10",
                  )}
                >
                  {m}
                </span>
                {i < METHODS.length - 1 && (
                  <span className="-my-0.5 ps-3 text-xs font-normal text-ink-mute">{j.or}</span>
                )}
              </li>
            ))}
          </ul>
        </StepCard>
        {arrow}

        <StepCard n={4} delay={0.3}>
          <CheckCircle2 className="h-9 w-9 text-mz-700" />
          <p className="mt-3 font-semibold">{j.s4Title}</p>
          <p className="mt-1 text-sm text-ink-soft">{j.s4Text}</p>
        </StepCard>
        {arrow}

        <StepCard n={5} delay={0.4}>
          <p className="text-sm text-ink-soft">{j.s5Title}</p>
          <div className="mt-3 rounded-2xl bg-canvas p-3">
            <p className="text-[11px] text-ink-mute">{j.statusLabel}</p>
            <div className="relative mt-1 h-7">
              <motion.span
                animate={{ opacity: paid ? 0 : 1, y: paid ? -8 : 0 }}
                className="absolute start-0 top-0 rounded-full bg-sun-100 px-3 py-1 text-xs font-bold text-mz-800"
              >
                {j.awaiting}
              </motion.span>
              <motion.span
                initial={false}
                animate={{ opacity: paid ? 1 : 0, y: paid ? 0 : 8, scale: paid ? 1 : 0.9 }}
                className="absolute start-0 top-0 rounded-full bg-mz-700 px-3 py-1 text-xs font-bold text-white"
              >
                {j.paid}
              </motion.span>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{j.s5Text}</p>
        </StepCard>
      </ol>
    </Section>
  );
}
