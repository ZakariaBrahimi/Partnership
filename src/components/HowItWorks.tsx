import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { METHODS } from "./CheckoutMock";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const { t } = useLanguage();
  const steps = t.how.steps;
  const last = steps.length - 1;

  return (
    <Section id={t.how.id} tone="white">
      <SectionHeader eyebrow={t.how.eyebrow} title={t.how.title} />

      <ol className="grid gap-0 lg:grid-cols-6 lg:gap-6">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial="off"
            whileInView="on"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delayChildren: i * 0.18 }}
            className="relative flex gap-4 pb-8 last:pb-0 lg:block lg:pb-0"
          >
            {/* connectors: vertical (mobile) and horizontal (desktop) */}
            {i < last && (
              <>
                <span aria-hidden className="absolute start-[19px] top-10 bottom-0 w-0.5 bg-ink/10 lg:hidden" />
                <motion.span
                  aria-hidden
                  variants={{ off: { scaleY: 0 }, on: { scaleY: 1 } }}
                  transition={{ duration: 0.5, delay: i * 0.18 + 0.15 }}
                  className="absolute start-[19px] top-10 bottom-0 w-0.5 origin-top bg-gradient-to-b from-flex-500 to-mz-700 lg:hidden"
                />
                <span aria-hidden className="absolute start-12 -end-6 top-[19px] hidden h-0.5 bg-ink/10 lg:block" />
                <motion.span
                  aria-hidden
                  variants={{ off: { scaleX: 0 }, on: { scaleX: 1 } }}
                  transition={{ duration: 0.5, delay: i * 0.18 + 0.15 }}
                  className="absolute start-12 -end-6 top-[19px] hidden h-0.5 bg-gradient-to-r from-flex-500 to-mz-700 ltr:origin-left rtl:origin-right rtl:bg-gradient-to-l lg:block"
                />
              </>
            )}

            <motion.span
              variants={{
                off: { backgroundColor: "#ffffff", color: "#6B7A89", scale: 0.9 },
                on: { backgroundColor: i % 2 === 0 ? "#FA2B54" : "#1E4E67", color: "#ffffff", scale: 1 },
              }}
              transition={{ duration: 0.35 }}
              aria-label={`${t.how.stepLabel} ${i + 1}`}
              className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 text-sm font-bold shadow-soft"
            >
              {i + 1}
            </motion.span>

            <motion.div
              variants={{ off: { opacity: 0.4, y: 8 }, on: { opacity: 1, y: 0 } }}
              className="lg:mt-5"
            >
              <h3 className="font-semibold leading-snug">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              {i === 3 && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {METHODS.map((m, k) => (
                    <li
                      key={m}
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-semibold",
                        k === 0 ? "bg-mz-700 text-white" : "bg-mz-50 text-mz-700",
                      )}
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
