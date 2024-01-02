'use client'

import Image from 'next/image';
import Mascot from '../../public/logoimg.png'
import Logo from '../../public/logo_b.png'
import { EB_Garamond } from 'next/font/google';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap'

const font = EB_Garamond({
    subsets: ['latin'],
    weight: '400'
})


export default function Landing() {
    const [loading, setLoading] = useState(true)

    const tl = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.out'}})

    function onImageLoad() {
        setLoading(false)
    }

    useEffect(() => {
        const hasWindow = typeof window !== 'undefined';
        const width = hasWindow ? window.innerWidth : null;

        tl.fromTo('#mascot', {scale: 0}, {scale: 1, ease: "power2.out", duration: 1})
        if(width! > 768) {
            tl.fromTo('#landingText', {x: 70, opacity:0}, {x:0, opacity:1 , duration: 1}, '<')
        } else {
            tl.fromTo('#landingText', {y: 70, opacity:0}, {y:0, opacity:1 , duration: 1}, '<')
        }
        
    }, [tl])
    
    return (
        <div className='relative flex h-[40rem] lg:h-[45rem]'>
            {loading && 
                <div className=' mt-8 absolute bg-[#fffdf2] w-full h-[43rem]'></div>
            }
            <Image src='/bg-paper.jpg'
                alt='Pictures of the author' 
                className='mx-auto w-full object-cover absolute h-full opacity-100 transition-opacity ease-in delay-75'
                width={500}
                height={500}
                onLoad={onImageLoad}
                // style={{ display: loading ? "none" : "block" }}
                priority
            />
            <div className='w-full flex flex-col items-center mt-20 gap-6 md:flex-row md:items-center md:w-fit'>
                <Image src={Mascot}
                    id='mascot'
                    alt='Pictures of the author' 
                    className='w-60 object-contain brightness-100 mt-20 md:mt-0 md:ml-10 md:w-72 lg:w-96 lg:ml-20 xl:ml-32'
                    priority
                />
                <div id='landingText' className=' w-fit -mt-10 z-10 flex flex-col items-center md:items-start md:w-full'>
                    <div className=' w-64 pt-10 pb-5 md:w-80 lg:w-96'>
                        <Image src={Logo}
                            alt='Picture of the dooboo logo' 
                            className='mx-auto object-contain w-full brightness-165'
                            priority
                        />
                    </div>
                    <p className={`text-neutral-800 text-2xl md:ml-3 md:text-3xl lg:text-4xl ${font.className}`}>
                        Taste and Authenticity of Korea
                    </p>
                </div>
            </div>
            
            
        </div>
        
    )
}