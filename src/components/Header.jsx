import { useState } from "react";
import { ImPacman } from "react-icons/im";
import { IoIosMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="inline-flex bg-[#121027] justify-between items-center py-2 px-4 md:px-10 w-full fixed z-50">
      <div className="flex items-center gap-2">
        <ImPacman className="text-[#8a5ce1] text-2xl" />
        <h1 className="text-[18px]  md:text-[28px] font-bold bg-gradient-to-r from-[#8a5ce1] to-[#63c4f0] bg-clip-text text-transparent inline-block" style={{ fontFamily: "Dancing Script" }}>
          {'<Charles Justine/>'}
        </h1>
      </div>

      <button
        className={`text-3xl lg:hidden transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-180 text-blue-400" : "rotate-0 text-white"
          }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <IoMdClose /> : <IoIosMenu />}
      </button>


      <nav
        className={`absolute top-14 right-2 rounded-[12px] px-6 py-5 bg-gradient-to-br from-[#300e61] to-[#1b5571] flex flex-col text-[14px] transition-all duration-300 ease-in-out transform ${menuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none"
          } lg:static lg:w-auto lg:bg-transparent lg:flex-row lg:items-center lg:p-0 lg:flex lg:opacity-100 lg:scale-100 lg:translate-y-0`}
      >
        <ul className="text-white flex flex-col lg:flex-row gap-4 lg:gap-10 lg:text-[#ababab] lg:font-semibold">
          <li className="hover:text-white cursor-pointer transition-colors">About</li>
          <li className="hover:text-white cursor-pointer transition-colors">Education</li>
          <li className="hover:text-white cursor-pointer transition-colors">Skills</li>
          <li className="hover:text-white cursor-pointer transition-colors">Projects</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
