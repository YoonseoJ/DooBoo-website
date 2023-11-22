import MenuCard from './MenuCard';
import MenuTitle from './ui/MenuTitle';
import dumpleImage from '../../public/fried_dumpling.png'
import DoubleArrowIcon from './ui/icons/DoubleArrowIcon';


export default function MainMenu() {
    
    return (
        <div className='w-10/12 md:w-[30rem]'>
            <MenuTitle text='Main Menu' />
            <ul>
                <li className='flex flex-col gap-7'>
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
                        <ul className={`pl-2 text-neutral-500 mt-2 text-sm flex flex-col justify-between w-9/12 md:w-96 md:pl-5`}>
                            <li className='flex place-content-between flex-wrap'>
                                <div className='flex items-center w-52 '>
                                    <DoubleArrowIcon color='text-orange-200'/>
                                    <p>Mul NaengMyun</p>
                                </div>
                                <p className='text-sm text-red-700 w-28 opacity-60 flex items-center'><DoubleArrowIcon color='text-red-700' />Plain &nbsp;/&nbsp; Spicy</p>
                            </li>
                            <li className='flex place-content-between flex-wrap'>
                                <div className='flex items-center w-52 '>
                                    <DoubleArrowIcon color='text-orange-200'/>
                                    <p>{`Bibim NaengMyun (Spicy)`}</p>
                                </div>
                                <p className='text-sm text-red-700 w-28 opacity-60 flex items-center'><DoubleArrowIcon color='text-red-700' />Mild &nbsp;/&nbsp; Spicy</p>
                            </li>
                        </ul>
                        
                    </div>
                </li>
            </ul>
        </div>
    )
}