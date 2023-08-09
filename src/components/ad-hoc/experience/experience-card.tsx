import { Experience } from "types/experience.types";
import Tag from "../../generic/tag";
import { calculateExperienceDuration } from "utils/functions";
import { useTranslation } from "react-i18next";
import { EXPERIENCE } from "constants/experience.constants";
import { EXPERIENCE_DATA } from "utils/data/experience";

type ExperienceCardProps = {
  companyName: string;
  initialDate: string;
  endDate: string | null;
  index: number;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  setSelectedExperience: React.Dispatch<React.SetStateAction<Experience>>;
};

const ExperienceCard = ({
  companyName,
  initialDate,
  endDate,
  index,
  selectedIndex,
  setSelectedIndex,
  setSelectedExperience
}: ExperienceCardProps) => {
  const { t } = useTranslation();

  const duration = calculateExperienceDuration(initialDate, endDate, t);

  const cardSelectedStyle =
    selectedIndex === index
      ? {
          border: `3px solid #a02cfa`,
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 20px 0px"
        }
      : {};

  const selectExperience = () => {
    setSelectedIndex(index);
    setSelectedExperience(EXPERIENCE_DATA[index]);
  };
  return (
    <div
      className="c-experience-card"
      style={cardSelectedStyle}
      data-company={companyName}
      onClick={selectExperience}
    >
      <Tag text={`${duration ? duration : t(EXPERIENCE.CURRENTLY)}`} />
    </div>
  );
};

export default ExperienceCard;
