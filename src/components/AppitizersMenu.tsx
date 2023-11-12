import MenuName from './ui/MenuName';
import MenuTitle from './ui/MenuTitle';

export default function AppitizersMenu() {
    
    return (
        <div>
            <MenuTitle text={'Appitizers'} />
            <ul>
                <li>
                    {/* <MenuGrid /> */}
                    {/* <MenuCard image={dumpleImage} eng='Fried Dumplings' kor='군만두' price='10.99'/> */}
                    <MenuName eng='Fried Dumplings' kor='군만두' price='10.99'/>
                    <MenuName eng='Fried Clams'  kor='조갯살튀김' price='10.99'/>
                    <MenuName eng='Chicken Salad'  kor='치킨샐러드' price='13.99'/>
                    <MenuName eng='Tofu Salad with Sesame Dressing'  kor='두부샐러드' price='11.99'/>
                    <MenuName eng='Deep Fried Shrimp Salad'  kor='새우샐러드' price='12.99'/>
                    <MenuName eng='Stir Fried Rice Cakes'  kor='떡볶이' price='10.99'/>
                </li>
            </ul>
        </div>
    )
}