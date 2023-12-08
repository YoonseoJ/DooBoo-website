import PageTitle from './ui/PageTitle'
import { useState } from 'react'
import AppitizersMenu from './AppitizersMenu'
import MainMenu from './MainMenu'
import SpecialMenu from './SpecialMenu'
import ComboMenu from './ComboMenu'
import DrinksMenu from './DrinksMenu'
import Image from 'next/image'
import Deco from '../../public/deco.png'

const MenuList = [
    {name: 'appitizers', component: <AppitizersMenu/>},
    {name: 'main', component: <MainMenu/>},
    {name: 'special', component: <SpecialMenu/>},
    {name: 'combo', component: <ComboMenu/>},
    {name: 'drinks', component: <DrinksMenu/>},
]

export default function Menu() {
    const [selected, setSelected] = useState('main')
    
    return (
        <div className='w-full mx-auto mb-28 lg:w-[55rem]'>
             <div>
                <Image 
                    src={Deco} 
                    alt='Picture of the dooboo logo' 
                    className='mx-auto object-contain w-5 brightness-165 md:w-7'
                />
            </div>
            <PageTitle text='menu' />
            <div className='flex place-content-evenly'>
                {MenuList.map((menu) => (
                    <button
                        key={menu.name} 
                        onClick={() => {setSelected(menu.name)}}
                        className={`cursor-pointer uppercase hover:text-dooboo-400 border-b-2  
                                ${menu.name === selected 
                                    ? 'border-dooboo-400 text-dooboo-400' 
                                    : 'border-white'}
                            `}
                    >
                        {menu.name}
                    </button>
                ))}
            </div>
            
            <div className='flex flex-col mx-auto items-center mt-0'>
                {MenuList.map((menu) => {
                    if (menu.name === selected) {
                        return (
                            <div className='w-fit flex justify-center' key={menu.name}>{menu.component}</div>
                        )
                    }
                })}
            </div>
            <div className=' flex justify-center items-center gap-1 text-sm mt-16 text-red-700 opacity-50'>
                <p className='h-fit  pt-1.5'>*</p>
                <p className='h-fit'>Click menu to see Image</p>
            </div>
            
        </div>
        
    )
}