import MenuTitle from './ui/MenuTitle';
import MenuCard from './MenuCard';
import Japchae from '../../public/menu/japchae.png'
import Squid from '../../public/menu/squid.png'
import SpecialRiceCake from '../../public/menu/special_ricecake.png'
import Pancake from '../../public/menu/pancake.png'
import Bulgogi from '../../public/menu/bulgogi.png'
import PorkGalbi from '../../public/menu/porkgalbi.png'
import LA from '../../public/menu/la.png'
import PorkBelly from '../../public/menu/pork_belly.png'
import CodCheeks from '../../public/menu/cod_cheeks.png'
import Dakgabi from '../../public/menu/dakgalbi.png'

export default function SpecialMenu() {
    
    return (
        <div className='w-10/12 md:w-[30rem]'>
            <MenuTitle text='Special Menu' />
            <ul>
                <li className='flex flex-col gap-7'>
                    <MenuCard 
                        image={Japchae} 
                        eng='Japchae' 
                        kor='잡채' 
                        price='22.99' 
                        spicyOptions={[
                            'Yam Noodle',
                            'Udon'
                        ]}
                        options={[
                            'Beef',
                            'Chicken',
                            'Spicy Chicken',
                            'Pork',
                            'Spicy Pork',
                            'Seafood',
                            'Vegetable'
                        ]}
                    />
                    <MenuCard 
                        image={Squid} 
                        eng='Stir Fried Squid' 
                        kor='오징어 볶음' 
                        price='23.99' 
                        spicyOptions={[
                            'Mild',
                            'Spicy'
                        ]}
                    />
                    <MenuCard 
                        image={SpecialRiceCake} 
                        eng='Special Rice Cake' 
                        kor='궁중 떡볶이' 
                        price='22.99' 
                    />
                    <MenuCard 
                        image={Pancake} 
                        eng='Pancake' 
                        kor='파전' 
                        price='23.99' 
                        addCheese={true}
                        options={[
                            'Seafood',
                            'Vegetable'
                        ]}
                    />
                    <MenuCard 
                        image={Bulgogi} 
                        eng='Bulgogi' 
                        kor='석쇠불고기' 
                        price='19.99' 
                        options={[
                            'Beef',
                            'Spicy Chicken',
                            'Chicken',
                            'Spicy Pork',
                            'Pork',
                        ]}
                    />
                    <MenuCard 
                        image={PorkGalbi} 
                        eng='Pork Galbi' 
                        kor='양념 돼지갈비' 
                        price='27.99' 
                    />
                    <MenuCard 
                        image={LA} 
                        eng='Short Ribs' 
                        kor='LA갈비 직화구이' 
                        price='27.99' 
                    />
                    <MenuCard 
                        image={PorkBelly} 
                        eng='Pork Belly with Fried Garlic' 
                        kor='마늘삼겹살 석쇠구이' 
                        price='27.99' 
                    />
                    <MenuCard 
                        image={CodCheeks} 
                        eng='Spicy Steamed Cod Cheeks' 
                        kor='대구뽈찜' 
                        price='42.99' 
                        spicyOptions={[
                            'Mild',
                            'Spicy'
                        ]}
                    />
                    <MenuCard 
                        image={Dakgabi} 
                        eng='Spicy stir-fried Chicken with Cheese' 
                        kor='치즈닭갈비' 
                        price='42.99' 
                        spicyOptions={[
                            'Mild',
                            'Spicy'
                        ]}
                    />
                </li>
            </ul>
            <div className=' flex justify-center items-center gap-1 text-sm mt-16 text-red-700 opacity-50'>
                <p className='h-fit  pt-1.5'>*</p>
                <p className='h-fit'>Click menu to see Image</p>
            </div>
        </div>
    )
}