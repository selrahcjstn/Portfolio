function AboutDescriptions({ paragraphs }) {
    return (
        <ul className="h-full max-w-[700px] space-y-3 text-base leading-relaxed lg:m-0 text-[14px] md:text-[16px] font-light  text-[#e6e6e6] md:flex-1 ">
            {paragraphs.map((data, index) => (
                <li key={index} className="flex items-center justify-start">
                    <span className="mr-2 text-[24px] w-8">{data.emoji}</span>
                    <p className="flex-1">{data.p}</p>
                </li>
            ))}
        </ul>
    )
}

export default AboutDescriptions