type Props = {
    eng: string
    kor: string
    price: string
    isCol?: boolean
    addCheese?: boolean
}

export default function MenuName({eng, kor, price, isCol = false, addCheese = false}: Props) {
    
    return (
        <div className={`flex items-center w-full  gap-1 place-content-between items-stretch${
            isCol ? 'flex-col' : 'flex-row'
        }`}>
            <div className='flex gap-2'>
                <p className=' font-semibold'>{eng}</p>
                <p>|</p>
                <p>{kor}</p>
            </div>
            {addCheese &&
                <p className='text-neutral-500 text-sm'>Add Cheese $3</p>
            }
            <div className=' h-0.5 border-n bg-slate-500'/>
            <p>${price}</p>
        </div>
        
    )
}