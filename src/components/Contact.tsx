import Image from 'next/image'
import PageTitle from './ui/PageTitle'
import BibimImage from '../../public/bibimbob.png'
import Mascot from '../../public/mascot.png'

export default function Contact() {
    
    return (
        <div className='py-20 bg-dooboo-100 flex flex-col items-center'>
            <PageTitle text='contact' />
            <div className='flex w-5/6 place-content-center'>
                <div className='w-2/6 '>
                    <Image src={Mascot} 
                        alt='Pictures of the author' 
                        className='mx-auto w-full object-cover'
                        priority
                    />
                    
                </div>
                <div className='w-2/5 ml-24 mt-4'>
                    <p>Address - 6907 Kingway, Burnaby, BC, Canada V5E 1E5</p>
                </div>
            </div>
        </div>
    )
}