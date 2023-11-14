import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type Props = {
    color: string
}

export default function DoubleArrowIcon({color}: Props) {
    
    return (
        <MdKeyboardDoubleArrowRight className={`w-4 h-4 mr-1 ${color}`}/>
    )
}