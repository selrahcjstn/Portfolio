
import techStack from "../../data/skills/tech-stack-data.js";
import SkillsHeader from "./SkilsHeader.jsx";

function TechStack() {
    return (
        <div className="space-y-6 w-full flex flex-col items-center">
            <div className='text-center rounded-[10px] w-fit p-4 sm:px-6 max-w-[720px] whitespace-normal break-words'>
                <h1 className='text-[26px] font-bold tracking-wide text-white'>Tech Stack</h1>
                <p className='text-[#d1d1d1] leading-[1.6] text-sm sm:text-base'>
                    This section showcases my tech stack—MERN (MongoDB, Express.js, React, Node.js)—which
                    I utilize to develop dynamic, scalable, and high-performance full-stack web applications.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-14 justify-center items-center mx-auto">
                {techStack.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 items-center">
                        <div className="relative flex flex-col justify-center items-center">
                            <div
                                className="absolute w-[146px] h-[156px] bg-[#9389fe] transition-colors duration-300"
                                style={{
                                    clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                                }}
                            ></div>
                            <div
                                className="relative flex flex-col items-center justify-center  w-[140px] h-[150px] bg-[#363450] text-white"
                                style={{
                                    clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                                }}
                            >
                                <item.logo className="text-[92px]" style={{ color: item.color }} />
                            </div>
                        </div>
                        <p className="text-[20px]">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;
