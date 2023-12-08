import Image from 'next/image';
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
        <div className='relative flex h-[40rem] lg:h-[45rem]'>
            <Image src='/bg-paper.jpg'
                alt='Pictures of the author' 
                className='mx-auto w-full object-cover absolute h-full'
                width={500}
                height={500}
                priority
            />
            <div className='w-full flex flex-col items-center mt-20 gap-6 md:flex-row md:items-center md:w-fit'>
                <Image src={Mascot}
                    alt='Pictures of the author' 
                    className='w-60 object-contain brightness-165 mt-20 md:mt-0 md:ml-10 md:w-72 lg:w-96 lg:ml-20 xl:ml-32'
                    priority
                />
                <div className=' w-fit -mt-10 z-10 flex flex-col items-center md:items-start md:w-full'>
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