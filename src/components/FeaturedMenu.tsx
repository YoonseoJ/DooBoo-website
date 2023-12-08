import Image, { StaticImageData } from 'next/image'

type Props = {
    image: StaticImageData
}

export default function FeaturedMenu({image}: Props) {
    
    return (
        <div className=' md:p-1 bg-neutral-50'>
            <Image src={image} alt={`${image.src} image`} 
                className=' w-[50vw]  md:w-72 h-[45vw]  md:h-64 object-cover'/>
        </div>
    )
}