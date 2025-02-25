import SectionTitle from "../SectionTitle"
import TimelineCard from "./TimelineCard.jsx"
function Education() {

    return (
        <section id="education" className="flex flex-col pt-22 md:pt-26  items-center justify-center md:gap-12 md:justify-center gap-8 w-full">
            <SectionTitle titleDesc='WHAT I HAVE STUDIED SO FAR' title='Education' />

            <TimelineCard />
        </section>
    )
}

export default Education
