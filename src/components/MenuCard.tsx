import Image, { StaticImageData } from 'next/image'
import MenuName from './ui/MenuName'
import MenuOptions from './ui/MenuOptions'
import MenuSpicyOptions from './ui/MenuSpicyOptions'

type Props = {
    image: StaticImageData
    eng: string
    kor?: string
    price: string
    options?: string[]
    spicyOptions?: string[]
    addCheese?: boolean
}

export default function MenuCard({image, eng, kor, price, options, spicyOptions, addCheese = false}: Props) {
    
    return (
        <div className='w-full flex items-center'>
            <div className=' w-full'>
                {/* Menu Name */}
                <MenuName eng={eng} kor={kor} price={price} addCheese={addCheese}/>
                {spicyOptions && 
                    <MenuSpicyOptions options={spicyOptions} />
                }
                {options && 
                    <MenuOptions options={options} />
                }
                
            </div>
            

            {/* Menu Image */}
            {/* <Image src={image} 
                alt='Image of food' 
                className=' w-72 brightness-95'
                priority
            /> */}
        </div>
    )
}