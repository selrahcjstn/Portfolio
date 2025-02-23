import aboutData from "../data/about-data";
import { useState } from "react";

function About() {
    const [data] = useState(aboutData)

    function renderAboutList() {
        return (
            data.paragraphs.map((data, index) => (
                <li key={index} className="flex items-start">
                    <span className="mr-2 text-[24px]">{data.emoji}</span>
                    <p className="flex-1">{data.p}</p>
                </li>
            ))
        )
    }

    return (
        <section id="p[" className="flex flex-col items-center h-screen pt-20 px-7 gap-8">
            <div className="flex flex-col items-center">
                <p className="text-[#b0b0b0] text-[14px]">INTRODUCTION</p>
                <h1 className="text-[45px] font-bold">About</h1>
            </div>
            <div className="flex flex-col items-center gap-10">
                <div>
                    <div className="bg-[#1c1a1e] pb-9 rounded-2xl overflow-hidden w-full shadow-[0px_10px_40px_rgba(255,255,255,0.1),0px_-10px_40px_rgba(255,255,255,0.06)]">


                        <div className="flex items-center justify-between flex-1 px-4 py-3">
                            <div className="flex gap-2">
                                <div className="bg-[#ce3d3d] w-3 h-3 rounded-full "></div>
                                <div className="bg-[#ffed28] w-3 h-3 rounded-full "></div>
                                <div className="bg-[#5ded31] w-3 h-3 rounded-full "></div>
                            </div>
                            <p className="text-[#b0b0b0] cursor-pointer">about me</p>
                        </div>
                        <div className="w-full bg-[#fff] max-w-80 max-h-80 overflow-hidden opacity-95">
                            <img src={data.img} alt="" className="object-cover" />
                        </div>
                    </div>
                </div>
                <ul className="space-y-3 text-base leading-relaxed text-[14px] text-[#d0d0d0]">
                    {renderAboutList()}
                </ul>
            </div>
        </section >
    )
}

export default About;