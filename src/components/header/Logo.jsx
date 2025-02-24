import { ImPacman } from "react-icons/im";

function Logo() {
    return (
        <div className="flex items-center gap-2">
            <ImPacman className="text-[#8a5ce1] text-2xl lg:text-3x1" />
            <a
                href="#me"
                className="text-[18px] md:text-[28px] font-bold bg-gradient-to-r from-[#8a5ce1] to-[#63c4f0] bg-clip-text text-transparent inline-block cursor-pointer"
                style={{ fontFamily: "Dancing Script" }}
            >
                {"<Charles Justine/>"}
            </a>
        </div>
    )
}

export default Logo