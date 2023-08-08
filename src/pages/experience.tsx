import ExperienceCard from "components/experience/experience-card";
import ExperienceDetails from "components/experience/experience-details";

const Experience = () => {
  return (
    <div className="p-experience">
      <section className="p-experience__cards">
        <div className="p-experience__cards-container">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </section>

      <section className="p-experience__details">
        <ExperienceDetails />
      </section>
    </div>
  );
};

export default Experience;
