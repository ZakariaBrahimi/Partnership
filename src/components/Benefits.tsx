import {
  BadgeCheck,
  HandCoins,
  MapPin,
  ThumbsUp,
  WalletCards,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [HandCoins, WalletCards, Zap, ThumbsUp, BadgeCheck, MapPin];

export function Benefits() {
  const { t } = useLanguage();
  return (
    <Section id={t.benefits.id} tone="white">
      <SectionHeader eyebrow={t.benefits.eyebrow} title={t.benefits.title} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {t.benefits.items.map((b, i) => {
          const Icon = icons[i];
          const flex = i % 2 === 0;
          return (
            <Reveal key={b.title} delay={(i % 3) * 0.07} className="h-full">
              <article className="group h-full rounded-3xl border border-ink/10 bg-canvas p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-lift">
                <span
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                    flex ? "bg-flex-50 text-flex-600" : "bg-mz-50 text-mz-700",
                  )}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{b.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
