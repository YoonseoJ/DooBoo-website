import MenuTitle from './ui/MenuTitle';
import dumpleImage from '../../public/menu/fried_dumpling.png'
import MenuCard from './MenuCard';

export default function DrinksMenu() {
    
    return (
        <div className='w-6/12 md:w-[20rem]'>
            <MenuTitle text='Drinks' />
            <ul>
                <li className='flex flex-col gap-7'>
                    <MenuCard 
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
                        openModalOption={false}
                    />
                    <MenuCard 
                        eng='Bottles Water' 
                        price='2.50' 
                        openModalOption={false}
                    />
                    <MenuCard 
                        eng={`Beer (341ml)`}
                        price='5.99' 
                        options={[
                            'Cass',
                            'Kokanee'
                        ]}
                        openModalOption={false}
                    />
                    <MenuCard 
                        eng={`Soju (360ml)`}
                        price='16.99' 
                        openModalOption={false}
                    />
                </li>
            </ul>
        </div>
    )
}