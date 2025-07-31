import React from 'react'
import { PiChairLight, PiArmchairLight, PiBedLight, PiDresserLight, PiDeskLight } from "react-icons/pi";
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';

const Categories = () => { 
  return (
    <section data-aos='fade-up'  className='bg-lightSectionBg px-pHSm lg:px-pHLg pt-5 w-full'>
        <SectionHeading title="Categories" />
        <SectionSubheading></SectionSubheading>
        <div className='mt-7 flex justify-between gap-x-3 sm:gap-x-0 items-center py-8 overflow-x-auto overflow-auto'>
            <div className='flex-shrink-0 cursor-pointer flex flex-col items-center'><PiChairLight className='text-5xl sm:text-5xl rounded-4xl border p-2 bg-textColor text-white'/><span className='text-sm text-textColor'>Chair</span></div>  
            <div className='flex-shrink-0 cursor-pointer flex flex-col items-center'><PiArmchairLight className='text-5xl sm:text-5xl rounded-4xl border p-2 bg-textColor text-white'/><span className='text-sm text-textColor'>Sofa</span></div>
            <div className='flex-shrink-0 cursor-pointer flex flex-col items-center'><PiBedLight className='text-5xl sm:text-5xl rounded-4xl border p-2 bg-textColor text-white'/><span className='text-sm text-textColor'>Bed</span></div>     
            <div className='flex-shrink-0 cursor-pointer flex flex-col items-center'><PiDresserLight className='text-5xl sm:text-5xl rounded-4xl border p-2 bg-textColor text-white'/><span className='text-sm text-textColor'>Dresser</span></div> 
            <div className='flex-shrink-0 cursor-pointer flex flex-col items-center'><PiDeskLight className='text-5xl sm:text-5xl rounded-4xl border p-2 bg-textColor text-white'/><span className='text-sm text-textColor'>Lamp</span></div>    
        </div>
    </section>
  )
}

export default Categories

// import { PiChairLight } from "react-icons/pi"; -> chair
// import { PiArmchairLight } from "react-icons/pi"; -> sofa
// import { PiBedLight } from "react-icons/pi"; -> bed
// import { PiDresserLight } from "react-icons/pi"; -> dresser
// import { PiDeskLight } from "react-icons/pi"; -> desk