import Image, { StaticImageData } from 'next/image'
import MenuName from './ui/MenuName'
import MenuOptions from './ui/MenuOptions'
import MenuSpicyOptions from './ui/MenuSpicyOptions'
import { useState } from 'react'
import ModalPortal from './ui/ModalPortal'
import MenuModal from './MenuModal'
import MenuDetail from './MenuDetail'

type Props = {
    image?: StaticImageData
    eng: string
    kor?: string
    price: string
    options?: string[]
    spicyOptions?: string[]
    addCheese?: boolean
}

export default function MenuCard({image, eng, kor, price, options, spicyOptions, addCheese = false}: Props) {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenMenu = () => {
        setOpenModal(true)
    }
    
    return (
        <div className='w-full flex items-center cursor-pointer'>
            <div className=' w-full' onClick={handleOpenMenu}>
                <MenuName eng={eng} kor={kor} price={price} addCheese={addCheese}/>
                {spicyOptions && 
                    <MenuSpicyOptions options={spicyOptions} />
                }
                {options && 
                    <MenuOptions options={options} />
                }
            </div>
            

            {openModal && 
                <ModalPortal>
                    <MenuModal onClose={() => setOpenModal(false)}>
                        <MenuDetail image={image} eng={eng} kor={kor} ingredients=''/>
                    </MenuModal>
                </ModalPortal>
            }
        </div>
    )
}