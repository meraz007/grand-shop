const SectionHeading = ({heading, title}) => {
    return (
        <>
        <div >
            <h2 className="uppercase text-center font-bold text-[#212529] text-[34px]">{heading}</h2>
            <p className="text-center font-medium text-lg text-[#212529] opacity-[60%]">{title}</p>
        </div>
        </>
    )
}
export default SectionHeading