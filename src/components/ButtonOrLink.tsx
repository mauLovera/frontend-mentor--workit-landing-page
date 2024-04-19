import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"

const buttonOrLinkStyles = cva(
  "flex items-center justify-center font-bold transition-all duration-300 text-button-sm md:text-button",
  {
    variants: {
      intent: {
        primary:
          "bg-accent text-primary hover:text-accent hover:bg-primary border-2 border-accent pt-[13px] pb-4 px-[25px]",
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
