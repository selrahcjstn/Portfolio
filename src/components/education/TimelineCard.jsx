import { useState } from "react";
import timeline from "../../data/educ-timeline";

function Timeline() {
    const [timelineData] = useState(timeline);

    return (
        <>
            {timelineData.map((item, index) => (
                <div key={index} className="flex flex-col bg-[#1e1a3b] p-6 rounded-[6px] border-b-3 space-y-5 border-b-[#e2e2e2]">
                    <div>
                        <h2 className="text-[20px] font-bold">{item.course}</h2>
                        <p>{item.school} - <span>{item.location}</span></p>
                        <p className="text-[#aaa6c3]">{item.date}</p>
                    </div>
                    <ul className="list-disc pl-5 text-[#e6e6e6] leading-relaxed">
                        <li>{item.description}</li>
                    </ul>
                </div>
            ))}
        </>
    );
}

export default Timeline;
