import { useTranslation } from "react-i18next";

import { formatDates } from "utils/functions";

import { EXPERIENCE } from "constants/experience.constants";

import { Experience } from "types/experience.types";

import PositionCard from "components/ad-hoc/experience/position-card";
import ResponsibilitiesCard from "./responsibilities-card";
import AppliedSkills from "./applied-skills";
import CardTitle from "components/generic/card-title";

type ExperienceDetailsProps = {
  selectedExperience: Experience;
};

const ExperienceDetails = ({ selectedExperience }: ExperienceDetailsProps) => {
  const { t } = useTranslation();

  const color =
    selectedExperience.positionIcon === "developer" ? "#a02cfa" : "#ffbc11";

  return (
    <div
      className="c-experience-details"
      style={{ border: `3px solid ${color}` }}
    >
      <section className="c-experience-details__first">
        <CardTitle title={t(selectedExperience.company)} />

        <p className="c-experience-details__dates">
          {formatDates(selectedExperience.initialDate, t)} -{" "}
          {selectedExperience.endDate
            ? formatDates(selectedExperience.endDate, t)
            : t(EXPERIENCE.CURRENTLY)}
        </p>

        <PositionCard
          position={selectedExperience.position}
          positionIcon={selectedExperience.positionIcon}
        />
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
        <CardTitle title={t(EXPERIENCE.LEARNING)} />

        <p className="c-experience-details__text">
          {t(selectedExperience.learning)}
        </p>

        <CardTitle title={t(EXPERIENCE.CHALENGES)} />

        <p className="c-experience-details__text">
          {t(selectedExperience.challenges)}
        </p>
      </section>
    </div>
  );
};

export default ExperienceDetails;
