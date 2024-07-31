import logo from '../assets/img/logo-feature.png'
import testimonial from '../assets/img/testmonial.png'
import arrow from '../assets/img/arrow-right-hero.png'

const HeroSection = () => {
    return (
        <>
        <div className="relative w-full bg-cover bg-center py-[150px]" 
        style={{
            backgroundImage: `url(${testimonial})`,
        }}>
        <div className="absolute inset-0 bg-[#003080] opacity-[57%]"></div>
            <div className="relative flex items-center justify-center w-full h-full">
                <div className="px-[90px]">
                    <div className="flex justify-center mb-[30px]">
                        <img src={logo} alt="" />
                    </div>
                    <h2 className="text-center text-[#FFE600] text-5xl font-bold mb-1 uppercase">Welcome to Grand Shop</h2>
                    <p className="text-center font-semibold text-2xl text-white opacity-[83%]">A Single Line of Motto Text</p>
                    <div className="flex justify-center mt-[30px]">
                        <a href="" className="py-4 px-[90px] rounded-[52px] bg-white flex items-center gap-2 font-bold text-[20px] text-[#003080]">
                            Main CTA 1
                        <div>
                            <img src={arrow} alt="" />
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default HeroSection