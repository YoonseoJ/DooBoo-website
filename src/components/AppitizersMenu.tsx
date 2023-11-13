import MenuCard from './MenuCard';
import MenuGrid from './MenuGrid';
import MenuName from './ui/MenuName';
import dumpleImage from '../../public/fried_dumpling.png'
import MenuTitle from './ui/MenuTitle';

export default function AppitizersMenu() {
    
    return (
        <div className='w-2/4'>
            <MenuTitle text={'Appitizers'} />
            <ul>
                <li className='flex flex-col gap-7'>
                    {/* <MenuGrid /> */}
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Fried Dumplings' 
                        kor='군만두' 
                        price='10.99' 
                        options={[
                            `Deep Fried Dumplings (Vegitable) 7pc`, 
                            `Deep Fried Mini Dumplings (Pork) 10pc`,
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Fried Clams' 
                        kor='조갯살튀김' 
                        price='10.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
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
                        image={dumpleImage} 
                        eng='Tofu Salad with Sesame Dressing' 
                        kor='두부샐러드' 
                        price='11.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Deep Fried Shrimp Salad' 
                        kor='새우샐러드' 
                        price='12.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
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