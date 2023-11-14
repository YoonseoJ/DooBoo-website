import DoubleArrowIcon from './icons/DoubleArrowIcon'

type Props = {
    options: string[]
}

export default function MenuSpicyOptions({options, }: Props) {
    
    return (
        <ul className={`pl-5 mt-2 text-sm flex gap-1 items-center text-red-700 opacity-60`}>
            <DoubleArrowIcon color='text-red-700' />
            {options.map((option, i, arr) => {
                if(i+1 !== arr.length) {
                    return (
                        <li>{option} &nbsp;/&nbsp; </li>
                    )
                } else {
                    return (
                        <li>{option}</li>
                    )
                }
            })}
        </ul>
    )
}