type Props = {
    text: string
    color?: 'light' | 'dark'
}

export default function PageTitle({text, color = 'dark'}: Props) {
    
    return (
        <h1 className={`text-5xl text-center pt-10 pb-20 uppercase 
            ${color === 'light' ? 'text-neutral-200' : 'text-neutral-900'}
        `}>{text}</h1>
    )
}