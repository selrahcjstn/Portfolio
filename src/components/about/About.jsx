import aboutData from "../../data/about-data";
import { useState } from "react";
import SectionTitle from "../SectionTitle.jsx";
import AboutSectionImage from "./AboutSectionImage.jsx";
import AboutDescriptions from "./AboutDescriptions.jsx";
import SectionDesign from '../../utils/SectionDesign.js'
function About() {
    const [data] = useState(aboutData)


    return (
        <section id="about" className={SectionDesign.css}>
            <SectionTitle titleDesc='Introduction' title='Overview' />
            <div className="flex flex-col items-center  lg:justify-center lg:items-center gap-13 sm:flex-row sm:items-center ">
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