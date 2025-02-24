import { useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="inline-flex bg-[#121027] justify-between items-center py-4 px-7 md:px-15 w-full fixed z-50 xl:px-40">
      <Logo />
      <MenuButton menuOpen={menuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}

export default Header;
