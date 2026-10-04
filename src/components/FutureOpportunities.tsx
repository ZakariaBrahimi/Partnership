import { BarChart3, Check, Link2, Megaphone, QrCode, Undo2, UserPlus, type LucideIcon } from "lucide-react";
import { FutureBadge, Reveal, Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";

const icons: LucideIcon[] = [Link2, QrCode, Undo2, UserPlus, BarChart3, Megaphone];

export function FutureOpportunities() {
  const { t } = useLanguage();
  const f = t.future;
  return (
    <Section id={f.id}>
      <SectionHeader eyebrow={f.eyebrow} title={f.title} text={f.text} />

      <Reveal className="mb-8 rounded-3xl border border-mz-200 bg-mz-50/60 p-5 sm:p-6">
        <h3 className="mb-3 text-sm font-semibold text-mz-800">{f.scopeTitle}</h3>
        <ul className="flex flex-wrap gap-2">
          {f.scope.map((s) => (
            <li
              key={s}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-mz-800 shadow-soft sm:text-sm"
            >
              <Check className="h-3.5 w-3.5 text-mz-700" strokeWidth={3} />
              {s}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {f.items.map((it, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={it.title} delay={(i % 3) * 0.07} className="h-full">
              <article className="group h-full rounded-3xl border border-dashed border-ink/20 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-solid hover:border-mz-600/40 hover:bg-white hover:shadow-lift">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink/5 text-ink-soft transition-colors group-hover:bg-mz-50 group-hover:text-mz-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <FutureBadge label={t.common.futureOpportunity} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{it.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
