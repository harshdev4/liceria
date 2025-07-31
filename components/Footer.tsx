import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { PiInstagramLogoLight } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { PiMicrosoftOutlookLogoLight } from "react-icons/pi";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className='w-full bg-[#5a3a1b]'>
            <div className='w-full md:flex md:justify-between px-3 lg:px-10 pt-10 text-white'>
                <div>
                    <Link href="/" title="Logo"><h2 className='text-3xl font-bold'>LICERIA</h2></Link>
                    <h3 className='text-[#bbb9b9] text-lg'>Creativity meets elegance.</h3>
                </div>

                <div className='flex flex-col gap-y-5 max-w-[250px] md:max-w-full lg:flex-row lg:w-7/10 lg:justify-between'>
                    <div className='my-7 md:my-0'>
                        <h3 className='text-[#bbb9b9]'>GET IN TOUCH</h3>
                        <h3 className='text-xl md:text-2xl'>liceriafurniture@gmail.com</h3>
                    </div>

                    <div className='grid grid-cols-[50%_50%] lg:grid-cols-[200px_200px] lg:flex-1 lg:justify-end'>
                        <div className='flex flex-col gap-y-2.5 lg:justify-self-end'>
                            <h3 className='text-[#bbb9b9]'>Pages</h3>
                            <ul className='flex flex-col gap-y-1 text-[1rem] font-normal'>
                                <li>Home</li>
                                <li>Blogs</li>
                                <li>Category</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-2.5 justify-self-end'>
                            <h3 className='text-[#bbb9b9]'>Connect</h3>
                            <ul className='flex flex-col gap-y-1 text-[1rem]'>
                                <Link href='/' className='flex items-center gap-2'><PiInstagramLogoLight />Instagram</Link>
                                <Link href='/' className='flex items-center gap-2'><RiTwitterXLine />Twiiter</Link>
                                <Link href='/' className='flex items-center gap-2'><PiMicrosoftOutlookLogoLight />Outlook</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-[#bbb9b960] mt-5 py-3'>
                <span className='flex items-center gap-x-1.5 px-3 lg:px-10 text-[#bbb9b9] text-sm'><LuCopyright /> <span>2025</span> <span>Liceria.</span> </span>
            </div>
        </footer>
    )
}

export default Footer;
