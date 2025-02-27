import Lottie from "lottie-react";

function Animation({ blob, animation }) {
    return (
        <div className="flex-1 pt-10 mt-20 mb-10 flex flex-col items-center justify-center w-fit relative xl:mt-0 xl:mb-0 xl:pt-0 ">
            <div className="absolute flex justify-center">
                <img
                    src={blob}
                    alt="blob"
                    className="w-[300px] md:w-[350px] lg:w-[300px] opacity-50"
                />
            </div>
            <div className="flex justify-center mt-[-50px] sm:mt-[-80px]">
                <Lottie
                    animationData={animation}
                    loop
                    className="pt-10 w-[250px] md:w-[300px] lg:w-[350px]"
                />
            </div>
        </div>
    )

}

export default Animation