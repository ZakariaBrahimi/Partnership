import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLockup } from "./Logo";
import { links } from "@/lib/config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const items = [
    { href: "#collaboration", label: t.nav.collaboration },
    { href: "#benefits", label: t.nav.benefits },
    { href: "#how-it-works", label: t.nav.how },
    { href: "#merchants", label: t.nav.merchants },
    { href: "#payment-methods", label: t.nav.payments },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled || open
          ? "border-ink/10 bg-white/80 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
        <a href="#top" aria-label="FlexDZ × MizaniyaPay" className="shrink-0 rounded-lg">
          <BrandLockup logoClass="h-5 min-[420px]:h-6 sm:h-7" className="gap-1.5 sm:gap-3" />
        </a>

        <nav aria-label={t.nav.mainNav} className="hidden min-[1360px]:block">
          <ul className="flex items-center gap-0.5">
            {items.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium text-ink-soft 2xl:px-3 2xl:text-sm transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <LanguageSwitcher />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={links.partnerLogin} target="_blank" rel="noreferrer">{t.nav.cta}</a>
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white/70 text-ink min-[1360px]:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink/10 min-[1360px]:hidden"
          >
            <nav aria-label={t.nav.mainNav} className="mx-auto max-w-7xl px-4 pb-5 pt-2 sm:px-6">
              <ul className="grid gap-1">
                {items.map((i) => (
                  <li key={i.href}>
                    <a
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-mz-50"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-3 w-full sm:hidden">
                <a href={links.partnerLogin} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                  {t.nav.cta}
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
