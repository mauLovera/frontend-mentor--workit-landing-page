"use client"

import { motion } from "framer-motion"

interface Benefit {
  title: string
  description: string
  benefitNumber: number
}

const benefits = [
  {
    title: "Actionable insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    title: "Data-driven decisions",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    title: "Always affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
]

export default function Benefits() {
  return (
    <section>
      <ol className="mt-16 flex flex-col items-center justify-center gap-10 sm:mt-14 sm:flex-col sm:items-start sm:gap-12 sm:max-lg:px-14 lg:mt-[90px] lg:flex-row lg:gap-[26px]">
        {benefits.map(({ title, description }, index) => (
          <Benefit
            title={title}
            description={description}
            key={index}
            benefitNumber={index + 1}
          />
        ))}
      </ol>
    </section>
  )
}

function Benefit({ title, description, benefitNumber }: Benefit) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ amount: "all", once: true }}
      className="flex max-w-[354px] flex-col items-center justify-center text-center sm:max-w-full sm:flex-row sm:justify-start sm:text-left lg:max-w-[354px] lg:flex-col lg:justify-center lg:text-center will-change-transform"
    >
      <div className="mb-6 flex aspect-square h-12 items-center justify-center rounded-full border border-primary font-serif text-list-number-sm sm:mb-0 md:text-list-number lg:mb-14 lg:h-14">
        {benefitNumber}
      </div>
      <div className="ml-0 flex flex-col self-start max-lg:sm:ml-8">
        <h2 className="mb-4 font-serif text-heading-xs text-primary md:text-heading-sm lg:mb-7">
          {title}
        </h2>
        <p className="text-body-sm text-neutral md:text-body">{description}</p>
      </div>
    </motion.li>
  )
}
