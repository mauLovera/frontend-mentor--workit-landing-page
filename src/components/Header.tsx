import Link from "next/link"
import { ButtonOrLink } from "./ButtonOrLink"
import Logo from "./icons/Logo"

export default function Header() {
  return (
    <header className="flex w-full justify-between">
      <Link href={"/"}>
        <Logo />
      </Link>
      <ButtonOrLink intent={"secondary"}>Apply for access</ButtonOrLink>
    </header>
  )
}
