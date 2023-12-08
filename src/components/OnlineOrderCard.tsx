import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
    image: StaticImageData
    name: string
    url: string
}

export default function OnlineOrderCard({image, name, url}: Props) {
    
    return (
        <Link href={url} target='blank' className=' flex flex-col items-center gap-5'>
            <Image src={image} alt={`${name} logo image`} className=' h-24 md:h-32 w-auto rounded-lg'/>
            <p>{name}</p>
        </Link>
    )
}