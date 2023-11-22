import MenuTitle from './ui/MenuTitle';
import dumpleImage from '../../public/fried_dumpling.png'
import MenuCard from './MenuCard';

export default function DrinksMenu() {
    
    return (
        <div className='w-6/12 md:w-[20rem]'>
            <MenuTitle text='Drinks' />
            <ul>
                <li className='flex flex-col gap-7'>
                    <MenuCard 
                        image={dumpleImage} 
                        eng='Pop' 
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
                        price='2.50' 
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng={`Beer (341ml)`}
                        price='5.99' 
                        options={[
                            'Cass',
                            'Kokanee'
                        ]}
                    />
                    <MenuCard 
                        image={dumpleImage} 
                        eng={`Soju (360ml)`}
                        price='16.99' 
                    />
                </li>
            </ul>
        </div>
    )
}