import techStack from "../../data/skills/tech-stack-data.js";

function TechStack() {
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-6">
                {techStack.map((item) => (
                    <div className="flex flex-col gap-4 items-center ">
                        <div key={item.id} className="relative flex flex-col justify-center items-center">
                            <div
                                className="absolute w-[146px] h-[156px] bg-[#271dac] transition-colors duration-300"
                                style={{
                                    clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                                }}
                            ></div>
                            <div
                                className="relative flex flex-col items-center justify-center w-[140px] h-[150px] bg-[#363450] text-white"
                                style={{
                                    clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                                }}
                            >
                                <item.logo className="text-[92px]" style={{ color: item.color }} />
                            </div>
                        </div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;
