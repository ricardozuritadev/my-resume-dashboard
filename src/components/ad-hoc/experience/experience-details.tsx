import { useTranslation } from "react-i18next";

import { formatDates } from "utils/functions";

import { EXPERIENCE } from "constants/experience.constants";

import { Experience } from "types/experience.types";

import PositionCard from "components/ad-hoc/experience/position-card";
import ResponsibilitiesCard from "./responsibilities-card";
import AppliedSkills from "./applied-skills";

type ExperienceDetailsProps = {
  selectedExperience: Experience;
};

const ExperienceDetails = ({ selectedExperience }: ExperienceDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-experience-details">
      <section className="c-experience-details__first">
        <div>
          <h3 className="card__title c-experience-details__company">
            {t(selectedExperience.company)}
          </h3>
          <p className="c-experience-details__dates">
            {formatDates(selectedExperience.initialDate, t)} -{" "}
            {selectedExperience.endDate
              ? formatDates(selectedExperience.endDate, t)
              : t(EXPERIENCE.CURRENTLY)}
          </p>
        </div>
        <PositionCard position={selectedExperience.position} />
        <p className="c-experience-details__description">
          {t(selectedExperience.description)}
        </p>
      </section>

      <section className="c-experience-details__second">
        <AppliedSkills appliedSkills={selectedExperience.appliedSkills} />
        <ResponsibilitiesCard
          responsibilities={selectedExperience.responsibilities}
        />
      </section>

      <section className="c-experience-details__third">
        <div>
          <h3 className="card__title c-experience-details__subtitle">
            {t(EXPERIENCE.LEARNING)}
          </h3>
          <p className="c-experience-details__text">
            {t(selectedExperience.learning)}
          </p>
        </div>

        <div>
          <h3 className="card__title c-experience-details__subtitle">
            {t(EXPERIENCE.CHALENGES)}
          </h3>
          <p className="c-experience-details__text">
            {t(selectedExperience.challenges)}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetails;
