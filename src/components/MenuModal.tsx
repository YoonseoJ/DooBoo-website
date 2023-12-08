import CloseIcon from './ui/icons/CloseIcon'

type Props = {
    children: React.ReactNode
    onClose: () => void
}

export default function MenuModal({onClose, children}: Props) {
    
    return (
        <section 
            className='fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70'
            onClick={(event) => {
            if (event.target === event.currentTarget) {
                onClose()
            }
        }}>
            <button className='fixed top-0 right-0 p-8 text-white' onClick={() => onClose()}>
                <CloseIcon />
            </button>
            <div className='bg-white w-11/12 md:w-3/5 p-5 rounded-xl md:p-10 max-w-7xl'>
                {children}
            </div>
        </section>
    )
}