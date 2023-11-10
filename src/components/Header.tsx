'use client'

import { Link, animateScroll as scroll } from "react-scroll";
// import Link from 'next/link'

export default function Header() {
    
    return (
        <div className='fixed w-full bg-dooboo-500 px-8 pt-3 pb-4 flex place-content-between z-10 text-neutral-200 items-center'>
            <Link 
                activeClass="active"
                to='landing' href="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <p className=' text-2xl '>DooBoo</p>
            </Link>
            <nav className=' space-x-8'>
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