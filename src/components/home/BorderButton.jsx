function BorderButton() {
    return (
        <button className="relative px-5 sm:px-6 py-2 text-white text-base sm:text-lg md:text-xl rounded-lg border-2 border-[#7795d3] overflow-hidden transition-all group">
            <span className="cursor-pointer relative z-10">Contact</span>
            <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-[#6a4faa] to-[#4d74c0] w-full h-full left-0 top-0 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
        </button>
    )
}

export default BorderButton