import MenuTitle from './ui/MenuTitle';
import DoubleArrowIcon from './ui/icons/DoubleArrowIcon';

export default function ComboMenu() {
    
    return (
        <div  className='w-3/5'>
            <MenuTitle text='Combo Menu' />
            <div className='flex flex-col gap-7 items-center'>
                <h3 className='text-xl text-neutral-500'>Soup Combo</h3>
                <div className={`flex w-full  gap-1 place-content-between items-center`}>
                    <div className='flex gap-2 items-center'>
                        <p className=' px-2 py-0.5 rounded-full text-white bg-orange-300'>A</p>
                        <p className=' font-semibold'>Soup</p>
                        <p>+</p>
                        <p>Bulgogi / Grilled Mackerel</p>
                    </div>
                    <p>$25.99</p>
                </div>
                <div className={`flex w-full  gap-1 place-content-between items-center`}>
                    <div className='flex gap-2 items-center'>
                        <p className=' px-2 py-0.5 rounded-full text-white bg-orange-300'>B</p>
                        <p className=' font-semibold'>Soup</p>
                        <p>+</p>
                        <p>Pork Galbi / Pork Belly / Short Ribs</p>
                    </div>
                    <p>$40.99</p>
                </div>
                <h3 className='text-xl text-neutral-500 mt-5'>Naengmyun Combo</h3>
                <div className={`flex w-full  gap-1 place-content-between items-center`}>
                    <div className='flex gap-2 items-center'>
                        <p className=' px-2 py-0.5 rounded-full text-white bg-orange-300'>A</p>
                        <p className=' font-semibold'>Naengmyun</p>
                        <p>+</p>
                        <p>Bulgogi</p>
                    </div>
                    <p>$24.99</p>
                </div>
                <div className={`flex w-full  gap-1 place-content-between items-center`}>
                    <div className='flex gap-2'>
                        <p className=' px-2 py-0.5 rounded-full text-white bg-orange-300'>B</p>
                        <p className=' font-semibold'>Naengmyun</p>
                        <p>+</p>
                        <p>Pork Galbi / Pork Belly / Short Ribs</p>
                    </div>
                    <p>$39.99</p>
                </div>
                
                <p className='w-full mt-5 text-sm text-neutral-500 flex items-center'><DoubleArrowIcon color='text-neutral-500'/>Soup Options - Soft Tofu Soup / Kimchi Stew / Doenjang Stew</p>
                <p className='w-full -mt-5 text-sm text-neutral-500 flex items-center'><DoubleArrowIcon color='text-neutral-500'/>Naengmyun Options - Mul Naengmyun / Bibim Naengmyun</p>
            </div>
        </div>
    )
}