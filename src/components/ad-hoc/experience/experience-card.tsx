import { useTranslation } from "react-i18next";

import { calculateExperienceDuration } from "utils/functions";

import { EXPERIENCE } from "constants/experience.constants";

import { Experience, Position } from "types/experience.types";

import { experience_data } from "data/experience";

import Tag from "components/generic/tag";

type ExperienceCardProps = {
  companyName: string;
  initialDate: string;
  endDate: string | null;
  positionIcon: Position;
  index: number;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  setSelectedExperience: React.Dispatch<React.SetStateAction<Experience>>;
};

const ExperienceCard = ({
  companyName,
  initialDate,
  endDate,
  positionIcon,
  index,
  selectedIndex,
  setSelectedIndex,
  setSelectedExperience
}: ExperienceCardProps) => {
  const { t } = useTranslation();

  const duration = calculateExperienceDuration(initialDate, endDate, t);

  console.log("=> positionIcon: ", positionIcon);

  const color = positionIcon === "developer" ? "#a02cfa" : "#ffbc11";

  const cardSelectedStyle =
    selectedIndex === index
      ? {
          border: `3px solid ${color}`
        }
      : {};

  const selectExperience = () => {
    setSelectedIndex(index);
    setSelectedExperience(experience_data[index]);
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
