import MenuTitle from './ui/MenuTitle';
import dumpleImage from '../../public/fried_dumpling.png'
import MenuCard from './MenuCard';


export default function SpecialMenu() {
    
    return (
        <div className='w-10/12 md:w-[30rem]'>
            <MenuTitle text='Special Menu' />
            <ul>
                <li className='flex flex-col gap-7'>
                    <MenuCard 
                        image={dumpleImage} 
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
                        image={dumpleImage} 
                        eng='Stir Fried Squid' 
                        kor='오징어 볶음' 
                        price='23.99' 
                        spicyOptions={[
                            'Mild',
                            'Spicy'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Special Rice Cake' 
                        kor='궁중 떡볶이' 
                        price='22.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
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
                        image={dumpleImage} 
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
                        image={dumpleImage} 
                        eng='Pork Galbi' 
                        kor='양념 돼지갈비' 
                        price='27.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Short Ribs' 
                        kor='LA갈비 직화구이' 
                        price='27.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Pork Belly with Fried Garlic' 
                        kor='마늘삼겹살 석쇠구이' 
                        price='27.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Spicy Steamed Cod Cheeks' 
                        kor='대구뽈찜' 
                        price='42.99' 
                        spicyOptions={[
                            'Mild',
                            'Spicy'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
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
        </div>
    )
}