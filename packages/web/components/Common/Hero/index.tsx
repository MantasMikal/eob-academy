import Image from 'next/image'
import React from 'react'

import hero from '@/assets/img/hero.png'

type Props = {
  title: string
  subtitle: string
}

function Hero({ title, subtitle }: Props) {
  return (
    <div className="relative flex items-center overflow-hidden min-h-[500px] md:min-h-screen w-full">
      <Image
        src={hero}
        layout="fill"
        objectFit="cover"
        alt="hero"
        sizes="100vw"
        placeholder='blur'
      />
      <div
        role="presentation"
        className="absolute top-0 left-0 w-full h-full bg-black opacity-70 bg-polka-dots"
      />
      <div className="container-lg space-y-3 pt-12 pb-24 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="md:text-xl max-w-prose">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default Hero
