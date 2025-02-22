import { useState } from "react";
import { ImPacman } from "react-icons/im";
import { IoIosMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="inline-flex bg-[#121027] justify-between items-center py-5 px-5 md:px-10 w-full fixed z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <ImPacman className="text-[#64229e] text-4xl" />
        <h1 className="text-[24px]  md:text-[28px] font-bold bg-gradient-to-r from-[#8a5ce1] to-[#63c4f0] bg-clip-text text-transparent inline-block" style={{ fontFamily: "Dancing Script" }}>
          {'<Charles Justine/>'}
        </h1>
      </div>

      <button
        className="text-3xl lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <IoMdClose /> : <IoIosMenu />}
      </button>

      <nav className={` absolute top-16 right-5 rounded-[12px] px-6 py-5 bg-gradient-to-br from-[#300e61] to-[#1b5571] flex flex-col text-[14px] transition-all duration-300 lg:static lg:w-auto lg:bg-transparent lg:flex-row lg:items-center lg:p-0 lg:flex ${menuOpen ? "flex" : "hidden"}`}>
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
