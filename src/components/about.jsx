import { Section } from "lucide-react";
import SectionTitle from "./sectionTitle";

const About = () => {
    return <section id="about" className='mt-24'>
        <div className="container relative flex flex-col items-center gap-y-9">
            <SectionTitle/>
        </div>
    </section>;
};

export default About;