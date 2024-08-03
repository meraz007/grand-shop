import SectionHeading from "./SectionHeading"
import IconeOne from '../assets/img/explore-product-one.png'
import IconeTwo from '../assets/img/explore-product-two.png'
import IconeFour from '../assets/img/explore-product-four.png'
import IconeThree from '../assets/img/explore-product-three.png'
import Explore from '../assets/img/banner.png'

const ExploreProduct = () => {
    const productLists = [
        {
            icon:IconeOne,
            title:'title h4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet ',
            circleText:'Explore products'
        },
        {
            icon:IconeTwo,
            title:'title h4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet ',
            circleText:'Explore cool products'
        },
        {
            icon:IconeThree,
            title:'title h4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet ',
            circleText:'Explore products'
        },
        {
            icon:IconeFour,
            title:'title h4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet ',
            circleText:'Explore Customers'
        }
    ]
    return(
        <>
            <div className="px-[109px] py-[90px]">
                <SectionHeading 
                    heading={"h2 title one liner"} 
                    title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincid"} 
                />
                <div className="">
                    {productLists.map((list,index) => (
                        <div key={index} className={`flex py-[40px] gap-40 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                            <div className="w-1/2 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <img src={list.icon} alt="" />
                                    </div>
                                    <h4 className="font-bold text-[#212529] uppercase text-[27px]">{list.title}</h4>
                                </div>
                                <p className="font-medium text-lg text-[#212529] opacity-[60%]">{list.text}</p>
                            </div>
                            <div className="w-1/2 relative">
                                <img className="w-full" src={Explore} alt="" />
                                <div className="font-bold text-md text-center flex items-center absolute md:left-[-60px] left-[-80px] bottom-[43px] bg-[#003080] md:w-[120px] md:h-[120px] justify-center rounded-full text-white">{list.circleText}</div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>

        </>
    )
}
export default ExploreProduct