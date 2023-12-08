import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
    image: StaticImageData
    name: string
    url: string
}

export default function OnlineOrderCard({image, name, url}: Props) {
    
    return (
        <Link href={url} target='blank' className=' flex flex-col items-center gap-3 w-20 md:w-28 lg:w-36'>
            <Image src={image} alt={`${name} logo image`} className=' h-16 md:h-28 lg:h-32 w-auto rounded-lg'/>
            <p className=' text-md font-semibold'>{name}</p>
        </Link>
    )
}