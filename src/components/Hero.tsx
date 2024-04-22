import Image from "next/image"

import { ButtonOrLink } from "./ButtonOrLink"

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-16 text-center sm:pt-14">
      <h1 className="mb-10 max-w-[400px] font-serif text-heading-lg text-white sm:mb-9 sm:max-w-[573px] sm:text-heading-2xl md:max-w-[635px] md:text-heading-3xl lg:text-heading-4xl">
        Data{" "}
        <span className="relative after:absolute after:bottom-0 after:left-0 after:mb-[4px] after:h-[3px] after:w-full after:bg-accent after:sm:mb-[4px] after:md:mb-[7px]">
          tailored
        </span>{" "}
        to <br />
        your needs.
      </h1>
      <ButtonOrLink>Learn More</ButtonOrLink>
      <div className="relative left-2 mt-16 xs:max-w-[387px] sm:mt-[55px] sm:max-w-[514px] md:max-w-[640px] lg:max-w-[767px]">
        <Image
          src={"/assets/images/hero.webp"}
          height={882}
          width={1534}
          alt="An iPhone13 displaying diagrams"
          priority
        />
      </div>
    </section>
  )
}
