import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import type { Language } from "@/i18n/translations";

const order: { code: Language; label: string; name: string }[] = [
  { code: "ar", label: "AR", name: "العربية" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t.nav.language}
      dir="ltr"
      className={cn("inline-flex rounded-full border border-ink/10 bg-white/70 p-0.5", className)}
    >
      {order.map((o) => {
        const active = language === o.code;
        return (
          <button
            key={o.code}
            type="button"
            lang={o.code}
            title={o.name}
            aria-label={o.name}
            aria-pressed={active}
            onClick={() => setLanguage(o.code)}
            className={cn(
              "h-8 min-w-8 rounded-full px-2 sm:min-w-9 sm:px-2.5 text-xs font-bold tracking-wide transition-colors",
              active ? "bg-mz-700 text-white" : "text-ink-soft hover:bg-ink/5 hover:text-ink",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
