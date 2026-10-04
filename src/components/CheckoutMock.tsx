import { partner } from "@/lib/partner";
import { useState } from "react";
import { motion } from "framer-motion";
import { Banknote, Check, Lock, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export const METHODS = ["MizaniyaPay", "CIB", "Edahabia"] as const;
export type Method = (typeof METHODS)[number];

const methodDot: Record<Method, string> = {
  MizaniyaPay: "bg-mz-700 text-sun-400",
  CIB: "bg-ink text-white",
  Edahabia: "bg-sun-400 text-mz-900",
};

export function MethodMark({ method, className }: { method: Method; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[11px] font-extrabold",
        methodDot[method],
        className,
      )}
    >
      {method === "MizaniyaPay" ? "MP" : method === "CIB" ? "CIB" : "ED"}
    </span>
  );
}

/** Mock FlexDZ checkout: Cash on Delivery or MizaniyaPay e-payment (app / CIB / Edahabia). */
export function CheckoutMock({ className }: { className?: string }) {
  const { t } = useLanguage();
  const [option, setOption] = useState<"cod" | "epay">("epay");
  const [selected, setSelected] = useState<Method>("MizaniyaPay");

  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lift",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-ink/5 bg-gradient-to-r from-flex-50 to-white px-5 py-3.5 rtl:bg-gradient-to-l">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-flex-500 text-white">
            <ShoppingBag className="h-4 w-4" />
          </span>
          {partner.name} · {t.checkout.storeLabel}
        </div>
        <span className="flex items-center gap-1 text-xs text-ink-mute">
          <Lock className="h-3 w-3" /> SSL
        </span>
      </div>

      <div className="space-y-5 p-5">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-mute rtl:tracking-normal">
            {t.checkout.orderSummary}
          </p>
          <div className="flex items-center justify-between rounded-2xl bg-canvas p-3.5">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 rtl:space-x-reverse" aria-hidden>
                <span className="h-9 w-9 rounded-xl border-2 border-white bg-gradient-to-br from-flex-100 to-flex-200" />
                <span className="h-9 w-9 rounded-xl border-2 border-white bg-gradient-to-br from-mz-100 to-mz-200" />
              </div>
              <span className="text-sm font-medium">{t.checkout.products}</span>
            </div>
            <span className="text-sm font-bold tabular-nums">{t.common.price}</span>
          </div>
        </div>

        <div role="radiogroup" aria-label={t.checkout.paymentMethod} className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute rtl:tracking-normal">
            {t.checkout.paymentMethod}
          </p>
          {(["cod", "epay"] as const).map((o) => {
            const active = option === o;
            return (
              <button
                key={o}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setOption(o)}
                className={cn(
                  "relative flex w-full items-center gap-3 rounded-2xl border p-3 text-start transition-colors",
                  active ? "border-mz-700 bg-mz-50" : "border-ink/10 bg-white hover:border-ink/25",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="hero-method-ring"
                    className="absolute inset-0 rounded-2xl ring-2 ring-mz-700/30"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  aria-hidden
                  className={cn(
                    "relative grid h-9 w-9 shrink-0 place-items-center rounded-xl",
                    o === "cod" ? "bg-ink/5 text-ink-soft" : "bg-mz-700 text-sun-400",
                  )}
                >
                  {o === "cod" ? <Banknote className="h-5 w-5" /> : <span className="text-[11px] font-extrabold">MP</span>}
                </span>
                <span className="relative flex-1">
                  <span className="block text-sm font-semibold">{o === "cod" ? t.checkout.cod : t.checkout.epay}</span>
                  <span className="block text-xs text-ink-mute">
                    {o === "cod" ? t.checkout.codHint : t.checkout.epayHint}
                  </span>
                </span>
                <span
                  className={cn(
                    "relative grid h-5 w-5 place-items-center rounded-full border",
                    active ? "border-mz-700 bg-mz-700 text-white" : "border-ink/20",
                  )}
                >
                  {active && <Check className="h-3 w-3" strokeWidth={3} />}
                </span>
              </button>
            );
          })}

          {option === "epay" && (
            <div className="ms-4 space-y-1.5 border-s-2 border-mz-700/20 ps-3">
              <p className="text-[11px] font-semibold text-ink-mute">{t.checkout.payVia}</p>
              <div className="flex flex-wrap gap-1.5">
                {METHODS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setSelected(m)}
                    aria-pressed={selected === m}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors",
                      selected === m ? "border-mz-700 bg-mz-700 text-white" : "border-ink/15 bg-white text-ink-soft hover:border-ink/30",
                    )}
                  >
                    {m === "MizaniyaPay" ? t.checkout.app : m}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-dashed border-ink/10 pt-4">
          <span className="text-sm text-ink-soft">{t.checkout.total}</span>
          <span className="text-xl font-bold tabular-nums">{t.common.price}</span>
        </div>

        <Button className="w-full" size="lg" type="button">
          <Lock className="h-4 w-4" />
          {t.checkout.paySecurely}
        </Button>
      </div>
    </div>
  );
}
