import { useState } from "react";

import { EXPERIENCE_DATA } from "utils/data/experience";

import { Experience } from "types/experience.types";

import ExperienceCard from "components/ad-hoc/experience/experience-card";
import ExperienceDetails from "components/ad-hoc/experience/experience-details";

const ExperiencePage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    EXPERIENCE_DATA[0]
  );

  return (
    <div className="p-experience">
      <section className="p-experience__cards">
        <div className="p-experience__cards-container">
          {EXPERIENCE_DATA.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              companyName={experience.company}
              initialDate={experience.initialDate}
              endDate={experience.endDate}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              setSelectedExperience={setSelectedExperience}
            />
          ))}
        </div>
      </section>

      <section className="p-experience__details">
        <ExperienceDetails selectedExperience={selectedExperience} />
      </section>
    </div>
  );
};

export default ExperiencePage;
