import MenuTitle from './ui/MenuTitle';
import dumpleImage from '../../public/fried_dumpling.png'
import MenuCard from './MenuCard';

export default function DrinksMenu() {
    
    return (
        <div className='w-7/12 md:w-[20rem]'>
            <MenuTitle text='Drinks' />
            <ul>
                <li className='flex flex-col gap-7'>
                    {/* <MenuGrid /> */}
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Pop' 
                        kor='음료' 
                        price='2.50' 
                        options={[
                            'Pepsi',
                            '7 Up',
                            'Diet Pepsi',
                            'Brisk',
                            'Crush',
                            'Ginger Ale'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Bottles Water' 
                        kor='생수' 
                        price='2.50' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng={`Beer (341ml)`}
                        kor='맥주' 
                        price='5.99' 
                        options={[
                            'Cass',
                            'Kokanee'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng={`Soju (360ml)`}
                        kor='소주' 
                        price='16.99' 
                    />
                </li>
            </ul>
        </div>
    )
}