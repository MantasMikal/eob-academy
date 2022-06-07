import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
    <div className="relative flex items-center overflow-hidden min-h-[500px] md:min-h-screen-nav max-h-screen w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/content/eobHero.jpg"
        autoPlay
        muted
        loop
      >
        <source src="/content/eobHero.mp4" type="video/mp4" />
      </video>
      <div
        role="presentation"
        className="absolute top-0 left-0 w-full h-full bg-black opacity-30 bg-polka-dots"
      />
      <div className="container-lg space-y-3 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold">
          Like video games? <br /> Come and make one.
        </h1>
        <p className="text-xl font-semibold max-w-prose">
          Recruiting now for full-time college courses - September 2022 - grab
          your experience!
        </p>
      </div>
    </div>
  )
}

export default Hero
