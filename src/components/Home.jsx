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
        <section className="h-screen flex flex-col-reverse justify-around sm:flex-row items-center min-h-screen px-5 sm:px-10 md:px-20 gap-4 sm:gap-7">
            {/* Left Section (Text + Socials) */}
            <div className="flex-1  flex flex-col gap-4 items-center text-center sm:text-left sm:items-start w-full">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
                    Hi, I'm <span className="text-[#9389fe]">Charles Justine</span>
                </h1>
                <div>
                    <p className="text-lg sm:text-xl md:text-[28px]">
                        I'm a <span className="text-[#9389fe] font-semibold" ref={el}></span>
                    </p>
                    <p className="text-sm sm:text-base md:text-[18px] leading-relaxed tracking-wide">
                        I specialize in building web-based projects and developing business applications that bring efficiency
                        and innovation to digital platforms. With expertise in front-end technologies like React and JavaScript,
                        I create interactive, visually appealing, and high-performance applications that enhance user experience.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mt-4">
                    <a className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition" href="">
                        <FiGithub className="text-lg sm:text-xl" />
                    </a>
                    <a className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition" href="">
                        <FaFacebook className="text-lg sm:text-xl" />
                    </a>
                    <a className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition" href="">
                        <FaInstagram className="text-lg sm:text-xl" />
                    </a>
                    <a className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition" href="">
                        <FaLinkedin className="text-lg sm:text-xl" />
                    </a>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                    <button className="cursor-pointer px-5 sm:px-6 py-2 text-white rounded-lg hover:opacity-75 text-base sm:text-lg md:text-xl bg-gradient-to-r from-[#9389fe] to-[#7795d3]">
                        Resume
                    </button>
                    <button className="relative px-5 sm:px-6 py-2 text-white text-base sm:text-lg md:text-xl rounded-lg border-2 border-[#7795d3] overflow-hidden transition-all group">
                        <span className="cursor-pointer relative z-10">Contact</span>
                        <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-[#6a4faa] to-[#4d74c0] w-full h-full left-0 top-0 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
                    </button>
                </div>
            </div>
            {/* Right Section (Animation + Blob) */}
            <div className="pt-10 mt-40 mb-20 flex flex-col items-center justify-center w-fit">

                {/* Background Blob */}
                <div className="absolute flex justify-center">
                    <img
                        src={blob}
                        alt="blob"
                        className="w-[250px] sm:w-[420px] md:w-[400px] opacity-50"
                    />
                </div>

                {/* Lottie Animation */}
                <div className="flex justify-center mt-[-50px] sm:mt-[-80px]">
                    <Lottie
                        animationData={animation}
                        loop
                        className="w-[200px] sm:w-[200px] md:w-[350px]"
                    />
                </div>
            </div>

        </section>
    );
}

export default Home;
