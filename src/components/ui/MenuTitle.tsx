type Props = {
    text: string
}

export default function MenuTitle({text}: Props) {
    
    return (
        <h1 className=' text-4xl text-center py-10 font-semibold '>{text}</h1>
    )
}