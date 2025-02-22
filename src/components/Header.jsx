import { ImPacman } from "react-icons/im";

function Header() {
  return (
    <header className="flex px-34 py-6 justify-between bg-transparent items-center w-full fixed">
      <div className="flex items-center gap-3">
        <ImPacman className="text-[#64229e] text-4xl" />
        <h1 className="text-[28px] font-bold bg-gradient-to-r from-[#8a5ce1] to-[#56b6e3] bg-clip-text text-transparent text-4xl" style={{ fontFamily: "Dancing Script" }} >{'<Charles Justine/>'}</h1>
      </div>
      <nav className="flex items-center gap-16">
        <ul className="flex gap-14 text-xl text-[#ababab] font-semibold">
          <li className="hover:text-[#ababab] cursor-pointer transition-colors transition-75">About</li>
          <li className="hover:text-[#ababab] cursor-pointer transition-colors">Education</li>
          <li className="hover:text-[#ababab] cursor-pointer transition-colors">Skills</li>
          <li className="hover:text-[#ababab] cursor-pointer transition-colors">Projects</li>
          <li className="hover:text-[#ababab] cursor-pointer transition-colors">Contact</li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
