import {
  BadgeDollarSign,
  ClipboardList,
  Radio,
  Rocket,
  Settings2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [BadgeDollarSign, Settings2, Radio, ClipboardList, Rocket, Sparkles];

const rows = [
  { id: "#1042", method: "MizaniyaPay", paid: true },
  { id: "#1041", method: "CIB", paid: true },
  { id: "#1040", method: "Edahabia", paid: false },
  { id: "#1039", method: "MizaniyaPay", paid: true },
];

export function MerchantBenefits() {
  const { t } = useLanguage();
  const m = t.merchants;
  return (
    <Section id={m.id}>
      <SectionHeader eyebrow={m.eyebrow} title={m.title} />

      <Reveal>
        <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-lift">
          {/* window chrome */}
          <div className="flex items-center justify-between gap-3 border-b border-ink/5 bg-canvas px-4 py-3 sm:px-6">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-flex-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-sun-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-mz-700/70" />
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sun-100 px-3 py-1 text-xs font-semibold text-mz-800">
              <span className="h-1.5 w-1.5 rounded-full bg-flex-500" aria-hidden />
              {m.label}
            </span>
          </div>

          <div className="grid gap-px bg-ink/5 lg:grid-cols-[.8fr_1.2fr]">
            {/* orders mock */}
            <div className="bg-white p-5 sm:p-8">
              <p className="mb-4 flex items-center justify-between text-sm font-semibold">
                {m.dashboardTitle}
                <span className="text-xs font-normal text-ink-mute">{t.common.illustrative}</span>
              </p>
              <ul className="space-y-2">
                {rows.map((r) => (
                  <li
                    key={r.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-ink/5 bg-canvas px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tabular-nums" dir="ltr">
                        {r.id}
                      </p>
                      <p className="truncate text-xs text-ink-mute">{r.method}</p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold",
                        r.paid ? "bg-mz-700 text-white" : "bg-sun-100 text-mz-800",
                      )}
                    >
                      {r.paid ? m.paid : m.awaiting}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* benefit grid */}
            <div className="grid gap-px bg-ink/5 sm:grid-cols-2">
              {m.items.map((it, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={it.title}
                    className="group bg-white p-5 transition-colors hover:bg-mz-50/60 sm:p-6"
                  >
                    <span
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-xl",
                        i % 2 === 0 ? "bg-flex-50 text-flex-600" : "bg-mz-50 text-mz-700",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-semibold">{it.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{it.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
