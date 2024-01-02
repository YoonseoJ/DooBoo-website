type Props = {
    text: string
}

export default function MenuExtraInfoText({text}: Props) {
    
    return (
        <div className=' flex justify-center items-center gap-1 text-sm mt-16 text-red-700 opacity-50'>
            <p className='h-fit  pt-1.5'>*</p>
            <p className='h-fit'>{text}</p>
        </div>
    )
}