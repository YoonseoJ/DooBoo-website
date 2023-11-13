type Props = {
    options: string[]
    isSpicy?: boolean
}

export default function MenuOptions({options, isSpicy = false}: Props) {
    
    return (
        <div>
            {/* {options.length <= 3 && 
                <ul className={`pl-5 text-neutral-500 mt-2 text-sm flex flex-col gap-1`}>
                    {options.map((option) => (
                        <li className=''>{option}</li>
                    ))}
                </ul>
            } */}
            {options.length <= 5 &&
                <ul className={`pl-5 text-neutral-500 mt-2 text-sm flex gap-x-1 flex-wrap`}>
                    {options.map((option) => (
                        <li className=' min-w-fit w-40'>{option}</li>
                    ))}
                </ul>
            }
            {options.length > 5 &&
                <ul className={`pl-5 text-neutral-500 mt-2 text-sm flex gap-x-1 flex-wrap`}>
                    {options.map((option) => (
                        <li className=' w-32'>{option}</li>
                    ))}
                </ul>
            }
            
        </div>
        
    )
}