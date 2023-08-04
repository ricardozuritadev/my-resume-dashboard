import { useTranslation } from "react-i18next";

import { HARD_SKILLS } from "utils/data/hard-skills";

import HardSkillCard from "./hard-skill-card";

const HardSkills = () => {
  const { t } = useTranslation();

  return (
    <div className="c-hard-skills">
      {HARD_SKILLS.map((hardSkill) => (
        <HardSkillCard
          key={hardSkill.id}
          id={hardSkill.id}
          title={t(hardSkill.title)}
          icons={hardSkill.icons}
        />
      ))}
    </div>
  );
};

export default HardSkills;
