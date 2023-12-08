'use client'

import Image from 'next/image';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../../public/logo_w.png'

export default function Header() {
    
    return (
        <div className='fixed w-full bg-dooboo-700 px-4 pt-3 pb-4 flex place-content-between z-20 text-neutral-200 items-center md:px-8'>
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
            <nav className='space-x-6 md:space-x-8'>
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
        </div>
    )
}