import Image from 'next/image';
import logoImage from '../../public/logo.png'
import storeImage from '../../public/store.png'
import Mascot from '../../public/dooboo.png'
import bg_paper from '../../public/bg-paper.jpg'
import Logo from '../../public/logo_b.png'
import { EB_Garamond } from 'next/font/google';

const font = EB_Garamond({
    subsets: ['latin'],
    weight: '400'
})

export default function Landing() {
    
    return (
        <div className='relative flex h-[40rem]'>
            <Image src={bg_paper}
                alt='Pictures of the author' 
                className='mx-auto w-full object-cover absolute h-full'
                priority
            />
            <div className='flex flex-col items-start mt-20 gap-6 md:flex-row md:items-center'>
                <Image src={Mascot}
                    alt='Pictures of the author' 
                    className='w-60 object-contain brightness-165 ml-8 mt-20 md:mt-0 md:ml-10 md:w-72 lg:w-96'
                    priority
                />
                <div className=' w-full -mt-10 z-10 ml-10 md:ml-0'>
                    <div className=' w-64 pt-10 pb-5 md:w-80 lg:w-96'>
                        <Image src={Logo}
                            alt='Picture of the dooboo logo' 
                            className='mx-auto object-contain w-full brightness-165'
                            priority
                        />
                    </div>
                    <p className={`text-neutral-800 text-2xl ml-3 md:text-3xl lg:text-4xl ${font.className}`}>
                        Taste and Authenticity of Korea
                    </p>
                </div>
            </div>
            
            
        </div>
        
    )
}