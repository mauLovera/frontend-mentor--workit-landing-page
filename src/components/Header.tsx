import { ButtonOrLink } from "./ButtonOrLink"
import Logo from "./icons/Logo"

export default function Header() {
  return (
    <header className="flex w-full justify-between">
      <Logo />
      <ButtonOrLink intent={"secondary"}>Apply for access</ButtonOrLink>
    </header>
  )
}
