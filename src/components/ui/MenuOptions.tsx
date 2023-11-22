import DoubleArrowIcon from './icons/DoubleArrowIcon'

type Props = {
    options: string[]
    isSpicy?: boolean
}

export default function MenuOptions({options, isSpicy = false}: Props) {
    
    return (
        <div>
            {options.length <= 5 &&
                <ul className={`pl-5 text-neutral-500 mt-2 text-sm flex gap-x-1 flex-wrap`}>
                    {options.map((option) => (
                        <li key={option} className=' min-w-fit w-40 flex items-center'><DoubleArrowIcon color='text-orange-200'/>{option}</li>
                    ))}
                </ul>
            }
            {options.length > 5 &&
                <ul className={`pl-5 text-neutral-500 mt-2 text-sm flex gap-x-1 flex-wrap`}>
                    {options.map((option) => (
                        <li key={option} className=' w-32 flex items-center'><DoubleArrowIcon color='text-orange-200'/>{option}</li>
                    ))}
                </ul>
            }
            
        </div>
        
    )
}