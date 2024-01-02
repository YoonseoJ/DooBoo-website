import PageTitle from './ui/PageTitle';
import Uber from '../../public/uber.png'
import Skip from '../../public/skip.png'
import DoorDash from '../../public/doordash.png'
import Fantuan from '../../public/fantuan.png'
import OnlineOrderCard from './OnlineOrderCard';

export default function OnlineOrder() {
    
    return (
        <div className='md:pb-28 pb-20 bg-dooboo-400 bg-opacity-30 pt-20'>
            <PageTitle text='online order'/>
            <div className='flex md:w-fit w-64 mx-auto gap-5 place-content-between 
                            md:gap-20 max-md:flex-wrap items-center'>
                <OnlineOrderCard 
                    image={Uber} 
                    name='Uber Eats' 
                    url='https://www.ubereats.com/ca/store/dooboo-tofu-soup-%26-korean-bbq/NAFexhdgSUi82rKdBus2fQ/84e75a51-234b-4386-9e60-5e0aa23c5b66'
                />
                <OnlineOrderCard 
                    image={DoorDash} 
                    name='DoorDash' 
                    url='https://www.doordash.com/store/dooboo-burnaby-385652/'
                />
                <OnlineOrderCard 
                    image={Skip} 
                    name='SkipTheDishes' 
                    url='https://www.skipthedishes.com/dooboo-kingsway-street'
                />
                <OnlineOrderCard 
                    image={Fantuan} 
                    name='Fantuan' 
                    url='https://www.fantuanorder.com/store/dooboo-korean/ca-680'
                />
            </div>
        </div>
    )
}