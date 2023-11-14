import PageTitle from './ui/PageTitle'

export default function About() {
    
    return (
        <div className='pt-20 pb-28 bg-dooboo-600'>
            <PageTitle text='about' color='light'/>
            <div className='w-220 text-neutral-200 flex mx-auto text-center'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}