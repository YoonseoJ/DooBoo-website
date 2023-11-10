type Props = {
    text: string
}

export default function MenuTitle({text}: Props) {
    
    return (
        <h1 className=' text-5xl text-center py-10 font-bold '>{text}</h1>
    )
}