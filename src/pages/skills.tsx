import HardSkills from "components/hard-skills";
import HardSkillsChart from "components/hard-skills/hard-skills-chart";

const Skills = () => {
  return (
    <div className="p-skills">
      <section className="p-skills__hardskills">
        <h3 className="p-skills__subtitle">Hard skills</h3>
        <HardSkills />
        <HardSkillsChart />
      </section>

      <section className="p-skills__softskills">
        <h3 className="p-skills__subtitle">Soft skills</h3>
      </section>
    </div>
  );
};

export default Skills;
