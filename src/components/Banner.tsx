import Image from "next/image"

export default function Banner() {
  return (
    <>
      <div className="absolute -left-1 top-0 -z-10 hidden h-[730px] w-screen items-center justify-center 2xl:flex">
        <Image
          src={"/images/dark-banner-2xl.svg"}
          className="h-full w-screen object-cover object-center"
          height={730}
          width={2560}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[730px] w-screen items-center justify-center xl:flex">
        <Image
          src={"/images/dark-banner-xl.svg"}
          className="h-full object-cover object-center"
          height={730}
          width={2048}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[730px] w-screen items-center justify-center lg:flex">
        <Image
          src={"/images/dark-banner-lg.svg"}
          className="h-full object-cover object-center"
          height={730}
          width={1440}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[540px] w-screen items-center justify-center md:flex">
        <Image
          src={"/images/dark-banner-md.svg"}
          className="h-full object-cover object-center"
          height={540}
          width={1024}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[540] w-screen items-center justify-center sm:flex">
        <Image
          src={"/images/dark-banner-sm.svg"}
          className="h-full object-cover object-center"
          height={540}
          width={768}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 flex h-[481px] w-screen items-center justify-center sm:hidden">
        <Image
          src={"/images/dark-banner-mobile.svg"}
          className="h-full object-cover object-center"
          height={481}
          width={640}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[960px] w-screen items-center justify-center 2xl:flex">
        <Image
          src={"/images/light-banner-2xl.svg"}
          className="h-full w-screen object-cover object-center"
          height={960}
          width={2560}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[960px] w-screen items-center justify-center xl:flex">
        <Image
          src={"/images/light-banner-2xl.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={2048}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[960px] w-screen items-center justify-center lg:flex">
        <Image
          src={"/images/light-banner-lg.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={1440}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[960px] w-screen items-center justify-center md:flex">
        <Image
          src={"/images/light-banner-lg.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={1024}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[403px] -z-20 hidden h-[920px] w-screen items-center justify-center sm:flex">
        <Image
          src={"/images/light-banner-lg.svg"}
          className="h-full object-cover object-center"
          height={920}
          width={768}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[392px] -z-20 flex h-[1071px] w-screen items-center justify-center sm:hidden">
        <Image
          src={"/images/light-banner-lg.svg"}
          className="h-full object-cover object-center"
          height={1071}
          width={640}
          alt=""
          priority
        />
      </div>
    </>
  )
}