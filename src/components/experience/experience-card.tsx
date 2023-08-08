import { Experience } from "types/experience.types";
import Tag from "../tag";
import { calculateExperienceDuration } from "utils/functions";
import { useTranslation } from "react-i18next";
import { EXPERIENCE } from "constants/experience.constants";

type ExperienceCardProps = {
  companyName: string;
  initialDate: string;
  endDate: string | null;
  setSelectedExperience: React.Dispatch<React.SetStateAction<Experience>>;
};

const ExperienceCard = ({
  companyName,
  initialDate,
  endDate,
  setSelectedExperience
}: ExperienceCardProps) => {
  const { t } = useTranslation();

  const duration = calculateExperienceDuration(initialDate, endDate, t);

  return (
    <div
      className="c-experience-card"
      data-company={companyName}
      onClick={() => setSelectedExperience}
    >
      <Tag text={`${duration ? duration : t(EXPERIENCE.CURRENTLY)}`} />
    </div>
  );
};

export default ExperienceCard;
