import { BrandLockup } from "./Logo";
import { useLanguage } from "@/hooks/useLanguage";
import { links } from "@/lib/config";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const items = [
    { label: f.links.flexdz, href: links.flexdz, external: true },
    { label: f.links.mizaniyapay, href: links.mizaniyapay, external: true },
    { label: f.links.collaboration, href: "#collaboration" },
    { label: f.links.contact, href: "#contact" },
    { label: f.links.privacy, href: links.privacy },
  ];
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <BrandLockup logoClass="h-8" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">{f.tagline}</p>
          </div>
          <nav aria-label={f.navLabel}>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              {items.map((i) => (
                <li key={i.label}>
                  <a
                    href={i.href}
                    {...(i.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="text-ink-soft transition-colors hover:text-mz-700"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-ink/10 pt-6 text-sm text-ink-mute">
          © {new Date().getFullYear()} FlexDZ × MizaniyaPay
        </p>
      </div>
    </footer>
  );
}
