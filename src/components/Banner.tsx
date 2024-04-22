import Image from "next/image"

export default function Banner() {
  return (
    <>
      <DarkBanner />
      <LightBanner />
    </>
  )
}

function DarkBanner() {
  return (
    <>
      <div className="absolute left-0 -z-10 hidden h-[730px] w-screen items-center justify-center 2xl:flex">
        <Image
          src={"/assets/banners/dark-banner-2xl.svg"}
          className="object-cover object-center"
          fill
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 -z-10 hidden h-[730px] w-screen items-center justify-center xl:max-2xl:flex">
        <Image
          src={"/assets/banners/dark-banner-xl.svg"}
          className="object-cover object-center"
          fill
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[730px] w-screen items-center justify-center lg:max-xl:flex">
        <Image
          src={"/assets/banners/dark-banner-lg.svg"}
          className="object-cover object-center"
          fill
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[646px] w-screen items-center justify-center md:max-lg:flex">
        <Image
          src={"/assets/banners/dark-banner-md.svg"}
          className="object-cover object-center"
          fill
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[540px] w-screen items-center justify-center sm:max-md:flex">
        <Image
          src={"/assets/banners/dark-banner-sm.svg"}
          className="object-cover object-center"
          fill
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden h-[510px] w-screen items-center justify-center xs:max-sm:flex">
        <Image
          src={"/assets/banners/dark-banner-xs.svg"}
          className="object-cover object-center"
          fill
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 flex h-[510px] w-screen items-center justify-center xs:hidden">
        <Image
          src={"/assets/banners/dark-banner-mobile.svg"}
          className="object-cover object-center"
          fill
          alt=""
          priority
        />
      </div>
    </>
  )
}

function LightBanner() {
  return (
    <>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[960px] w-screen items-center justify-center 2xl:flex">
        <Image
          src={"/assets/banners/light-banner-2xl.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={2561}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[960px] w-screen items-center justify-center xl:max-2xl:flex">
        <Image
          src={"/assets/banners/light-banner-xl.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={2049}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[960px] w-screen items-center justify-center lg:max-xl:flex">
        <Image
          src={"/assets/banners/light-banner-lg.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={1441}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[504px] -z-20 hidden h-[1000px] w-screen items-center justify-center md:max-lg:flex">
        <Image
          src={"/assets/banners/light-banner-md.svg"}
          className="h-full object-cover object-center"
          height={960}
          width={1024}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[403px] -z-20 hidden h-[920px] w-screen items-center justify-center sm:max-md:flex">
        <Image
          src={"/assets/banners/light-banner-sm.svg"}
          className="h-full object-cover object-center"
          height={920}
          width={769}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[392px] -z-20 hidden h-[1080px] w-screen items-center justify-center xs:max-sm:flex">
        <Image
          src={"/assets/banners/light-banner-xs.svg"}
          className="h-full object-cover object-center"
          height={1070}
          width={701}
          alt=""
          priority
        />
      </div>
      <div className="absolute left-0 top-[392px] -z-20 flex h-[1071px] w-screen items-center justify-center xs:hidden">
        <Image
          src={"/assets/banners/light-banner-mobile.svg"}
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
