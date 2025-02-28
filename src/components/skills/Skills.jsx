import SectionTitle from '../SectionTitle.jsx'
import SectionDesign from '../../utils/SectionDesign.js';
import WCanIDo from './WCanIDo.jsx';
import TechStack from './Tech-Stack.jsx';
import Technologies from './FrontEnd.jsx';
function Skills() {
    return (
        <section id='skills' className={SectionDesign.css}>
            <SectionTitle titleDesc={'Technical Proficiencies'} title={'Skills'} />

            <WCanIDo />
            <TechStack />
            <Technologies />
        </section>
    )
}

export default Skills;