import Home from "../components/Home.jsx"
import About from "../components/About.jsx"

function Main() {
    return (
        <main className="flex text-[15px] flex-col mx-auto max-w-[1200px] px-7 sm:px-10 md:px-15 lg:px-20">
            <Home />
            <About />
        </main>
    )
}

export default Main;
