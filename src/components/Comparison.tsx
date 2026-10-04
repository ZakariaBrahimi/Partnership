import { AlertTriangle, ArrowDown, Check, Info } from "lucide-react";
import { Reveal, Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

function Steps({ steps, accent }: { steps: string[]; accent: boolean }) {
  return (
    <ol className="flex flex-col items-stretch">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-col items-center">
          <span
            className={cn(
              "w-full rounded-xl border px-4 py-2.5 text-center text-sm font-medium",
              accent ? "border-mz-200 bg-mz-50 text-mz-900" : "border-ink/10 bg-white text-ink-soft",
            )}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <ArrowDown className={cn("my-1 h-4 w-4", accent ? "text-flex-500" : "text-ink-mute")} aria-hidden />
          )}
        </li>
      ))}
    </ol>
  );
}

export function Comparison() {
  const { t } = useLanguage();
  const c = t.comparison;
  return (
    <Section tone="white">
      <SectionHeader eyebrow={c.eyebrow} title={c.title} />
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        <Reveal className="h-full">
          <article className="h-full rounded-3xl border border-ink/10 bg-canvas p-6 sm:p-8">
            <h3 className="text-xl font-bold text-ink-soft">{c.cod.title}</h3>
            <div className="mt-5">
              <Steps steps={c.cod.steps} accent={false} />
            </div>
            <h4 className="mt-6 text-sm font-semibold">{c.cod.problemsTitle}</h4>
            <ul className="mt-3 grid gap-2">
              {c.cod.problems.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-flex-600" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal className="h-full" delay={0.1}>
          <article className="relative h-full rounded-3xl bg-white p-6 shadow-lift ring-2 ring-mz-700/80 sm:p-8">
            <div aria-hidden className="absolute inset-x-8 -top-px h-1 rounded-b-full bg-gradient-to-r from-flex-500 to-mz-700 rtl:bg-gradient-to-l" />
            <h3 className="text-xl font-bold">{c.digital.title}</h3>
            <div className="mt-5">
              <Steps steps={c.digital.steps} accent />
            </div>
            <h4 className="mt-6 text-sm font-semibold">{c.digital.benefitsTitle}</h4>
            <ul className="mt-3 grid gap-2">
              {c.digital.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mz-700 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
      <Reveal className="mt-6">
        <p className="mx-auto flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-ink-mute">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          {c.note}
        </p>
      </Reveal>
    </Section>
  );
}
