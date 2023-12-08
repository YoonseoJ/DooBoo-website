
import PageTitle from './ui/PageTitle'
import Bulgogi from '../../public/bulgogi.png'
import ShortRib from '../../public/shortrib.png'
import FishRoe from '../../public/fishroe.png'
import Chicken from '../../public/chicken.png'
import FeaturedMenu from './FeaturedMenu'

export default function About() {
    
    return (
        <div className='pt-20 pb-16 md:pb-28 bg-dooboo-600'>
            <PageTitle text='about' color='light'/>
            <div className=' w-11/12 text-neutral-200 flex mx-auto text-center lg:w-[50rem]'>
                <p>{`
                    Welcome to DooBoo, your gateway to authentic Korean cuisine.
                    Our charming restaurant is a blend of tradition and modernity, 
                    offering a menu that captures the vibrant flavors of Korea. 
                    From sizzling soft tofu soup to comforting bibimbap, 
                    each dish is crafted by our skilled chefs using fresh, locally sourced ingredients. 
                    Join us at DooBoo for a culinary journey through the rich and diverse tapestry of Korean flavors.
                `}</p>
            </div>
            <div className=' flex mx-auto w-full justify-center md:w-fit mt-20 md:gap-5 max-md:flex-wrap'>
                <FeaturedMenu image={Chicken} />
                <FeaturedMenu image={Bulgogi} />
                <FeaturedMenu image={FishRoe} />
                <FeaturedMenu image={ShortRib} />
            </div>
        </div>
    )
}