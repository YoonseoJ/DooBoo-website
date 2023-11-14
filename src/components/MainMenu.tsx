import MenuCard from './MenuCard';
import MenuTitle from './ui/MenuTitle';
import dumpleImage from '../../public/fried_dumpling.png'


export default function MainMenu() {
    
    return (
        <div className='w-2/4'>
            <MenuTitle text='Main Menu' />
            <ul>
                <li className='flex flex-col gap-7'>
                    {/* <MenuGrid /> */}
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Soft Tofu Soup' 
                        kor='순두부찌개' 
                        price='15.99' 
                        spicyOptions={[
                            'White',
                            'Mild',
                            'Regular',
                            'Spicy',
                            'Extra Spicy'
                        ]}
                        options={[
                            'Beef',
                            'Pork',
                            'Seafood',
                            'Mixed',
                            'Mushroom',
                            'Pork with Kimchi',
                            'Dumplings'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Kimchi Stew' 
                        kor='김치찌개' 
                        price='15.99'
                        spicyOptions={[
                            'Mild',
                            'Spicy'
                        ]} 
                        options={[
                            'Beef',
                            'Pork',
                            'Seafood',
                            'Tuna',
                            'Spam',
                            'Mushroom'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng={`Doenjang Stew (Korean Bean Paste)`}
                        kor='된장찌개' 
                        price='15.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Stone Bibimbab' 
                        kor='돌솥비빔밥' 
                        price='16.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Hot Pot Rice with Mayo' 
                        kor='마요돌솥밥' 
                        price='16.99' 
                        options={[
                            'Chicken', 
                            'Spicy Chicken',
                            'Spam',
                            'Tuna',
                            'Pork',
                            'Spicy Pork',
                            'Beef',
                            'Seafood',
                            'Mushroom'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Kimchi Fried Rice' 
                        kor='김치볶음밥' 
                        price='15.99' 
                        options={[
                            'Pork',
                            'Tuna',
                            'Beef',
                            'Mushroom',
                            'Spam'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Hot Pot Rice with Fish Row' 
                        kor='알밥' 
                        price='16.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Spicy Hot Pot Rice' 
                        kor='매운돌솥밥' 
                        price='17.99' 
                        options={[
                            'Stir-fried Chicken',
                            'Stir-fried Seafood'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng={`Bibimbab (with Stone Pot Rice)`} 
                        kor='비빔밥' 
                        price='15.99' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng={`Bibim Noodle (Cold)`} 
                        kor='비빔국수' 
                        price='14.99' 
                        spicyOptions={[
                            'Mild',
                            'Spicy'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng={`NaengMyun (Cold Buckwheat Noodle)`} 
                        kor='냉면' 
                        price='14.99' 
                    />
                    <div className=' -mt-5'>
                        <ul className={`pl-5 text-neutral-500 mt-2 text-sm flex flex-col flex-wrap w-80`}>
                            <li className='flex place-content-between '>
                                <p>Mul NaengMyun</p>
                                <p className='text-sm text-red-700 opacity-60'>Plain &nbsp;/&nbsp; Spicy</p>
                            </li>
                            <li className='flex place-content-between '>
                                <p>{`Bibim NaengMyun (Spicy)`}</p>
                                <p className='text-sm text-red-700 opacity-60'>Mild &nbsp;/&nbsp; Spicy</p>
                            </li>
                        </ul>
                        
                    </div>
                </li>
            </ul>
        </div>
    )
}