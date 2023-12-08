import Image, { StaticImageData } from 'next/image'

type Props = {
    image?: StaticImageData
    eng: string
    kor?: string
    ingredients: string
}

export default function MenuDetail({image, eng, kor, ingredients}: Props) {
    
    return (
        <div>
            {image &&
                <Image src={image} alt={image.src} className=' w-full md:w-4/5 mx-auto brightness-95'/>
            }
            <div className=' w-fit mx-auto mt-5 md:mt-10'>
                <p className=' text-xl md:text-2xl'>{eng} | {kor}</p>
            </div>
        </div>
    )
}