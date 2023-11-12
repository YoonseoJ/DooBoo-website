import Image from 'next/image'
import PageTitle from './ui/PageTitle'
import BibimImage from '../../public/bibimbob.png'
import Mascot from '../../public/mascot.png'
import Link from 'next/link'
import LocationIcon from './ui/icons/LocationIcon'
import PhoneIcon from './ui/icons/PhoneIcon'
import TimeIcon from './ui/icons/TimeIcon'
import InstagramIcon from './ui/icons/InstagramIcon'

export default function Contact() {
    return (
        <div className='py-20 flex flex-col items-center mb-5'>
            <PageTitle text='Dooboo logo'/>
            <div className='flex w-3/5 place-content-center bg-dooboo-600 bg-opacity-5 -top-16 p-10'>
                <div className='flex place-content-center '>
                    <Image src={Mascot} 
                        alt='Pictures of the author' 
                        className='mx-auto object-contain w-full'
                        priority
                    />
                    
                </div>
                <div className='w-2/4 ml-24 flex flex-col gap-7'>
                    <div>
                        <h3 className=' text-sm font-semibold pb-2'>ADDRESS</h3>
                        <Link href='https://maps.app.goo.gl/CaVK7mWji8XS7KAS8' target="_blank" className='flex gap-2'>
                            <LocationIcon />
                            6907 Kingway, Burnaby, BC, Canada V5E 1E5
                        </Link>
                    </div>
                    <div>
                        <h3 className=' text-sm font-semibold pb-2'>PHONE</h3>
                        <p className='flex gap-2'><PhoneIcon/>604.522.9969</p>
                    </div>
                    <div>
                        <h3 className=' text-sm font-semibold pb-2'>HOURS</h3>
                        <p className='flex gap-2'><TimeIcon/>11:00am - 10:30pm</p>
                        <p className='pl-1 italic mt-1'>Tuesday Closed</p>
                    </div>
                    <div>
                        <h3 className=' text-sm font-semibold pb-2'>FOLLOW US</h3>
                        <Link href='http://www.instagram.com/dooboorestaurant'><InstagramIcon/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}