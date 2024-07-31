import ArrowRight from '../assets/img/arrow-right.png'
import testimonial from '../assets/img/testmonial.png'


const FeatureAndTestimonial = ({logo, heading, text, btnText}) => {
    return (
        <>
        <div className="relative w-full bg-cover bg-center py-[50px]" 
        style={{
            backgroundImage: `url(${testimonial})`,
        }}>
        <div className="absolute inset-0 bg-[#003080EB] opacity-[90%]"></div>
            <div className="relative flex items-center justify-center w-full h-full">
                <div className="px-[90px]">
                    <div className="flex justify-center mb-[30px]">
                        <img src={logo} alt="" />
                    </div>
                    <h2 className="text-center text-[#FFE600] text-4xl font-bold mb-[30px] uppercase">{heading}</h2>
                    <p className="font-medium text-lg text-white">{text}</p>
                    <div className="flex justify-center mt-[30px]">
                        <a href="" className="flex items-center gap-2 font-semibold text-base text-white">
                            {btnText}
                        <div>
                            <img src={ArrowRight} alt="" />
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FeatureAndTestimonial;