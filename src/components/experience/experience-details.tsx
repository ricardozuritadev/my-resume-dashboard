import { useTranslation } from "react-i18next";

import { formatDates } from "utils/functions";

import { EXPERIENCE } from "constants/experience.constants";

import { Experience } from "types/experience.types";

import PositionCard from "components/experience/position-card";
import ResponsibilitiesCard from "./responsibilities-card";
import AppliedSkills from "./applied-skills";

type ExperienceDetailsProps = {
  selectedExperience: Experience;
};

const ExperienceDetails = ({ selectedExperience }: ExperienceDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-experience-details">
      <div className="c-experience-details__first">
        <h3 className="card__title c-experience-details__company">
          {t(selectedExperience.company)}
        </h3>
        <p className="c-experience-details__dates">
          {formatDates(selectedExperience.initialDate, t)} -{" "}
          {selectedExperience.endDate
            ? formatDates(selectedExperience.endDate, t)
            : t(EXPERIENCE.CURRENTLY)}
        </p>
        <p className="c-experience-details__description">
          {t(selectedExperience.description)}
        </p>
      </div>

      <div className="c-experience-details__second">
        <PositionCard position={selectedExperience.position} />
        <ResponsibilitiesCard
          responsibilities={selectedExperience.responsibilities}
        />
      </div>

      <div className="c-experience-details__third">
        <AppliedSkills appliedSkills={selectedExperience.appliedSkills} />

        <div>
          <h3>{t(EXPERIENCE.LEARNING)}</h3>
          <p>{t(selectedExperience.learning)}</p>
        </div>

        <div>
          <h3>{t(EXPERIENCE.CHALENGES)}</h3>
          <p>{t(selectedExperience.challenges)}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
