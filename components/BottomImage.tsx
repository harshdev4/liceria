import React from 'react'

const BottomImage = () => {
  return (
    <>
    <section data-aos="fade-up" className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-5 ">
        <div className="w-full h-full absolute top-0 filter brightness-50  bg-[url('/images/bottom-image2.jpg')] bg-cover bg-center"></div>
        <div className="absolute top-[50%] transform translate-y-[-50%] left-6 md:left-[50%] md:translate-x-[-50%] grid gap-5">
          <div>
            <h2 className="text-white text-3xl mb-1.5 md:text-6xl font-bold">Made with Love.</h2>
            <h2 className="text-[#dddcdc] text-xl md:text-4xl font-medium">Delivered with Care.</h2>
            <h3 className="text-[#d4af37] text-[1rem] font-semibold">Liceria</h3>
          </div>
        </div>
      </section>
      </>
  )
}

export default BottomImage
