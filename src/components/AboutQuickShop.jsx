import Banner from '../assets/img/quick-shop.png'

const AboutQuickShop = () => {
    return(
        <>
        <div className="flex">
            <div className="flex">
                <img src={Banner} alt="banner image" />
            </div>
            <div className="p-[90px] border border-[#D9D9D9] rounded-[30px] bg-white">
                <h2 className="font-bold text-[40px] text-[#212529]">About The Quick Shop</h2>
                <p className="font-medium text-lg text-[#212529] opacity-[60%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique purus,</p>
                <a className="mt-8 font-bold text-lg text-[#003080] text-center border rounded-[6px] px-[65px] border-[#003080]" href="">Learn more about Shop</a>
            </div>
        </div>
        </>
    )
}

export default AboutQuickShop