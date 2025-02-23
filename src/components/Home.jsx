import { useRef, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import animation from "../assets/animation.json";
import Lottie from "lottie-react";
import blob from "../assets/blob.svg";
import Typed from "typed.js";

function Home() {
    const el = useRef(null);

    useEffect(() => {
        if (!el.current) return;
        const typed = new Typed(el.current, {
            strings: ["Software Developer", "Front-End Developer", "BSIT Student", "Computer Enthusiast"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section id="me" className="h-screen flex flex-col-reverse justify-around sm:flex-row items-center min-h-screen px-5 sm:px-10 md:px-15 gap-4 sm:gap-7 lg:px-30 xl:px-40">
            <div className="flex-2 flex flex-col gap-4 items-center text-center sm:text-left sm:items-start w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight whitespace-nowrap lg:text-5xl xl:text-6xl">
                    Hi, I'm <span className="text-[#9389fe]">Charles Justine</span>
                </h1>
                <div>
                    <p className="text-md sm:text-xl md:text-[26px] xl:text-[28px]">
                        I'm a <span className="text-[#9389fe] font-semibold" ref={el}></span>
                    </p>
                    <p className="text-[#d0d0d0] text-sm px-4 sm:px-0 sm:min-w-0 sm:mr-10 md:text-[14px] md:min-w-[3rem] lg:max-w-[700px] lg:m-0 lg:text-[16px] xl:text-[18px] leading-relaxed tracking-wide">
                        I specialize in building web-based projects and developing business applications that bring efficiency
                        and innovation to digital platforms. With expertise in front-end technologies like React and JavaScript,
                        I create interactive, visually appealing, and high-performance applications that enhance user experience.
                    </p>

                </div>

                <div className="flex gap-3 mt-2  lg:gap-6">
                    <a className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition" href="https://github.com/selrahcjstn" target="_blank">
                        <FiGithub className="text-lg sm:text-xl" />
                    </a>
                    <a className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition" href="https://www.facebook.com/charlesjustine.mantes.750/">
                        <FaFacebook className="text-lg sm:text-xl" target="_blank" />
                    </a>
                    <a className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition" href="">
                        <FaInstagram className="text-lg sm:text-xl" target="_blank" />
                    </a>
                    <a className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition" href="">
                        <FaLinkedin className="text-lg sm:text-xl" target="_blank" />
                    </a>
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
                        src={blob}
                        alt="blob"
                        className="w-[180px] sm:w-[250px] md:w-[350px] lg:w-[450px] xl:w-[550px] opacity-50"
                    />
                </div>
                <div className="flex justify-center mt-[-50px] sm:mt-[-80px]">
                    <Lottie
                        animationData={animation}
                        loop
                        className="pt-10 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
                    />
                </div>
            </div>
        </section>

    );
}

export default Home;
