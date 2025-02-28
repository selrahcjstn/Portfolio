import { useState } from "react";
import timeline from "../../data/education/educ-timeline";

function Timeline() {
    const [timelineData] = useState(timeline);

    return (
        <>
            {timelineData.map((item, index) => (
                <div key={index} className="flex gap-5 flex-row items">
                    <div className=" w-32 hidden sm:flex sm:flex-col sm:items-end sm:justify-b sm:gap-3">
                        <div className="flex gap-4 items-center">
                            <p className="text-[#b8b8b8]  p-1  text-[16px] whitespace-nowrap">{item.date}</p>
                            <div className="top-3 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#9389fe] shadow-[0px_0px_10px_#7c73e6]"></div>

                        </div>
                        <div className="flex-1 w-[2px] bg-gradient-to-b from-[#9389fe] to-[#1b1c21] mr-2"></div>
                    </div>
                    <div className="bg-[#232329] p-6 w-full h-full flex-1 flex flex-col sm:pt-10 rounded-[10px] space-y-5">
                        <div className="flex flex-col space-y-1">
                            <h2 className="text-[18px] md:text-[22px] font-bold leading-tight">{item.course}</h2>
                            <p className="text-[#b8b8b8] text-[14px] md:text-[16px] ">{item.school} - <span>{item.location}</span></p>
                        </div>
                        <ul className="text-[14px] md:text-[16px] list-disc sm:list-none space-y-5 sm:pl-0 pl-4 text-[#e6e6e6] leading-relaxed">
                            {item.descriptions?.map((desc, i) => (
                                <li key={i}>{desc.description}</li>
                            ))}
                        </ul>
                        <p className="sm:hidden text-[14px] text-[#b8b8b8]">{item.date}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Timeline;
