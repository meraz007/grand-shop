import Banner from '../assets/img/quick-shop.png'

const AboutQuickShop = () => {
    return(
        <>
        <div className="relative flex justify-end px-[112px] py-[90px]">
            <div className="relative w-4/5">
                <img src={Banner} alt="banner image" className="w-full" />
                <div className="absolute top-20 left-[-30%] p-[90px] border border-[#D9D9D9] rounded-[30px] bg-white w-[78%]">
                    <h2 className="leading-[48px] font-bold text-[40px] text-[#212529]">About The Quick Shop</h2>
                    <p className="pt-2 font-medium text-lg text-[#212529] opacity-[60%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis  augue sed tellus accumsan, nec congue quam lacinia. Duis 
                    </p>
                    <a className="mt-8 py-2 inline-block font-bold text-lg text-[#003080] text-center border rounded-[6px] px-[65px] border-[#003080]" href="">Learn more about Shop</a>
                </div>
            </div>
        </div>

        </>
    )
}

export default AboutQuickShop