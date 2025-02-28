function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <nav
            className={`absolute top-16 right-7 md:top-20 md:right-14 sm:right-7 rounded-[12px] px-8 py-5 flex flex-col text-[16px] lg:text-[18px] transition-all duration-300 ease-in-out transform lg:static lg:w-auto lg:bg-transparent lg:flex-row lg:items-center lg:p-0 lg:flex lg:opacity-100 lg:scale-100 lg:translate-y-0 ${menuOpen
                ? "opacity-100 scale-100 translate-y-0 bg-[#232329]  lg:bg-transparent"
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
    )
}

export default Navbar