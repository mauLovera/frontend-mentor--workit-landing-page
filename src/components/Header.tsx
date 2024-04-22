import Link from "next/link"

import Logo from "./icons/Logo"
import { ButtonOrLink } from "./ButtonOrLink"

export default function Header() {
  return (
    <header className="flex w-full justify-between pt-8 md:pt-14 ">
      <Link href={"/"}>
        <Logo />
      </Link>
      <ButtonOrLink intent={"secondary"}>Apply for access</ButtonOrLink>
    </header>
  )
}
