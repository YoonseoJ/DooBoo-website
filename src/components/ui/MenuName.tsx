type Props = {
    eng: string
    kor: string
    price: string
    isCol?: boolean
}

export default function MenuName({eng, kor, price, isCol = false}: Props) {
    
    return (
        <div className={`flex items-center w-fit gap-1 ${
            isCol ? 'flex-col' : 'flex-row'
        }`}>
            <div className='flex gap-2 border-b border-neutral-700 w-fit'>
                <p>{eng}</p>
                <p>|</p>
                <p>{kor}</p>
            </div>
            <p>${price}</p>
        </div>
        
    )
}