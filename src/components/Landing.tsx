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
        <div className='relative flex h-[45rem] max-lg:h-[35rem]'>
            <Image src={bg_paper}
                alt='Pictures of the author' 
                className='mx-auto w-full object-cover absolute h-[45rem] max-lg:h-[35rem]'
                priority
            />
            <div className='flex items-center mt-16 gap-10 max-lg:gap-6'>
                <Image src={Mascot}
                    alt='Pictures of the author' 
                    className='w-96 object-contain brightness-165 ml-32 max-xl:w-72 max-xl:ml-12 max-lg:w-52'
                    priority
                />
                <div className=' w-4/6 bg-stone-100 bg-opacity-0 -mt-10 z-10'>
                    <div className=' w-[25rem] pt-10 pb-5 max-xl:w-[20rem] max-lg:w-64'>
                        <Image src={Logo}
                            alt='Picture of the dooboo logo' 
                            className='mx-auto object-contain w-full brightness-165'
                            priority
                        />
                    </div>
                    <p className={`text-neutral-800 text-5xl ml-3 max-xl:text-4xl max-lg:text-3xl ${font.className}`}>
                        Taste and Authenticity of Korea
                    </p>
                </div>
            </div>
            
            
        </div>
        
    )
}