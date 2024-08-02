import SectionTitle from './SectionTitle';
import Banner from '../assets/img/banner.png';

const BlogSection = () => {
    const Blogs = [
        {
            img:Banner,
            date:'January 06, 2024',
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas',
            isFeatured: true
        },
        {
            img:Banner,
            date:'January 06, 2024',
            title:'Lorem ipsum dolor sit amet, consectetur',
            isFeatured: false
        },
        {
            img:Banner,
            date:'January 06, 2024',
            title:'Lorem ipsum dolor sit amet, consectetur',
            isFeatured: false
        },
        {
            img:Banner,
            date:'January 06, 2024',
            title:'Lorem ipsum dolor sit amet, consectetur',
            isFeatured: false
        }
    ];

    const featuredPost = Blogs.find((post) => post.isFeatured);
    const regularPosts = Blogs.filter((post) => !post.isFeatured);

    return (
        <>
        <SectionTitle title={'h2 title one liner'} />
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 p-4">
                {featuredPost && (
                    <div className="">
                        <img className="w-full" src={Banner} alt="" />
                        <span className="font-medium text-base text-[#95969A] mt-[17px]">{featuredPost.date}</span>
                        <h2 className="text-2xl font-semibold text-[#212529] mb-4">{featuredPost.title}</h2>
                        <p className="mt-4 font-medium text-[15px] text-[212529] opacity-[60%]">{featuredPost.content}</p>
                    </div>
                )}
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
                {regularPosts.map((post, index) => (
                    <div key={index} className='flex'>
                        <div className="w-1/2">
                            <img className="w-full" src={Banner} alt="" />
                        </div>
                        <div key={index} className="w-1/2 px-4">
                            <span className="font-medium text-base text-[#95969A] mt-[17px]">{post.date}</span>
                            <h3 className="leading-6 text-2xl font-semibold text-[#212529] mb-4">{post.title}</h3>
                        </div>
                    </div>
                    
                ))}
                </div>
            </div>
            <div className='flex justify-center mt-[30px]'>
                <a className='rounded-[6px] border border-[#003080] py-5 px-[65px] font-bold text-lg text-[#003080]' href="">View all Notice & Events</a>
            </div>
        </div>
        </>
    )
}

export default BlogSection