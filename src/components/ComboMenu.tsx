import MenuTitle from './ui/MenuTitle';
import DoubleArrowIcon from './ui/icons/DoubleArrowIcon';

export default function ComboMenu() {
    
    return (
        <div  className='w-10/12 md:w-[35rem]'>
            <MenuTitle text='Combo Menu' />
            <div className='flex flex-col gap-7 items-center'>
                <h3 className='text-2xl md:text-xl text-neutral-500'>Soup Combo</h3>
                <div className={`flex w-full  gap-1 place-content-between items-center`}>
                    <div className='flex gap-2 items-center'>
                        <p className=' px-2 py-0.5 rounded-full text-white bg-orange-300'>A</p>
                        <p className=' font-semibold'>Soup</p>
                        <p>+</p>
                        <p className='flex flex-wrap'>
                            <p>Bulgogi&nbsp;</p> 
                            <p>/ Grilled Mackerel&nbsp;</p>
                        </p>
                    </div>
                    <p>$25.99</p>
                </div>
                <div className={`flex w-full  gap-1 place-content-between items-center`}>
                    <div className='flex gap-2 items-center'>
                        <p className=' px-2 py-0.5 rounded-full text-white bg-orange-300'>B</p>
                        <p className=' font-semibold'>Soup</p>
                        <p>+</p>
                        <p className='flex flex-wrap'>
                            <p>Pork Galbi&nbsp;</p> 
                            <p>/ Pork Belly&nbsp;</p> 
                            <p>/ Short Ribs&nbsp;</p>
                        </p>
                    </div>
                    <p>$40.99</p>
                </div>
                <h3 className='text-2xl md:text-xl text-neutral-500 mt-5'>Naengmyun Combo</h3>
                <div className={`flex w-full gap-1 place-content-between items-center`}>
                    <div className='flex gap-2 items-center'>
                        <p className=' px-2 py-0.5 rounded-full text-white bg-orange-300'>A</p>
                        <p className=' font-semibold'>Naengmyun</p>
                        <p>+</p>
                        <p>Bulgogi</p>
                    </div>
                    <p>$24.99</p>
                </div>
                <div className={`flex w-full gap-1 place-content-between items-center`}>
                    <div className='flex gap-2 items-center'>
                        <p className=' px-2 py-0.5 rounded-full text-white bg-orange-300'>B</p>
                        <p className=' font-semibold'>Naengmyun</p>
                        <p>+</p>
                        <p className='flex flex-wrap'>
                            <p>Pork Galbi&nbsp;</p> 
                            <p>/ Pork Belly&nbsp;</p> 
                            <p>/ Short Ribs&nbsp;</p>
                        </p>
                    </div>
                    <p>$39.99</p>
                </div>
                
                <div className='w-full mt-5 text-sm text-neutral-500 flex items-start md:items-center flex-col md:flex-row'>
                    <div className='flex items-center'>
                        <DoubleArrowIcon color='text-neutral-500'/>
                        <p>Soup Options&nbsp;</p>
                    </div>
                    <p className='flex flex-wrap ml-5 md:ml-0'>
                        <p>- Soft Tofu Soup&nbsp;</p>
                        <p>/ Kimchi Stew&nbsp;</p>
                        <p>/ Doenjang Stew&nbsp;</p>
                    </p>
                </div>
                <div className='w-full -mt-5 text-sm text-neutral-500 flex items-start md:items-center flex-col md:flex-row'>
                    <div className='flex items-center'>
                        <DoubleArrowIcon color='text-neutral-500'/>
                        <p>Naengmyun Options&nbsp;</p>
                    </div>
                    <p className='flex flex-wrap ml-5 md:ml-0'>
                        <p>- Mul Naengmyun&nbsp;</p>
                        <p>/ Bibim Naengmyun&nbsp;</p>
                    </p>
                </div>
            </div>
        </div>
    )
}