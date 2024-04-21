import Image from "next/image"

import { ButtonOrLink } from "./ButtonOrLink"

export default function Apply() {
  return (
    <section className="relative mx-auto mt-[400px] flex max-w-[1112px] flex-col items-center sm:mt-[355px] sm:flex-row sm:justify-end md:mt-[454px]">
      <Image
        src={"/images/image-founder.webp"}
        height={954}
        width={954}
        className="absolute -top-[225px] -z-10 h-[281px] w-[281px] sm:-top-[151px] sm:left-[0] sm:self-start lg:-top-[173px] lg:h-[477px] lg:w-[477px]"
        alt="Louis Graham"
      />
      <div className="relative flex w-full flex-col items-center bg-primary p-[31px] text-center text-white sm:min-w-[514px lg:max-w-[730px] sm:ml-[174px] lg:ml-[382px] sm:items-start xs:p-14 xs:pt-12 lg:p-16 sm:text-left">
        <h3 className="mb-4 font-serif text-heading-sm-tall sm:mb-6 xs:text-heading-md md:text-heading-lg">
          Be the first to test
        </h3>
        <p className="mb-6 text-[16px] text-body-sm leading-[28px] md:text-body">
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
