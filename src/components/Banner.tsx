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
      <div className="absolute left-0 top-0 -z-10 hidden h-[730px] w-screen items-center justify-center xl:max-2xl:flex">
        <Image
          src={"/images/dark-banner-xl.svg"}
          className="h-full object-cover object-center"
          height={730}
          width={2048}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[730px] w-screen items-center justify-center lg:max-xl:flex">
        <Image
          src={"/images/dark-banner-lg.svg"}
          className="h-full object-cover object-center"
          height={730}
          width={1440}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[685px] w-screen items-center justify-center md:max-lg:flex">
        <Image
          src={"/images/dark-banner-md.svg"}
          className="h-full object-cover object-center"
          height={540}
          width={1024}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[540px] w-screen items-center justify-center sm:max-md:flex">
        <Image
          src={"/images/dark-banner-sm.svg"}
          className="h-full object-cover object-center"
          height={540}
          width={768}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[510px] w-screen items-center justify-center xs:max-sm:flex">
        <Image
          src={"/images/dark-banner-xs.svg"}
          className="h-full object-cover object-center"
          height={540}
          width={701}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 flex h-[481px] w-screen items-center justify-center xs:hidden">
        <Image
          src={"/images/dark-banner-mobile.svg"}
          className="h-full object-cover object-center"
          height={481}
          width={375}
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
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[960px] w-screen items-center justify-center xl:max-2xl:flex">
        <Image
          src={"/images/light-banner-xl.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={2048}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[960px] w-screen items-center justify-center lg:max-xl:flex">
        <Image
          src={"/images/light-banner-lg.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={1440}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[1000px] w-screen items-center justify-center md:max-lg:flex">
        <Image
          src={"/images/light-banner-md.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={1024}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[403px] -z-20 hidden h-[920px] w-screen items-center justify-center sm:max-md:flex">
        <Image
          src={"/images/light-banner-sm.svg"}
          className="h-full object-cover object-center"
          height={920}
          width={768}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[392px] -z-20 hidden h-[1080px] w-screen items-center justify-center xs:max-sm:flex">
        <Image
          src={"/images/light-banner-xs.svg"}
          className="h-full object-cover object-center"
          height={1070}
          width={701}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[392px] -z-20 flex h-[1071px] w-screen items-center justify-center xs:hidden">
        <Image
          src={"/images/light-banner-mobile.svg"}
          className="h-full object-cover object-center"
          height={1071}
          width={375}
          alt=""
          priority
        />
      </div>
    </>
  )
}