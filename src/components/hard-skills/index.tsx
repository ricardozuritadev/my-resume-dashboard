import { HARD_SKILLS } from "utils/data/hard-skills";

import HardSkillCard from "./hard-skill-card";

const HardSkills = () => {
  return (
    <div className="c-hard-skills">
      {HARD_SKILLS.map((hardSkill) => (
        <HardSkillCard key={hardSkill.id} {...hardSkill} />
      ))}
    </div>
  );
};

export default HardSkills;
