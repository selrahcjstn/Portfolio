import SectionTitle from "../SectionTitle";
import TimelineCard from "./TimelineCard.jsx";

function Education() {
    return (
        <section id="education" className="flex flex-col items-center pt-20 gap-8 w-full">
            <SectionTitle titleDesc="what i have studied so far" title="Education" />


            <TimelineCard />

        </section>
    );
}

export default Education;
