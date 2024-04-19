import Image from "next/image"

import { ButtonOrLink } from "./ButtonOrLink"

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-16 text-center">
      <h1 className="mb-9 font-serif text-[50px] leading-none text-white sm:max-w-[573px] sm:text-[60px] md:max-w-[635px] md:text-heading-lg">
        Data{" "}
        <span className="relative after:absolute after:bottom-0 after:left-0 after:mb-[3px] after:h-[3px] after:w-full after:bg-accent after:sm:mb-[5px] after:md:mb-[10px]">
          tailored
        </span>{" "}
        to <br />
        your needs.
      </h1>
      <ButtonOrLink>Learn more</ButtonOrLink>
      <div className="relative left-4 mt-[55px] max-w-[320px] sm:mt-[50px] sm:max-w-[514px] md:max-w-[767px]">
        <Image
          src={"/images/image-hero.webp"}
          height={882}
          width={1534}
          alt="An iPhone13 displaying diagrams"
        />
      </div>
    </section>
  )
}
