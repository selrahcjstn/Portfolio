import { FaFacebook, FaInstagram, FaLinkedin, FaReact, FaHtml5 } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import animation from "../assets/animation.json"
import Lottie from "lottie-react";
import blob from "../assets/blob.svg"

function Main() {
    return (
        <main>
            <section className="flex items-center min-h-screen mx-35 gap-7">
                <div className="flex gap-7 items-center flex-1">
                    <div className="flex flex-col items-center">

                        <div className="w-5 h-5 bg-[#6f5de0] rounded-full"></div>
                        <div className="w-1 h-100 bg-gradient-to-b from-[#9389fe] to-[#181534]"></div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-6xl font-bold leading-tight">Hi, I'm <span className="text-[#9389fe]">Charles Justine</span> </h1>
                        <div>
                            <p className="text-[28px]" >I'm a<span className="text-[#9389fe] font-semibold"> Front End Web Developer</span></p>
                            <p className="text-[18px] max-w-200 leading-relaxed tracking-wide">
                                I specialize in building web-based projects and developing business applications that bring efficiency
                                and innovation to digital platforms. With expertise in front-end technologies like React and JavaScript,
                                I create interactive, visually appealing, and high-performance applications that enhance user experience.
                            </p>

                        </div>
                        <div className="flex gap-2 mt-2">
                            <a className="w-10 h-10 flex items-center justify-center rounded-full p-2 border-[#4d74c0] border-1 hover:border-1 hover:border-[#4d74c0] hover:bg-[#4f4777] transition-border" href="">
                                <FiGithub className="text-xl " />
                            </a>
                            <a className="w-10 h-10 flex items-center justify-center rounded-full p-2 border-[#4d74c0] border-1 hover:border-1 hover:border-[#4d74c0] hover:bg-[#4f4777] transition-border" href="">
                                <FaFacebook className="text-xl " />
                            </a>
                            <a className="w-10 h-10 flex items-center justify-center rounded-full p-2 border-[#4d74c0] border-1 hover:border-1 hover:border-[#4d74c0] hover:bg-[#4f4777] transition-border" href="">
                                <FaInstagram className="text-xl " />
                            </a>
                            <a className="w-10 h-10 flex items-center justify-center rounded-full p-2 border-[#4d74c0] border-1 hover:border-1 hover:border-[#4d74c0] hover:bg-[#4f4777] transition-border" href="">
                                <FaLinkedin className="text-xl " />
                            </a>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <button className="px-8 py-2  text-white rounded-lg hover:opacity-75 cursor-pointer text-xl bg-gradient-to-r from-[#9389fe] to-[#7795d3]">Resume</button>
                            <button className="relative px-8 py-2 text-white text-xl rounded-lg cursor-pointer 
                   border-2 border-[#7795d3] overflow-hidden 
                   transition-all duration-500 ease-in-out group">

                                <span className="relative z-10">Contact</span>

                                <div className="absolute inset-0 bg-gradient-to-r from-[#6a4faa] to-[#4d74c0] 
                                    w-full h-full left-0 top-0 
                                    transform -translate-x-full transition-transform duration-500 ease-in-out 
                                    group-hover:translate-x-0">
                                </div>

                            </button>

                        </div>
                    </div>
                </div>
                <div className="flex-1 relative flex justify-center items-center">
                    {/* Blob Background - Centered Exactly on Animation */}
                    <img
                        src={blob}
                        alt="blob"
                        className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[730px] h-[730px] opacity-60 -z-10 max-w-full"
                    />

                    {/* Lottie Animation - Stays Centered */}
                    <Lottie
                        animationData={animation}
                        loop
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ width: "500px", height: "500px" }}
                    />
                </div>



            </section>
        </main>
    );
}

export default Main;
