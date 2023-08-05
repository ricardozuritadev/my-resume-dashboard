import HardSkillCard from "components/hard-skills/hard-skill-card";
import HardSkillsChart from "components/hard-skills/hard-skills-chart";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HARD_SKILLS } from "utils/data/hard-skills";

const Skills = () => {
  const [xAxisData, setXAxisData] = useState<string[]>(
    HARD_SKILLS[0].languages
  );
  const [seriesData, setSeriesData] = useState<number[]>(
    HARD_SKILLS[0].percentages
  );

  const { t } = useTranslation();

  return (
    <div className="p-skills">
      <section className="p-skills__hardskills">
        <h3 className="p-skills__subtitle">Hard skills</h3>
        <div className="c-hard-skills">
          {HARD_SKILLS.map((hardSkill) => (
            <HardSkillCard
              key={hardSkill.id}
              {...hardSkill}
              title={t(hardSkill.title)}
              setXAxisData={setXAxisData}
              setSeriesData={setSeriesData}
            />
          ))}
        </div>
        <HardSkillsChart xAxisData={xAxisData} seriesData={seriesData} />
      </section>

      <section className="p-skills__softskills">
        <h3 className="p-skills__subtitle">Soft skills</h3>
      </section>
    </div>
  );
};

export default Skills;
