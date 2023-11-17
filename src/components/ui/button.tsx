import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import {clsx} from "clsx";

export interface ButtonProps {
    asChild?: boolean
    className?: string
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={clsx(className, "h-10 px-4 py-2 bg-rose-600 text-slate-50 hover:bg-rose-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300")}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
