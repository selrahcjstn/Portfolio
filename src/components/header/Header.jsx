import { useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return ( //121027
    <header className="inline-flex bg-[#1b1c21] justify-between items-center py-4 px-7 md:px-15 w-full fixed z-50 lg:px- xl:px-50">
      <Logo />
      <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}

export default Header;
