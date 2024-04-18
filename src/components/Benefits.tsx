import { serif } from "@/fonts"

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
      <ol className="mt-16 flex flex-col items-center justify-center gap-10 sm:mt-14 sm:flex-col sm:gap-12 md:mt-[90px] md:flex-row md:items-start md:gap-[26px]">
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
    <li className="flex max-w-[354px] flex-col items-center justify-center text-center sm:max-w-full sm:flex-row sm:items-center sm:text-left md:max-w-[354px] md:flex-col md:text-center">
      <div
        className={`mb-6 flex aspect-square h-14 items-center justify-center rounded-full border border-primary text-[24px] leading-[40px] sm:mb-0 md:mb-14 ${serif.className}`}
      >
        {benefitNumber}
      </div>
      <div className="ml-0 flex flex-col self-start sm:ml-8 md:ml-0">
        <h2
          className={`${serif.className} text-heading-xs mb-6 sm:mb-4 md:mb-7 md:text-heading-sm`}
        >
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </li>
  )
}
