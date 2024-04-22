"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ButtonOrLink } from "./ButtonOrLink"

export default function Apply() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ amount: "some", once: true }}
      className="relative mx-auto mt-[400px] flex max-w-[1112px] flex-col items-center sm:mt-[355px] sm:flex-row sm:justify-end md:mt-[454px] will-change-transform"
    >
      <Image
        src={"/assets/images/founder.webp"}
        height={954}
        width={954}
        className="absolute -top-[225px] -z-10 h-[281px] w-[281px] sm:-top-[151px] sm:left-[0] sm:self-start lg:-top-[173px] lg:h-[477px] lg:w-[477px]"
        alt="Louis Graham"
      />
      <div className="sm:min-w-[514px relative flex w-full flex-col items-center bg-primary p-8 text-center text-white sm:ml-[174px] sm:items-start sm:p-14 sm:pt-12 sm:text-left lg:ml-[382px] lg:max-w-[730px] lg:p-16">
        <h3 className="mb-4 font-serif text-heading-sm-tall xs:text-heading-md sm:mb-6 md:text-heading-xl">
          Be the first to test
        </h3>
        <p className="mb-6 text-body-sm md:text-body">
          Hi, I&apos;m Louis Graham, the founder of the company. Book a demo
          call with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I&apos;ll be in touch to schedule
          a call.
        </p>
        <Image
          src={"/assets/bg-patterns/bg-pattern-3.svg"}
          alt=""
          height={212}
          width={221}
          className="absolute -bottom-[61px] -right-[15px] hidden sm:flex lg:right-[40px] lg:h-[212px]"
        />
        <ButtonOrLink>Apply for access</ButtonOrLink>
      </div>
    </motion.section>
  )
}
