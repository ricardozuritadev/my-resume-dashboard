import HardSkills from "components/skills/hard-skills";

const Skills = () => {
  return (
    <div className="p-skills">
      <section className="p-skills__hardskills">
        <h3>Hard skills</h3>
        <HardSkills />
      </section>

      <section className="p-skills__softskills">
        <h3>Soft skills</h3>
      </section>
    </div>
  );
};

export default Skills;
