import { IoIosMenu, IoMdClose } from "react-icons/io";

function MenuButton({ menuOpen, setMenuOpen }) {
    return (
        <button
            className={`text-3xl lg:hidden transition-transform duration-300 ease-in-out cursor-pointer ${menuOpen ? "rotate-180 text-blue-400" : "rotate-0 text-white"
                }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu">
            {menuOpen ? <IoMdClose /> : <IoIosMenu />}
        </button>
    )
}

export default MenuButton