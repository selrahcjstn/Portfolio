function AboutSectionImage({ img }) {
    return (
        <div>
            <div className="bg-[#3c3678] pb-9 rounded-2xl overflow-hidden shadow-[0px_10px_40px_rgba(255,255,255,0.1),0px_-10px_40px_rgba(255,255,255,0.02)] sm:min-w-[250px] flex-1">

                <div className="flex items-center justify-between flex-1 px-4 py-3 ">
                    <div className="flex gap-2">
                        <div className="bg-[#ce3d3d] w-3 h-3 rounded-full "></div>
                        <div className="bg-[#ffed28] w-3 h-3 rounded-full "></div>
                        <div className="bg-[#5ded31] w-3 h-3 rounded-full "></div>
                    </div>
                    <p className="text-[#eaeaea] cursor-pointer">about me</p>
                </div>
                <div className=" bg-[#fff] w-65 h-70  overflow-hidden opacity-95">
                    <img src={img} alt="" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default AboutSectionImage