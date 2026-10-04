import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CircleDollarSign,
  CreditCard,
  RefreshCw,
  Store,
  User,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { METHODS, MethodMark } from "./CheckoutMock";
import { Reveal, Section, SectionHeader } from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const Line = ({ delay = 0, className }: { delay?: number; className?: string }) => (
  <motion.span
    aria-hidden
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay }}
    className={cn("relative block w-0.5 origin-top overflow-hidden bg-ink/15", className)}
  >
    <span className="absolute inset-x-0 top-0 h-2 animate-flow bg-gradient-to-b from-flex-500 to-mz-700" />
  </motion.span>
);

function Connector({ delay }: { delay: number }) {
  return (
    <div className="flex justify-center">
      <Line delay={delay} className="h-7" />
    </div>
  );
}

function Node({
  icon: Icon,
  label,
  delay,
  tone = "neutral",
}: {
  icon: LucideIcon;
  label: string;
  delay: number;
  tone?: "neutral" | "flex" | "mz";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "mx-auto flex w-full max-w-sm items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-soft",
        tone === "flex" && "border-flex-200",
        tone === "mz" && "border-mz-200",
        tone === "neutral" && "border-ink/10",
      )}
    >
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
          tone === "flex" && "bg-flex-50 text-flex-600",
          tone === "mz" && "bg-mz-50 text-mz-700",
          tone === "neutral" && "bg-ink/5 text-ink-soft",
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold sm:text-base">{label}</span>
    </motion.div>
  );
}

/** Three drops fanning out of (or into) one line — symmetric, so it works in RTL too. */
function Branch({ delay, reverse }: { delay: number; reverse?: boolean }) {
  const cols = ["16.666%", "50%", "83.333%"];
  return (
    <div aria-hidden className={cn("relative mx-auto h-9 w-full max-w-sm", reverse && "-scale-y-100")}>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
        className="absolute inset-x-[16.666%] top-4 h-0.5 bg-ink/15"
      />
      <Line delay={delay} className="absolute start-1/2 top-0 h-4 -translate-x-1/2 rtl:translate-x-1/2" />
      {cols.map((c) => (
        <span
          key={c}
          className="absolute top-4 h-5 -translate-x-1/2 rtl:translate-x-1/2"
          style={{ insetInlineStart: c }}
        >
          <Line delay={delay + 0.25} className="h-5" />
        </span>
      ))}
    </div>
  );
}

export function PaymentFlow() {
  const { t } = useLanguage();
  const n = t.flow.nodes;
  let d = 0;
  const next = () => (d += 0.12);

  const chain: ReactNode[] = [];
  const top: { icon: LucideIcon; label: string; tone: "neutral" | "flex" | "mz" }[] = [
    { icon: User, label: n.customer, tone: "neutral" },
    { icon: Store, label: n.store, tone: "flex" },
    { icon: CreditCard, label: n.checkout, tone: "flex" },
    { icon: Wallet, label: n.pay, tone: "mz" },
  ];
  top.forEach((x, i) => {
    chain.push(<Node key={x.label} {...x} delay={next()} />);
    chain.push(<Connector key={`c${i}`} delay={next()} />);
  });

  return (
    <Section tone="white">
      <div className="grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <SectionHeader
          align="start"
          eyebrow={t.flow.eyebrow}
          title={t.flow.title}
          text={t.flow.text}
          className="mx-0 mb-0 sm:mb-0 lg:sticky lg:top-28"
        />

        <Reveal>
          <div className="rounded-[2rem] border border-ink/10 bg-canvas p-5 sm:p-8">
            {chain}

            <Node icon={CircleDollarSign} label={n.options} tone="mz" delay={next()} />
            <Branch delay={next()} />
            <div className="mx-auto grid max-w-sm grid-cols-3 gap-2">
              {METHODS.map((m) => (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: next() }}
                  className="flex flex-col items-center gap-1.5 rounded-2xl border border-ink/10 bg-white px-1 py-3 shadow-soft"
                >
                  <MethodMark method={m} />
                  <span className="text-[11px] font-semibold sm:text-xs">{m}</span>
                </motion.div>
              ))}
            </div>
            <Branch delay={next()} reverse />

            <Node icon={BadgeCheck} label={n.confirmation} tone="mz" delay={next()} />
            <Connector delay={next()} />
            <Node icon={RefreshCw} label={n.orderUpdated} tone="flex" delay={next()} />
            <Connector delay={next()} />
            <Node icon={Wallet} label={n.merchant} tone="neutral" delay={next()} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
