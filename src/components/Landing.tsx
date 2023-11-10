import Image from 'next/image';
import logoImage from '../../public/logo.png'
import storeImage from '../../public/store.png'

export default function Landing() {
    
    return (
        <div className='relative'>
            <Image src={storeImage}
                alt='Pictures of the author' 
                className='mx-auto w-screen h-[60rem] object-cover brightness-80'
                priority
            />
            <div className=' w-3/5 bg-neutral-800 absolute h-56 top-1/3'>
                <p className='absolute top-1/4 text-neutral-400 text-4xl left-36'>
                    DooBoo Contains the Taste and <br /> Authenticity of Korea
                </p>
            </div>
            
        </div>
        
    )
}