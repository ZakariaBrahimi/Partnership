import { Activity, ListChecks, Lock, ShieldCheck, Store } from "lucide-react";
import { Reveal, Section } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";

const icons = [ShieldCheck, Activity, ListChecks, Store, Lock];

export function TrustSection() {
  const { t } = useLanguage();
  return (
    <Section className="py-12 sm:py-16 lg:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-mz-900 px-6 py-10 text-white sm:px-10 sm:py-14">
          <div aria-hidden className="absolute -end-20 -top-20 h-64 w-64 rounded-full bg-sun-400/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -start-16 h-64 w-64 rounded-full bg-flex-500/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sun-400 rtl:tracking-normal">
              {t.trust.eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-2xl font-bold tracking-tight sm:text-4xl">
              {t.trust.title}
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {t.trust.items.map((it, i) => {
                const Icon = icons[i];
                return (
                  <li
                    key={it}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10"
                  >
                    <Icon className="h-5 w-5 text-sun-400" />
                    <p className="mt-3 text-sm font-medium leading-snug">{it}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
