import aboutData from "../../data/about-data";
import { useState } from "react";
import SectionTitle from "../SectionTitle.jsx";
import AboutSectionImage from "./AboutSectionImage.jsx";
import AboutDescriptions from "./AboutDescriptions.jsx";

function About() {
    const [data] = useState(aboutData)

    return (
        <section id="about" className="flex flex-col items-center md:gap-12 md:justify-center h-screen gap-8 pt-20 sm:pt-0 w-full">
            <SectionTitle />
            <div className="flex flex-col items-center lg:justify-center gap-13 sm:flex-row sm:items-start ">
                <AboutSectionImage
                    img={data.img}
                />
                <AboutDescriptions
                    paragraphs={data.paragraphs}
                />
            </div>
        </section >
    )
}

export default About;