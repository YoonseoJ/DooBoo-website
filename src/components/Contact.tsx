'use client'

import Image from 'next/image'
import Mascot from '../../public/dooboo.png'
import Link from 'next/link'
import LocationIcon from './ui/icons/LocationIcon'
import PhoneIcon from './ui/icons/PhoneIcon'
import TimeIcon from './ui/icons/TimeIcon'
import InstagramIcon from './ui/icons/InstagramIcon'
import Logo from '../../public/logo_b.png'
import Deco from '../../public/deco.png'
import storeImage from '../../public/store.png'

export default function Contact() {
    return (
        <div className='md:pb-20 flex flex-col items-center md:mb-5'>
            <div>
                <Image 
                    src={Deco} 
                    alt='Picture of the dooboo logo' 
                    className='mx-auto object-contain w-5 md:w-7 brightness-165'
                />
            </div>
            <div className=' w-40 md:w-52 pt-10 pb-20'>
                <Image src={Logo}
                    alt='Picture of the dooboo logo' 
                    className='mx-auto object-contain w-full brightness-165'
                    priority
                />
            </div>

            <div className='flex flex-col md:flex-row md:w-11/12 place-content-center bg-dooboo-400/[.3] -top-16 pt-10 md:py-10 md:pr-10 lg:w-[50rem]'>
                <div className=' hidden md:block h-4/4 place-content-center w-2/3'>
                    <Image src={storeImage} 
                        alt='Picture of the mascot' 
                        className='mx-auto h-full object-cover w-full'
                        priority
                    />
                </div>
                <div className=' md:w-2/3 mx-7 md:ml-10 md:mr-0 flex flex-col gap-7'>
                    <div>
                        <h3 className=' text-sm font-semibold pb-2'>ADDRESS</h3>
                        <Link href='https://maps.app.goo.gl/CaVK7mWji8XS7KAS8' target="_blank" className='flex gap-2'>
                            <LocationIcon />
                            6907 Kingway, Burnaby, BC, Canada V5E 1E5
                        </Link>
                    </div>
                    <div>
                        <h3 className=' text-sm font-semibold pb-2'>PHONE</h3>
                        <div className='flex gap-2'><PhoneIcon/><p>604.522.9969</p></div>
                    </div>
                    <div>
                        <h3 className=' text-sm font-semibold pb-2'>HOURS</h3>
                        <div className='flex gap-2'><TimeIcon/><p className=' font-semibold'>Mon,Wed-Sun</p> <p>11:00am - 10:30pm</p></div>
                        <div className='pl-8 italic mt-1 flex gap-1'><p className=' font-semibold'>Tuesday</p> Closed</div>
                    </div>
                    <div className='w-fit'>
                        <h3 className=' text-sm font-semibold pb-2'>FOLLOW US</h3>
                        <Link href='http://www.instagram.com/dooboorestaurant'><InstagramIcon/></Link>
                    </div>
                </div>
                <div className=' block md:hidden mt-10 h-[90vw] place-content-center w-full'>
                    <Image src={storeImage} 
                        alt='Picture of the mascot' 
                        className='mx-auto h-full object-cover w-full'
                        priority
                    />
                </div>
            </div>
        </div>
    )
}