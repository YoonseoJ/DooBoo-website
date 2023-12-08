import MenuCard from './MenuCard';
import MenuTitle from './ui/MenuTitle';
import Dumpling from '../../public/menu/fried_dumpling.png'
import FriedClams from '../../public/menu/fried_clams.png'
import ChickenSalad from '../../public/menu/chicken_salad.png'
import TofuSalad from '../../public/menu/tofu_salad.png'
import ShrimpSalad from '../../public/menu/shrimp_salad.png'
import RiceCake from '../../public/menu/rice_cake.png'

export default function AppitizersMenu() {
    
    return (
        <div className='w-10/12 md:w-[30rem]'>
            <MenuTitle text='Appitizers' />
            <ul>
                <li className='flex flex-col gap-7'>
                    <MenuCard 
                        image={Dumpling} 
                        eng='Fried Dumplings' 
                        kor='군만두' 
                        price='10.99' 
                        options={[
                            `Deep Fried Dumplings (Vegitable) 7pc`, 
                            `Deep Fried Mini Dumplings (Pork) 10pc`,
                        ]}
                    />
                    <MenuCard 
                        image={FriedClams} 
                        eng='Fried Clams' 
                        kor='조갯살튀김' 
                        price='10.99' 
                    />
                    <MenuCard 
                        image={ChickenSalad} 
                        eng='Chicken Salad' 
                        kor='치킨샐러드' 
                        price='13.99' 
                        options={[
                            `Deep Fried ($12.99)`, 
                            `Sweet & Spicy`,
                            `Honey Garlic`,
                            `Spicy Soy`,

                        ]}
                    />
                    <MenuCard 
                        image={TofuSalad} 
                        eng='Tofu Salad with Sesame Dressing' 
                        kor='두부샐러드' 
                        price='11.99' 
                    />
                    <MenuCard 
                        image={ShrimpSalad} 
                        eng='Deep Fried Shrimp Salad' 
                        kor='새우샐러드' 
                        price='12.99' 
                    />
                    <MenuCard 
                        image={RiceCake} 
                        eng='Stir Fried Rice Cakes' 
                        kor='떡볶이' 
                        price='10.99' 
                        spicyOptions={[
                            'White',
                            'Mild',
                            'Spicy'
                        ]}
                        options={[
                            `Rice Cake`, 
                            `Rice Cake with Dumpling`,
                        ]}
                        addCheese={true}
                    />
                </li>
            </ul>
        </div>
    )
}