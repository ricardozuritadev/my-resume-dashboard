import { useState } from "react";
import { useTranslation } from "react-i18next";

import { hard_skills_data } from "data/hard-skills";
import { soft_skills_data } from "data/soft-skills";

import { ChartData } from "types/hard-skill.types";

import HardSkillCard from "components/ad-hoc/hard-skills/hard-skill-card";
import HardSkillsChart from "components/ad-hoc/hard-skills/hard-skills-chart";
import SoftSkillsCard from "components/ad-hoc/soft-skills/soft-skills-card";

const SkillsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [xAxisData, setXAxisData] = useState<string[]>(
    hard_skills_data[0].items
  );
  const [chartData, setChartData] = useState<ChartData[]>(
    hard_skills_data[0].data
  );

  const { t } = useTranslation();

  return (
    <div className="p-skills">
      <section className="p-skills__hardskills">
        <h3 className="card__title p-skills__subtitle">Hard skills</h3>
        <div className="c-hard-skills">
          {hard_skills_data.map((hardSkill, index) => (
            <HardSkillCard
              key={hardSkill.id}
              {...hardSkill}
              title={t(hardSkill.title)}
              chartData={hardSkill.data}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              setXAxisData={setXAxisData}
              setChartData={setChartData}
            />
          ))}
        </div>
        <div className="c-hard-skills__chart">
          <HardSkillsChart xAxisData={xAxisData} chartData={chartData} />
        </div>
      </section>

      <section className="p-skills__softskills">
        <h3 className="card__title p-skills__subtitle">Soft skills</h3>
        <div className="c-soft-skills">
          {soft_skills_data.map((softSkill) => (
            <SoftSkillsCard
              key={softSkill.id}
              {...softSkill}
              text={t(softSkill.text)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
