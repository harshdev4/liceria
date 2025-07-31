import Image from 'next/image'
import React from 'react'
import { BsBox, BsTruck, BsWallet2 } from 'react-icons/bs'
import { Ri24HoursLine } from 'react-icons/ri'
import featureImage from "../app/assets/images/feature-image.jpg";
import SectionHeading from './SectionHeading';

const Features = () => {
  return (
    <>
      <section data-aos='fade-up'>
        <div className='mt-4 mb-6'><SectionHeading title='Our Features' /></div>
        <div className="pb-8 px-pHSm lg:px-pHLg flex md:flex-row flex-col w-full gap-x-10 lg:gap-x-15">
          <Image src={featureImage} alt="feature image" className="md:w-[258px] w-full aspect-square md:aspect-[1/1] lg:aspect-[1/1.3] object-cover" />
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-x-5 lg:gap-x-10 gap-y-6">
            <div className="border-t border-[#6b6a6a27] text-[#5a3a1b] py-5 flex flex-col gap-y-1.5">
              <div className="flex gap-2.5 items-center"><BsTruck className="text-3xl" /> <h3 className="text-lg">Fast Delivery</h3></div>
              <p>Experience fast delivery, ensuring your stylish finds arrive at your door in no time.</p>
            </div>
            <div className="border-t border-[#6b6a6a27] text-[#5a3a1b] py-5 flex flex-col gap-y-1.5">
              <div className="flex gap-2.5 items-center"><BsWallet2 className="text-3xl" /> <h3 className="text-lg">Flexible Payment</h3></div>
              <p>Shop now and pay your way with flexible payment options designed to fit your budget.</p>
            </div>
            <div className="border-t border-[#6b6a6a27] text-[#5a3a1b] py-5 flex flex-col gap-y-1.5">
              <div className="flex gap-2.5 items-center"><BsBox className="text-3xl" /> <h3 className="text-lg">Free Delivery</h3></div>
              <p>Shop your favourite styles with the convenience of free delivery, directly to your doorstep.</p>
            </div>
            <div className="border-t border-[#6b6a6a27] text-[#5a3a1b] py-5 flex flex-col gap-y-1.5">
              <div className="flex gap-2.5 items-center"><Ri24HoursLine className="text-3xl" /> <h3 className="text-lg">Premium Support</h3></div>
              <p>Enjoy premium support with personalize assistance, a seamless shopping experience every time.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Features
