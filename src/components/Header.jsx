import { useState } from "react";
import { ImPacman } from "react-icons/im";
import { IoIosMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-5 px-5 md:px-10 bg-transparent w-full fixed z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <ImPacman className="text-[#64229e] text-4xl" />
        <h1 className="text-[24px] md:text-[28px] font-bold bg-gradient-to-r from-[#8a5ce1] to-[#56b6e3] bg-clip-text text-transparent inline-block" style={{ fontFamily: "Dancing Script" }}>
          {'<Charles Justine/>'}
        </h1>
      </div>

      {/* Menu Button (Visible on Mobile) */}
      <button
        className="text-3xl lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <IoMdClose /> : <IoIosMenu />}
      </button>

      {/* Navigation Menu (Hidden by default on mobile) */}
      <nav className={`absolute top-16 left-0 w-full bg-[#0f0d24] p-5 flex flex-col gap-5 items-center text-xl transition-all duration-300 lg:static lg:w-auto lg:bg-transparent lg:flex-row lg:items-center lg:p-0 lg:flex ${menuOpen ? "flex" : "hidden"}`}>
        <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 text-[#ababab] font-semibold">
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
