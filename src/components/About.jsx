import MyProfile from "../assets/me.jpg"

function About() {
    return (
        <section id="about" className="flex flex-col items-center h-screen pt-20 px-7 gap-8">
            <div className="flex flex-col items-center">
                <p className="text-[#b0b0b0] text-[14px]">INTRODUCTION</p>
                <h1 className="text-[45px] font-bold">About</h1>
            </div>
            <div className="flex flex-col items-center gap-10">
                <div>
                    <div className="bg-[#141118] pb-9 rounded-2xl overflow-hidden w-full shadow-[0px_10px_40px_rgba(255,255,255,0.12),0px_-10px_40px_rgba(255,255,255,0.06)]">


                        <div className="flex items-center justify-between flex-1 px-4 py-3">
                            <div className="flex gap-2">
                                <div className="bg-[#b52b2b] w-3 h-3 rounded-full "></div>
                                <div className="bg-[#ffed28] w-3 h-3 rounded-full "></div>
                                <div className="bg-[#5ded31] w-3 h-3 rounded-full "></div>
                            </div>
                            <p className="text-[#b0b0b0] cursor-pointer">about me</p>
                        </div>
                        <div className="w-full bg-[#fff] max-w-100 max-h-100 overflow-hidden opacity-95">
                            <img src={MyProfile} alt="" className="object-cover" />
                        </div>
                    </div>
                </div>
                <ul className="space-y-3 text-base leading-relaxed text-[14px] text-[#d0d0d0]">
                    <li className="flex items-start">
                        <span className="mr-2 text-[24px]">🧑‍💻</span>
                        <p className="flex-1">Currently learning full-stack development, focusing on both frontend and backend technologies. I enjoy building projects that solve real problems.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-[24px]">🎓</span>
                        <p className="flex-1">Second-year BSIT student at Bulacan State University, passionate about developing reliable and efficient software.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-[24px]">🛠</span>
                        <p className="flex-1">No formal work experience yet, but I build side projects to improve my technical and problem-solving skills.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-[24px]">🖥</span>
                        <p className="flex-1">Knowledgeable in computer hardware and basic troubleshooting, with an interest in both software and hardware integration.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-[24px]">🤝</span>
                        <p className="flex-1">Eager to learn, collaborate with others, and take on challenges to grow my skills and experience.</p>
                    </li>
                </ul>


            </div>
        </section >

    )
}

export default About;