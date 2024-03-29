import DoubleArrowIcon from './icons/DoubleArrowIcon'

type Props = {
    options: string[]
}

export default function MenuSpicyOptions({options, }: Props) {
    
    return (
        <ul className={`pl-2 mt-2 text-sm flex gap-1 items-center text-red-700 opacity-70 md:pl-5`}>
            <DoubleArrowIcon color='text-red-700' />
            {options.map((option, i, arr) => {
                if(i+1 !== arr.length) {
                    return (
                        <li key={option}>{option} &nbsp;/&nbsp; </li>
                    )
                } else {
                    return (
                        <li key={option}>{option}</li>
                    )
                }
            })}
        </ul>
    )
}