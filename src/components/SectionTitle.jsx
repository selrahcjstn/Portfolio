function SectionTitle({ title, titleDesc }) {
    return (
        <div className="flex flex-col items-center">
            <p className="text-[#b8b8b8] text-[14px] xl:text-[18px] uppercase">{titleDesc}</p>
            <h1 className="text-[45px] xl:text-[60px] font-bold capitalize">{title}</h1>
        </div>
    )
}

export default SectionTitle;
