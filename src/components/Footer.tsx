import Link from "next/link"

import Logo from "./icons/Logo"
import FacebookIcon from "./icons/FacebookIcon"
import InstagramIcon from "./icons/InstagramIcon"
import TwitterIcon from "./icons/TwitterIcon"

export default function Footer() {
  return (
    <footer className="mt-[74px] flex flex-col items-center gap-[60px] pb-16 sm:mt-20 md:mt-[120px]">
      <Link href={"/"}>
        <Logo type="dark" />
      </Link>
      <menu className="flex items-center gap-7">
        <Link href={"/"}>
          <FacebookIcon className="fill-neutral transition-colors duration-300 hover:fill-primary" />
        </Link>
        <Link href={"/"}>
          <TwitterIcon className="fill-neutral transition-colors duration-300 hover:fill-primary" />
        </Link>
        <Link href={"/"}>
          <InstagramIcon className="fill-neutral transition-colors duration-300 hover:fill-primary" />
        </Link>
      </menu>
    </footer>
  )
}
