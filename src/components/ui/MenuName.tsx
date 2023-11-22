import DoubleArrowIcon from './icons/DoubleArrowIcon'

type Props = {
    eng: string
    kor?: string
    price: string
    isCol?: boolean
    addCheese?: boolean
}

export default function MenuName({eng, kor, price, isCol = false, addCheese = false}: Props) {
    
    return (
        <div className={`flex  w-full gap-1 place-content-between items-stretch ${
            isCol ? 'flex-col' : 'flex-row'
        }`}>
            <div className='flex md:gap-2 flex-col md:flex-row'>
                <p className=' font-semibold'>{eng}</p>
                <div className='flex gap-2 flex-wrap'>
                    {kor &&
                        <div className='flex gap-2'>
                            <p>|</p>
                            <p>{kor}</p>  
                        </div>
                    }
                    {addCheese &&
                        <p className='text-neutral-500 text-sm flex items-center'><DoubleArrowIcon color='text-red-300' />Add Cheese $3</p>
                    }
                </div>
                
            </div>
            
            <p>${price}</p>
        </div>
        
    )
}