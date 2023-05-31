import { Section } from "../Section";
import { skillsList } from "./skillsList";
import { futureSkills } from "./futureSkills";

export const Skills = () => (
    <>
        <Section 
            title="My skillset includes 🛠️" 
            skills={skillsList}
        >
        </Section>
        <Section
            title="What I want to learn next&nbsp;🚀"
            skills={futureSkills}
        >
        </Section>
    </>
);
