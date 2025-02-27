function VerticalLine() {
    return (
        <div className="lg:flex lg:flex-col lg:items-center hidden">
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#9389fe]"></div>
            <div className="w-[4px] h-80 xl:h-92 xl:w-[5px] bg-gradient-to-b from-[#9389fe] to-[#1b1c21]"></div>
        </div>
    );
}

export default VerticalLine;
