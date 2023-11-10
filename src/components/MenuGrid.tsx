import dumpleImage from '../../public/dumpling.png'
import MenuCard from './MenuCard'


export default function MenuGrid() {
    
    return (
        <div className='flex flex-wrap place-content-center gap-y-7 gap-x-10'>
            <MenuCard image={dumpleImage} eng='Fried Dumplings' kor='군만두' price='10.99'/>
            <MenuCard image={dumpleImage} eng='Tofu Salad with Sesame Dressing' kor='군만두' price='10.99'/>
            <MenuCard image={dumpleImage} eng='Fried Dumplings' kor='군만두' price='10.99'/>
            <MenuCard image={dumpleImage} eng='Fried Dumplings' kor='군만두' price='10.99'/>
            <MenuCard image={dumpleImage} eng='Fried Dumplings' kor='군만두' price='10.99'/>
        </div>
    )
}