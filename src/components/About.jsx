import aboutData from "../data/about-data";
import { useState } from "react";

function About() {
    const [data] = useState(aboutData)

    return (
        <section id="about" className="flex flex-col items-center md:gap-12 md:justify-center h-screen gap-8 pt-20 sm:pt-0 w-full">
            <div className="flex flex-col items-center">
                <p className="text-[#b0b0b0] text-[16px] md">INTRODUCTION</p>
                <h1 className="text-[45px] font-bold">Overview</h1>
            </div>
            <div className="flex flex-col items-center lg:justify-center gap-13 sm:flex-row sm:items-start ">
                <div className="">
                    <div className="bg-[#5b55a0] pb-9 rounded-2xl overflow-hidden shadow-[0px_10px_40px_rgba(255,255,255,0.1),0px_-10px_40px_rgba(255,255,255,0.06)] sm:min-w-[250px] flex-1">

                        <div className="flex items-center justify-between flex-1 px-4 py-3 ">
                            <div className="flex gap-2">
                                <div className="bg-[#ce3d3d] w-3 h-3 rounded-full "></div>
                                <div className="bg-[#ffed28] w-3 h-3 rounded-full "></div>
                                <div className="bg-[#5ded31] w-3 h-3 rounded-full "></div>
                            </div>
                            <p className="text-[#eaeaea] cursor-pointer">about me</p>
                        </div>
                        <div className=" bg-[#fff] w-65 h-70  overflow-hidden opacity-95">
                            <img src={data.img} alt="" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
                <ul className="w-full space-y-3 text-base leading-relaxed lg:m-0 xl:text-[18px]  text-[#d0d0d0] md:flex-1 lg:text-[16px]">
                    {data.paragraphs.map((data, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2 text-[24px]">{data.emoji}</span>
                            <p className="flex-1">{data.p}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section >
    )
}

export default About;