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
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet '
        },
        {
            icon:IconeTwo,
            title:'title h4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet '
        },
        {
            icon:IconeThree,
            title:'title h4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet '
        },
        {
            icon:IconeFour,
            title:'title h4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet '
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
                        <div key={index} className="flex justify-between gap-36 py-[40px]">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div>
                                    <img src={list.icon} alt="" />
                                </div>
                                <h4 className="uppercase">{list.title}</h4>
                            </div>
                            <p>{list.text}</p>
                        </div>
                        <div className="">
                            <img className="" src={Explore} alt="" />
                            <div className=" bg-[#003080] w-[169px] h-[169px] rounded-full"></div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </>
    )
}
export default ExploreProduct