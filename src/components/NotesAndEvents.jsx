import SectionTitle from './SectionTitle';
import Banner from '../assets/img/banner-event.png'

const NotesAndEvents = () => {
    const Blogs = [
        {
            date:'12',
            month:'Oct',
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis.'
        },
        {
            date:'13',
            month:'Sep',
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis.'
        },
        {
            date:'23',
            month:'Aug',
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis.'
        }
    ];

    return(
        <>
        <SectionTitle title={'h2 title one liner'} />
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/3 p-4">
                
                    <div className="">
                        <img src={Banner} alt="" />
                    </div>
                    <div className="-mt-[1px] flex flex-wrap md:flex-nowrap">
                        <div className='w-2/12 flex-col text-center flex items-center bg-[#003080] justify-center text-white'>
                            <span className="font-normal text-[20px] flex items-center inline-block text-center">Oct</span>
                            <span className="font-bold text-[26px] flex items-center">31</span>
                        </div>
                        <div className="pl-4 w-10/12 bg-[#003FA9] flex flex-col py-[26px]">
                            <h3 className='font-bold text-[23px] text-white'>Lorem ipsum us </h3>
                            <span className='font-normal text-base text-white'>Oct 31, 2024</span>
                        </div>
                    </div>
                
                </div>
                <div className="w-full md:w-2/3 p-4 flex flex-col space-y-4">
                {Blogs.map((post, index) => (
                    <div key={index} className="flex border-b border-[#003080] border-opacity-[15%] pb-4">
                        <div className="flex flex-col rounded-[14px] text-white px-5 bg-[#003080] justify-center items-center">
                            <p className="font-normal text-[20px] flex items-center inline-block text-center">
                                {post.month}
                            </p>
                            <p className="font-bold text-[26px] flex items-center">
                                {post.date}
                            </p>
                        </div>

                        <div className="px-5">
                            <h3 className="font-bold text-[22px] text-[#333333] mb-2">{post.title}</h3>
                            <p className="font-medium text-[15px] text-[#212529] opacity-[60%]">{post.content}</p>
                        </div>
                    </div>
                ))}

                <div className='pt-[28px]'>
                    <a className='rounded-[6px] border border-[#003080] py-5 px-[65px] font-bold text-lg text-[#003080]' href="">View all Notice & Events</a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NotesAndEvents