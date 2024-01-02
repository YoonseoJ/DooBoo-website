'use client'

import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

type Props = {
    image?: StaticImageData
    eng: string
    kor?: string
    ingredients: string
}

export default function MenuDetail({image, eng, kor, ingredients}: Props) {
    const [loading, setLoading] = useState(true)

    const tl = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.out'}})

    function onImageLoad() {
        setLoading(false)
    }

    useEffect(() => {
        tl.fromTo('#menuImage', {opacity: 0}, {opacity: 1, ease: "power2.out", duration: 0.5})
    }, [tl])
    
    return (
        <div>
            {image &&
                <div className=' flex items-center place-content-center'>
                    {loading && 
                        <p className=' absolute'>Loading image ...</p>
                    }
                    <Image 
                        src={image} 
                        alt={image.src} 
                        onLoad={onImageLoad}
                        id='menuImage'
                        className=' w-full md:w-4/5 mx-auto brightness-95'/>
                </div>
            }
            {!image && 
                <p className=' my-20 mx-auto text-center'>Image does not exist</p>
            }
            <div className=' w-fit flex mx-auto mt-5 md:mt-10 text-xl md:text-2xl gap-1'>
                <p className='font-semibold'>{eng}</p>
                {kor && 
                    <>
                        <p>|</p>
                        <p>{kor}</p>
                    </>
                }
            </div>
        </div>
    )
}