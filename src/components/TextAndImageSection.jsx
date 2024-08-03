import Banner from '../assets/img/bg-image.png'

const TextAndImageSection = () => {
    return (
        <>
        <div className="p-24 mb-20">
    <div className="relative h-screen bg-cover bg-center" 
        style={{
            backgroundImage: `url(${Banner})`,
        }}>
        <div className="w-1/2 border rounded-[30px] absolute -top-20 right-0 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold uppercase text-[#212529]">One liner title h2</h2>
            <p className='font-medium text-lg text-[212529] opacity-[60%] leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt,, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis place</p>
            <div className='pt-[28px]'>
                <a className='rounded-[6px] border border-[#003080] py-3 px-6 font-bold text-lg text-[#003080]' href="">Learn More</a>
            </div>
        </div>
        <div className="w-1/2 border rounded-[30px] absolute -bottom-32 left-0 bg-white p-8 rounded-lg shadow-lg m-4">
            <h2 className="text-2xl font-bold uppercase text-[#212529]">One liner title h2</h2>
            <p className='font-medium text-lg text-[212529] opacity-[60%] leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis place</p>
            <div className='pt-[28px]'>
                <a className='rounded-[6px] border border-[#003080] py-3 px-6 font-bold text-lg text-[#003080]' href="">Learn More</a>
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default TextAndImageSection