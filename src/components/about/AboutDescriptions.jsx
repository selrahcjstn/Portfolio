function AboutDescriptions({ paragraphs }) {
    return (
        <ul className="w-full space-y-3 text-base leading-relaxed lg:m-0 xl:text-[18px] text-[14px] font-light  text-[#e6e6e6] md:flex-1 lg:text-[16px]">
            {paragraphs.map((data, index) => (
                <li key={index} className="flex items-start">
                    <span className="mr-2 text-[24px]">{data.emoji}</span>
                    <p className="flex-1">{data.p}</p>
                </li>
            ))}
        </ul>
    )
}

export default AboutDescriptions