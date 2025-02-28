import SectionTitle from "../SectionTitle";
import TimelineCard from "./TimelineCard.jsx";
import SectionDesign from "../../utils/SectionDesign.js";

function Education() {
    return (
        <section id="education" className={SectionDesign.css}>
            <SectionTitle titleDesc="what i have studied so far" title="Education" />


            <TimelineCard />

        </section>
    );
}

export default Education;
