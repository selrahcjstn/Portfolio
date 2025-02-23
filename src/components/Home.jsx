import { useRef, useEffect, useState } from "react";
import homeData from "../data/home-data.js"
import linksData from "../data/links.-data.js"
import Lottie from "lottie-react";
import Typed from "typed.js";

function Home() {
    const el = useRef(null);
    const [data] = useState(homeData);
    const [links] = useState(linksData);

    useEffect(() => {
        if (!el.current) return;
        const typed = new Typed(el.current, {
            strings: data.tagLine,
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section id="me" className="h-screen flex sm:h-fit flex-col-reverse justify-around sm:flex-row items-center min-h-screen pt-20  gap-4 sm:gap-7 ">
            <div className="flex-2 flex flex-col gap-4 items-center text-center sm:text-left sm:items-start w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight whitespace-nowrap lg:text-4xl xl:text-5xl">
                    Hi, I'm <span className="text-[#9389fe]">{data.name}</span>
                </h1>
                <div>
                    <p className="text-[18px] sm:text-xl md:text-[26px] xl:text-[28px]">
                        I'm a <span className="text-[#9389fe] font-semibold" ref={el}></span>
                    </p>
                    <p className="text-[#e6e6e6] text-[14px] font-light sm:px-0 sm:min-w-0 sm:mr-10 md:text-[14px] md:min-w-[3rem] lg:max-w-[700px] lg:m-0 lg:text-[16px] xl:text-[18px] leading-relaxed tracking-wide">
                        {data.paragraph}
                    </p>

                </div>

                <div className="flex gap-3 mt-2  lg:gap-6">
                    {links.socialMedia.map((link, index) => (
                        <a
                            key={index}
                            className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition"
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <link.icon className="text-lg sm:text-xl" />
                        </a>
                    ))}
                </div>

                <div className="flex gap-2 lg:gap-4">
                    <button className="cursor-pointer px-5 sm:px-6 py-2 text-white rounded-lg hover:opacity-75 text-base sm:text-lg md:text-xl bg-gradient-to-r from-[#9389fe] to-[#7795d3]">
                        Resume
                    </button>
                    <button className="relative px-5 sm:px-6 py-2 text-white text-base sm:text-lg md:text-xl rounded-lg border-2 border-[#7795d3] overflow-hidden transition-all group">
                        <span className="cursor-pointer relative z-10">Contact</span>
                        <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-[#6a4faa] to-[#4d74c0] w-full h-full left-0 top-0 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
                    </button>
                </div>
            </div>
            <div className="flex-1 pt-10 mt-20 mb-10 flex flex-col items-center justify-center w-fit relative xl:mt-0 xl:mb-0 xl:pt-0 ">
                <div className="absolute flex justify-center">
                    <img
                        src={data.blob}
                        alt="blob"
                        className="w-[250px] sm:w-[250px] md:w-[350px] lg:w-[450px] xl:w-[550px] opacity-50"
                    />
                </div>
                <div className="flex justify-center mt-[-50px] sm:mt-[-80px]">
                    <Lottie
                        animationData={data.animation}
                        loop
                        className="pt-10 w-[220px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;
