import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-mz-700 text-white shadow-soft hover:bg-mz-800 hover:shadow-lift",
        flex: "bg-flex-500 text-white shadow-soft hover:bg-flex-600 hover:shadow-lift",
        outline:
          "border border-ink/15 bg-white text-ink hover:border-mz-700/40 hover:bg-mz-50",
        ghost: "text-ink-soft hover:bg-ink/5 hover:text-ink",
        light: "bg-white text-mz-800 shadow-soft hover:bg-sun-100",
        glass:
          "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);
Button.displayName = "Button";
