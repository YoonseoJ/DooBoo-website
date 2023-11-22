type Props = {
    text: string
}

export default function MenuTitle({text}: Props) {
    
    return (
        <h1 className=' text-2xl text-center py-10 font-semibold md:text-4xl'>{text}</h1>
    )
}