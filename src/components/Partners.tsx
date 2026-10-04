import { Reveal, Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";

/** Current partnerships. Add a logo as src/assets/partners/<slug>.(svg|png|webp) to replace the name tile. */
const PARTNERS = [
  { slug: "yalidine", name: "Yalidine" },
  { slug: "geipex", name: "Geipex" },
  { slug: "easy-speed", name: "Easy & Speed" },
  { slug: "zimou-express", name: "Zimou Express" },
  { slug: "gosime", name: "Gosime" },
  { slug: "oneclick", name: "OneClick" },
];

const logos = import.meta.glob("../assets/partners/*.{svg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const logoFor = (slug: string) =>
  Object.entries(logos).find(([path]) => path.split("/").pop()?.replace(/\.\w+$/, "") === slug)?.[1];

export function Partners() {
  const { t } = useLanguage();
  const p = t.partners;

  return (
    <Section id={p.id} tone="white">
      <SectionHeader eyebrow={p.eyebrow} title={p.title} text={p.text} />
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        {PARTNERS.map((partner, i) => {
          const logo = logoFor(partner.slug);
          return (
            <li key={partner.slug}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="group flex h-28 items-center justify-center rounded-2xl border border-ink/10 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-mz-700/30 hover:shadow-lift sm:h-32">
                  {logo ? (
                    <img src={logo} alt={partner.name} loading="lazy" className="max-h-12 w-auto max-w-full object-contain" />
                  ) : (
                    <span className="text-balance text-center text-lg font-extrabold tracking-tight text-mz-700 transition-colors group-hover:text-flex-600 sm:text-xl">
                      {partner.name}
                    </span>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
