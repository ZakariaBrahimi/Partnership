import { Check, Handshake } from "lucide-react";
import { Logo } from "./Logo";
import { Reveal, Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";

function Side({
  brand,
  title,
  items,
}: {
  brand: "flex" | "mizaniya";
  title: string;
  items: string[];
}) {
  const flex = brand === "flex";
  return (
    <article
      className={
        "h-full rounded-3xl border bg-white p-6 shadow-soft sm:p-8 " +
        (flex ? "border-flex-200" : "border-mz-200")
      }
    >
      <div className="flex items-center gap-3">
        <Logo brand={brand} className="h-8" />
      </div>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-ink-soft">
            <Check
              className={"mt-1 h-4 w-4 shrink-0 " + (flex ? "text-flex-600" : "text-mz-700")}
              strokeWidth={3}
            />
            {it}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PartnershipValue() {
  const { t } = useLanguage();
  const v = t.value;
  return (
    <Section tone="white">
      <SectionHeader eyebrow={v.eyebrow} title={v.title} />
      <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
        <Reveal className="h-full">
          <Side brand="flex" title={v.flexTitle} items={v.flex} />
        </Reveal>
        <Reveal className="h-full" delay={0.08}>
          <Side brand="mizaniya" title={v.mizaTitle} items={v.miza} />
        </Reveal>
      </div>
      <Reveal delay={0.1} className="mt-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-flex-50 via-white to-mz-50 p-8 text-center ring-1 ring-ink/10 sm:p-10 rtl:bg-gradient-to-l">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-flex-500 to-mz-700 text-white shadow-lift">
            <Handshake className="h-6 w-6" />
          </span>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-mute rtl:tracking-normal">
            {v.sharedLabel}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            {v.shared}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
