import Banner from '../assets/img/banner.png'

const NotesAndEvents = () => {
    const Blogs = [
        {
            date:'January 06, 2024',
            title:'Lorem ipsum dolor sit amet, consectetur',
        },
        {
            date:'January 06, 2024',
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis.'
        },
        {
            date:'January 06, 2024',
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis.'
        },
        {
            date:'January 06, 2024',
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis.'
        }
    ];

    return(
        <>
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 p-4">
                
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                        <img src={Banner} alt="" />
                    </div>
                
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
                {Blogs.map((post, index) => (
                    <div className='flex'>
                        
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
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

export default NotesAndEvents