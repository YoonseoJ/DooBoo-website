import Image, { StaticImageData } from 'next/image'
import MenuName from './ui/MenuName'

type Props = {
    image: StaticImageData
    eng: string
    kor: string
    price: string
}

export default function MenuCard({image, eng, kor, price}: Props) {
    
    return (
        <div className='w-72 flex flex-col items-center shadow-md bg-white p-4'>
            {/* Menu Image */}
            <Image src={image} 
                alt='Image of ' 
                priority
            />
            {/* Menu Name */}
            <MenuName eng={eng} kor={kor} price={price} isCol={true}/>
            <div>
                <p>options</p>
            </div>
        </div>
    )
}