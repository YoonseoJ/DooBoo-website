type Props = {
    options: string[]
}

export default function MenuSpicyOptions({options, }: Props) {
    
    return (
        <ul className={`pl-5 mt-2 text-sm flex gap-1 text-red-700 opacity-60`}>
            {options.map((option) => (
                <li>{option}</li>
            ))}
        </ul>
    )
}