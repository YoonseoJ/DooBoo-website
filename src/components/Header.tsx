'use client'

import Image from 'next/image';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../../public/logo_w.png'
import HeaderNavigationIcon from './ui/icons/HeaderNavigationIcon';
import { useState } from 'react';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const handleNavigationOpen = () => {
        setNavOpen(!navOpen)
    }
    
    return (
        <div className='fixed w-full bg-dooboo-700 px-4 pt-3 pb-4 flex place-content-between z-50 text-neutral-200 items-center md:px-8'>
            <Link 
                activeClass="active"
                to='landing' href="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <Image src={Logo}
                    alt='Picture of the dooboo logo' 
                    className='mx-auto object-contain w-24 brightness-165 md:w-32'
                    priority
                />
            </Link>
            <div className=' md:hidden -mb-1 z-50' onClick={handleNavigationOpen}>
                <HeaderNavigationIcon />
            </div>
            <nav className=' hidden md:block space-x-6 md:space-x-8'>
                <Link 
                    activeClass="active"
                    to='menu' href="#menu"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Menu</Link>
                <Link 
                    activeClass="active"
                    to='onlineorder' href="#onlineorder"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Online Order</Link>
                <Link 
                    activeClass="active"
                    to='about' href="#about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link>
                <Link 
                    activeClass="active"
                    to='contact' href="#contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link>
            </nav>
            {navOpen && 
                <nav className='md:hidden flex flex-col text-xl top-0 pt-20 px-5 gap-4 
                                fixed h-screen right-0 z-40 bg-dooboo-700'>
                    <Link 
                        activeClass="active"
                        to='menu' href="#menu"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleNavigationOpen}
                    >Menu</Link>
                    <Link 
                        activeClass="active"
                        to='onlineorder' href="#onlineorder"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleNavigationOpen}
                    >Online Order</Link>
                    <Link 
                        activeClass="active"
                        to='about' href="#about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleNavigationOpen}
                    >About</Link>
                    <Link 
                        activeClass="active"
                        to='contact' href="#contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleNavigationOpen}
                    >Contact</Link>
                </nav>
            }
            
        </div>
    )
}