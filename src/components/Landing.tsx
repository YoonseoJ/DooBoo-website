import Image from 'next/image';
import logoImage from '../../public/logo.png'
import storeImage from '../../public/store.png'

export default function Landing() {
    
    return (
        <div className='relative'>
            <div className='h-[55rem] absolute bg-gradient-to-r from-50% from-dooboo-600 w-4/5'></div>
            <Image src={storeImage}
                alt='Pictures of the author' 
                className='mx-auto w-3/5 h-[55rem] object-cover mr-0'
                priority
            />
            <div className=' w-3/5 bg-stone-100 absolute h-56 top-1/3 bg-opacity-0'>
                <p className='absolute top-1/4 text-neutral-200 text-4xl left-36'>
                    DooBoo Contains the Taste and <br /> Authenticity of Korea
                </p>
            </div>
            
        </div>
        
    )
}