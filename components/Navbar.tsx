"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../app/assets/images/logo1.png';

const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [isSearchToggled, setIsSearchToggled] = useState(false);


    const toggleMenu = () => {
        setIsMenuToggled((prev) => !prev);
    }


    const toggleSearch = () => {
        setIsSearchToggled((prev) => !prev);
    }

    return (
        <header className="w-full h-[70px] fixed top-0 z-10 bg-white shadow-sm shadow-black-950 px-3 md:px-6 lg:px-10 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" title="Logo"><Image src={logo} alt='Logo' width={70} height={70} priority className='w-[70px] h-[70px]' /></Link>

            <form action="/search" method='get' className='hidden w-full border-b-1 py-1 border-[#f08d47] focus-within:border-[#5a3a1b] md:flex md:max-w-fit lg:max-w-90 px-2 items-center gap-2'>
                <IoIosSearch className='text-gray-500 text-[1.1rem]' />
                <input type="text" name="product" id="" placeholder='Search product...' className='outline-0 border-0 w-full placeholder-gray-500 placeholder:font-light text-[#1f1e1e]' />
            </form>

            {/* Navigation */}
            <nav aria-label="Main navigation" className={`hidden md:block`}>
                <ul role="list" className="flex items-center justify-center text-[#5a3a1b] md:flex-row md:gap-7 md:font-medium md:text-[1rem]">
                    <li role="listitem">
                        <Link href="/" title="Home Page" onClick={()=> setIsMenuToggled(false)}>Home</Link>
                    </li>
                    <li role="listitem">
                        <Link href="/products" title="Products" onClick={()=> setIsMenuToggled(false)}>Products</Link>
                    </li>
                    <li role="listitem">
                        <Link href="/blogs" title="Read our blog posts" onClick={()=> setIsMenuToggled(false)}>Blogs</Link>
                    </li>
                    <li role="listitem">
                        <Link href="/about-us" title="Learn more about us" onClick={()=> setIsMenuToggled(false)}>About</Link>
                    </li>
                    <li role="listitem">
                        <Link href="/contact-us" title="Get in touch with us" onClick={()=> setIsMenuToggled(false)}>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/*Small Screen Navigation */}
            <nav aria-label="Main navigation" className={`block md:hidden absolute w-80/100 top-[-1px] right-[-1.2px] transition duration-300 ease-out transform ${!isMenuToggled ? "translate-x-full" : "translate-x-0"} bg-[#0f172b] h-[100vh]`}>
                <IoClose className='absolute cursor-pointer top-5 right-5 text-3xl text-[#ffffff]' onClick={toggleMenu} />
                <ul role="list" className="h-full flex flex-col gap-7 px-5 mt-[100px] font-normal text-[1.3rem] text-left text-amber-500">
                    <li role="listitem">
                        <Link href="/" title="Home Page" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li role="listitem">
                        <Link href="/products" title="Products" onClick={toggleMenu}>Products</Link>
                    </li>
                    <li role="listitem">
                        <Link href="/blogs" title="Read our blog posts" onClick={toggleMenu}>Blogs</Link>
                    </li>
                    <li role="listitem">
                        <Link href="/about-us" title="Learn more about us" onClick={toggleMenu}>About</Link>
                    </li>
                    <li role="listitem">
                        <Link href="/contact-us" title="Get in touch with us" onClick={toggleMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className={`block md:hidden rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.5)] transform duration-300 ease-in-out ${!isSearchToggled ? 'scale-x-0' : 'scale-x-100'} py-3 px-4 bg-white/2 backdrop-blur-lg absolute left-[50%] bottom-[-95%] transform translate-x-[-50%] w-[calc(100%-24px)]`}>
                <form action="/search" method='get' name='product' className='flex w-full border-b-1 py-1 border-[#f08d47] focus-within:border-[#5a3a1b] md:hidden md:max-w-fit lg:max-w-90 px-2 items-center gap-2'>
                    <IoIosSearch className='text-[#9c9c9c] text-[1.2rem]' />
                    <input type="text" name="" id="" placeholder='Search product...' className='outline-0 border-0 w-full placeholder-[#9c9c9c] placeholder:font-light text-[#1f1e1e]' />
                </form>
            </div>

            <div className='flex gap-4 md:hidden'>
                <div className='cursor-pointer md:hidden' onClick={toggleSearch}><IoIosSearch className='text-[#5a3a1b] text-[1.6rem]' /></div>
                <div className='cursor-pointer md:hidden' onClick={toggleMenu}><RxHamburgerMenu className='text-[#5a3a1b] text-[1.6rem]' /></div>
            </div>
        </header>
    );
};

export default Navbar;
