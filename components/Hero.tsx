import Link from 'next/link'
import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { MdArrowOutward } from 'react-icons/md'

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100svh-60px)] md:h-[calc(600px)]">
        <div className="w-full h-full absolute top-0 filter brightness-40" style={{ backgroundImage: `url('/images/hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', }}></div>
        <div className="absolute top-10 md:top-12 left-[50%] transform translate-x-[-50%] flex items-center gap-2 backdrop-blur-lg bg-white/10 px-6 py-3 rounded-4xl text-white">
          <BsStarFill className="text-amber-300" />
          <span className="text-sm">AWARD WINNING DESIGNS</span>
        </div>
        <div className="absolute bottom-20 sm:bottom-17 md:bottom-12 left-6 md:left-10 grid gap-5">
          <h2 className="text-[#d4af37] text-4xl sm:text-5xl md:text-8xl font-black filter opacity-75">01</h2>
          <div>
            <h2 className="text-white text-4xl sm:text-6xl md:text-9xl font-bold md:font-black">ARTISAN</h2>
            <h3 className="text-[#d4af37] text-xl font-semibold">Collection</h3>
          </div>
          <h3 className="text-white text-[1.1rem] sm:text-[1.4rem] md:text-[1.6rem] filter opacity-75">Handcrafted pieces that tell a story of tradition</h3>
          <Link href='/' className="group flex items-center gap-4 bg-white text-[1rem] md:text-xl text-black px-6 py-3 md:py-5 md:px-7 w-fit" style={{ clipPath: "polygon(0px 0px, calc(100% - 20px) 0px, 100% 100%, 20px 100%)" }}><span className="font-bold">Request Quotation</span> <MdArrowOutward className="transform transition duration-105 ease-in-out group-hover:rotate-45" /></Link>
        </div>
      </section>
  )
}

export default Hero
