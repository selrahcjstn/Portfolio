function SectionTitle({ title, titleDesc }) {
    return (
        <div className="flex flex-col items-center">
            <p className="text-[#aaa6c3] text-[14px] uppercase">{titleDesc}</p>
            <h1 className="text-[48px] font-bold capitalize">{title}</h1>
        </div>
    )
}

export default SectionTitle;
