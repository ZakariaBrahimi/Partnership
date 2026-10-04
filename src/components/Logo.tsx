import { motion } from "framer-motion";
import flexLogo from "@/assets/brands/flexdz-logo.svg";
import mizaniyaLogo from "@/assets/brands/mizaniyapay-logo.svg";
import { cn } from "@/lib/utils";

const sources = { flex: flexLogo, mizaniya: mizaniyaLogo } as const;
const names = { flex: "FlexDZ", mizaniya: "MizaniyaPay" } as const;

export function Logo({
  brand,
  className,
}: {
  brand: "flex" | "mizaniya";
  className?: string;
}) {
  return (
    <img
      src={sources[brand]}
      alt={names[brand]}
      draggable={false}
      className={cn("h-8 w-auto shrink-0 select-none", className)}
    />
  );
}

/** [FlexDZ] × [MizaniyaPay] — always rendered LTR-ordered per direction by flex. */
export function BrandLockup({
  logoClass = "h-8",
  animate = false,
  className,
}: {
  logoClass?: string;
  animate?: boolean;
  className?: string;
}) {
  const x = (
    <span aria-hidden className="select-none text-xl font-light text-ink-mute">
      ×
    </span>
  );
  return (
    <div className={cn("flex items-center gap-3 sm:gap-4", className)}>
      <Logo brand="flex" className={logoClass} />
      {animate ? (
        <motion.span
          aria-hidden
          initial={{ scale: 0.4, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.35, type: "spring", stiffness: 220, damping: 14 }}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-lg font-medium text-ink-soft shadow-soft ring-1 ring-ink/10"
        >
          ×
        </motion.span>
      ) : (
        x
      )}
      <Logo brand="mizaniya" className={logoClass} />
    </div>
  );
}
