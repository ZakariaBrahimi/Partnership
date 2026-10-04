import { motion } from "framer-motion";
import { ArrowLeftRight, Check, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { Reveal, Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";

function PlatformCard({
  brand,
  role,
  title,
  items,
  delay,
}: {
  brand: "flex" | "mizaniya";
  role: string;
  title: string;
  items: string[];
  delay: number;
}) {
  const flex = brand === "flex";
  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={
          "group relative h-full overflow-hidden rounded-3xl border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8 " +
          (flex ? "border-flex-200 hover:border-flex-500/60" : "border-mz-200 hover:border-mz-600/60")
        }
      >
        <div
          aria-hidden
          className={
            "absolute -end-16 -top-16 h-48 w-48 rounded-full blur-3xl " +
            (flex ? "bg-flex-500/15" : "bg-mz-700/15")
          }
        />
        <div className="relative">
          <div className="flex items-center justify-between">
            <Logo brand={brand} className="h-9" />
            <span
              className={
                "rounded-full px-3 py-1 text-xs font-semibold " +
                (flex ? "bg-flex-50 text-flex-700" : "bg-mz-50 text-mz-700")
              }
            >
              {role}
            </span>
          </div>
          <h3 className="mt-6 text-2xl font-bold tracking-tight">{title}</h3>
          <ul className="mt-5 grid gap-3">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-ink-soft">
                <span
                  className={
                    "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full " +
                    (flex ? "bg-flex-500 text-white" : "bg-mz-700 text-white")
                  }
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export function PartnershipOverview() {
  const { t } = useLanguage();
  const o = t.overview;
  return (
    <Section id={o.id}>
      <SectionHeader eyebrow={o.eyebrow} title={o.title} />
      <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
        <PlatformCard brand="flex" role={t.common.flexRole} title={o.flex.title} items={o.flex.items} delay={0} />

        <div className="relative flex items-center justify-center py-2 lg:px-4 lg:py-0" aria-hidden>
          <div className="absolute inset-y-0 start-1/2 hidden w-px bg-gradient-to-b from-flex-500/0 via-ink/15 to-mz-700/0 lg:block" />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
            className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-flex-500 to-mz-700 text-white shadow-lift ring-8 ring-canvas"
          >
            <ArrowLeftRight className="h-6 w-6 rotate-90 lg:rotate-0" />
          </motion.div>
        </div>

        <PlatformCard
          brand="mizaniya"
          role={t.common.mizaRole}
          title={o.mizaniya.title}
          items={o.mizaniya.items}
          delay={0.1}
        />
      </div>
      <Reveal delay={0.1} className="mt-10 flex justify-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-center text-sm font-semibold shadow-soft sm:text-base">
          <Sparkles className="h-4 w-4 shrink-0 text-flex-500" />
          {o.together}
        </p>
      </Reveal>
    </Section>
  );
}
