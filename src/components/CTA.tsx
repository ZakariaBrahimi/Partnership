import { ArrowRight } from "lucide-react";
import { Reveal, Section } from "./Section";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { links } from "@/lib/config";

export function CTA() {
  const { t } = useLanguage();
  const c = t.cta;
  return (
    <Section id={c.id} className="pt-0">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-mz-900 via-mz-800 to-flex-600 px-6 py-14 text-white shadow-lift sm:px-12 sm:py-20 rtl:bg-gradient-to-bl">
          <div aria-hidden className="absolute -end-24 -top-24 h-72 w-72 rounded-full bg-sun-400/25 blur-3xl" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.08)_1px,transparent_0)] [background-size:26px_26px]" />
          <div className="relative max-w-3xl">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.1]">
              {c.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{c.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="light" className="w-full sm:w-auto">
                <a href={links.contactMizaniyaPay} target="_blank" rel="noreferrer">
                  {c.primary}
                  <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                </a>
              </Button>
              <Button asChild size="lg" variant="glass" className="w-full sm:w-auto">
                <a href={links.contactMizaniyaPay} target="_blank" rel="noreferrer">
                  {c.secondary}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
