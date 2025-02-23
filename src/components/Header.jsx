import { useState, useEffect } from "react";
import { ImPacman } from "react-icons/im";
import { IoIosMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.activeElement?.blur();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="inline-flex bg-[#121027] justify-between items-center py-4 px-7 md:px-15 w-full fixed z-50 xl:px-40">
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

      <button
        className={`text-3xl lg:hidden transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-180 text-blue-400" : "rotate-0 text-white"
          }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <IoMdClose /> : <IoIosMenu />}
      </button>

      <nav
        className={`absolute top-16 right-7 md:top-20 md:right-14 sm:right-7 rounded-[12px] px-8 py-5 flex flex-col text-[16px] lg:text-[18px] transition-all duration-300 ease-in-out transform lg:static lg:w-auto lg:bg-transparent lg:flex-row lg:items-center lg:p-0 lg:flex lg:opacity-100 lg:scale-100 lg:translate-y-0 ${menuOpen
          ? "opacity-100 scale-100 translate-y-0 bg-gradient-to-br from-[#300e61] to-[#1b5571] lg:bg-transparent"
          : "opacity-0 scale-95 -translate-y-10 hidden"
          }`}
      >
        <ul className="text-white flex flex-col lg:flex-row gap-4 lg:gap-10 lg:text-[#ababab] lg:font-semibold">
          {["about", "education", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
