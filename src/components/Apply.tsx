import Image from "next/image"

import { ButtonOrLink } from "./ButtonOrLink"

export default function Apply() {
  return (
    <section className="mt-[172px] flex flex-col items-center sm:mt-[204px] md:mt-[281px]">
      <Image
        src={"/images/image-founder.webp"}
        height={954}
        width={954}
        className="h-[281px] w-[281px] md:h-[477px] md:w-[477px]"
        alt="Louis Graham"
      />
      <div className="relative -top-[53px] flex w-full flex-col items-center bg-primary p-[31px] text-center text-white">
        <h3 className="mb-4 text-heading-sm font-serif">
          Be the first to test
        </h3>
        <p className="mb-6 text-[16px] leading-[28px] sm:text-body">
          Hi, I&apos;m Louis Graham, the founder of the company. Book a demo
          call with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I&apos;ll be in touch to schedule
          a call.
        </p>
        <ButtonOrLink>Apply for access</ButtonOrLink>
      </div>
    </section>
  )
}
