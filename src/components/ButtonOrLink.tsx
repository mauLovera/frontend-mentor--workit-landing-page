import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"

const buttonOrLinkStyles = cva(
  "flex items-center justify-center font-bold transition-colors duration-300 text-button-sm md:text-button w-fit",
  {
    variants: {
      intent: {
        primary:
          "bg-accent text-primary hover:text-accent hover:bg-primary border-2 border-accent pt-[11px] pb-3 px-6 md:pt-[13px] md:pb-4 md:px-[31px] z-10",
        secondary: "text-white border-b-[3px] border-accent hover:text-accent",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
)
  
export interface Props extends VariantProps<typeof buttonOrLinkStyles> {
  children: React.ReactNode
  href?: string
  onClick?: () => void
}

export function ButtonOrLink({
  intent,
  children,
  href,
  onClick,
  ...props
}: Props) {
  return href ? (
    <Link href={href} className={buttonOrLinkStyles({ intent })} {...props}>
      {children}
    </Link>
  ) : (
    <button
      className={buttonOrLinkStyles({ intent })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
