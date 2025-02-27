import Home from "./home/Home.jsx"
import About from "./about/About.jsx";
import Education from "./education/Education.jsx";

function Main() {
    return (
        <main className="text-[15px] flex flex-col gap-10 md:space-y-0 mx-auto max-w-[1400px] px-7 sm:px-10 md:px-15 lg:px-20 xl:px-30">
            <Home />
            <About />
            <Education />
        </main>
    )
}

export default Main;
