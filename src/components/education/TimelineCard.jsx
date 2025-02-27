import { useState } from "react";
import timeline from "../../data/educ-timeline";

function Timeline() {
    const [timelineData] = useState(timeline);

    return (
        <>
            {timelineData.map((item, index) => (
                <div className="flex gap-5 flex-row">
                    <div className=" w-32 hidden sm:flex sm:flex-col sm:items-end sm:justify-b sm:gap-3">
                        <div className="flex gap-4 items-center">
                            <p className="text-[#aaa]  p-1  text-[16px] whitespace-nowrap">{item.date}</p>
                            <div className="top-3 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#9389fe]"></div>
                        </div>
                        <div className="flex-1 w-[2px] bg-white mr-2"></div>
                    </div>
                    <div key={index} className="w-full flex-1/2 flex flex-col  p-6 rounded-[6px] space-y-5">

                        <div className="flex flex-col space-y-1">

                            <h2 className="text-[18px] md:text-[22px] font-bold leading-tight">{item.course}</h2>
                            <p className="text-[#aaa6c3] text-[14px] md:text-[16px] ">{item.school} - <span>{item.location}</span></p>
                        </div>
                        <ul className="text-[14px] md:text-[16px] list-disc sm:list-none sm:pl-0 pl-4 text-[#e6e6e6] leading-relaxed">
                            <li>{item.description}</li>
                        </ul>
                        <p className="sm:hidden text-[14px] text-[#aaa6c3]">{item.date}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Timeline;
