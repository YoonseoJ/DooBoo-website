import PageTitle from './ui/PageTitle'
import { useState } from 'react'
import AppitizersMenu from './AppitizersMenu'
import MainMenu from './MainMenu'
import SpecialMenu from './SpecialMenu'
import ComboMenu from './ComboMenu'
import DrinksMenu from './DrinksMenu'

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
        <div className='w-240 mx-auto my-20 mb-40'>
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
                <div className='flex flex-col mx-auto items-center mt-10'>
                {MenuList.map((menu) => {
                    if (menu.name === selected) {
                        return (
                            <>{menu.component}</>
                        )
                    }
                })}
            </div>
            
        </div>
        
    )
}