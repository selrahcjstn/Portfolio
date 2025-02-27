import { useRef, useEffect } from "react";
import Typed from "typed.js";


function Content({ tagLine, name, paragraph }) {
    const el = useRef(null);


    useEffect(() => {
        if (!el.current) return;
        const typed = new Typed(el.current, {
            strings: tagLine,
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight whitespace-nowrap lg:text-4xl xl:text-5xl font-bold">Hi, I'm <span className="text-[#9389fe]">{name}</span></h1>
            <div>
                <p className="text-[18px] sm:text-xl md:text-[26px] xl:text-[28px]">
                    I'm a <span className="text-[#9389fe] font-semibold" ref={el}></span>
                </p>
                <p className="text-[#e6e6e6] text-[14px] font-light sm:px-0 max-w-[700px] sm:min-w-0 sm:mr-10 md:text-[16px] md:min-w-[3rem]  lg:m-0 leading-relaxed tracking-wide">
                    {paragraph}
                </p>

            </div>
        </>
    )
}

export default Content