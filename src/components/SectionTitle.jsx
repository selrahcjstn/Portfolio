function SectionTitle({ title, titleDesc }) {
    return (
        <div className="flex flex-col items-center">
            <p className="text-[#b0b0b0] text-[16px] capitalize">{titleDesc}</p>
            <h1 className="text-[45px] font-bold capitalize">{title}</h1>
        </div>
    )
}

export default SectionTitle;
