import Banner from '../assets/img/banner.png'

const BlogSection = () => {
    const Blogs = [
        {
            img:Banner,
            date:'January 06, 2024',
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique purus,',
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
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 p-4">
                {featuredPost && (
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                        <img src={Banner} alt="" />
                        <span>{featuredPost.date}</span>
                        <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                        <p>{featuredPost.content}</p>
                    </div>
                )}
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
                {regularPosts.map((post, index) => (
                    <div className='flex'>
                        <div className="w-1/2">
                            <img src={Banner} alt="" />
                        </div>
                        <div key={index} className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                            <span>{post.date}</span>
                            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        </div>
                    </div>
                    
                ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogSection