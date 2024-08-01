import logo from '../assets/img/logo-feature.png'
import testimonial from '../assets/img/testmonial.png'
import arrow from '../assets/img/arrow-right-hero.png'
import logoNav from '../assets/img/logo-white-circle.png'

const HeroSection = () => {
    const navLinks = [
        {label:'section 1', link:'#'},
        {label:'section 2', link:'#'},
        {label:'section 3', link:'#'},
        {label:'2 Sub Divs', link:'#'},
        {label:'section 4', link:'#'},
        {label:'two liner 1', link:'#'},
        {label:'two liner 2', link:'#'},
        {label:'section 5', link:'#'},
        {label:'two liner 3', link:'#'}
    ]
    return (
        <>
        <div className="relative w-full bg-cover bg-center py-[150px]" 
            style={{
                backgroundImage: `url(${testimonial})`,
            }}>
            <div className="absolute inset-0 bg-[#003080] opacity-[57%]"></div>
            <div className="absolute flex inset-x-0 top-0 h-[122px] bg-[#000522] opacity-[63%] items-center justify-between px-4">
                <div>
                    <img className="w-[90px] h-[90px]" src={logoNav} alt="" />
                </div>
                <ul className="flex space-x-3 hidden sm:block">
                    {navLinks.map((nav, index) => (
                        <li key={index} className="inline bg-[#FFE600] p-3 m-3">
                            <a className="uppercase font-bold text-xs text-black" href={nav.link}>{nav.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex items-center justify-center w-full h-full">
                <div className="bg-[#000522] opacity-[63%]"></div>
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