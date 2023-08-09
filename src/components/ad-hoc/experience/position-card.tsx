import { useTranslation } from "react-i18next";

import { FaCode, FaChalkboardTeacher } from "react-icons/fa";

import { EXPERIENCE } from "constants/experience.constants";

import { Position } from "types/experience.types";
import { CustomIconSize, CustomIconColor } from "types/custom-icon.types";

import CustomIcon from "../../generic/custom-icon";

type PositionCardProps = {
  position: string;
  positionIcon: Position;
};

const PositionCard = ({ position, positionIcon }: PositionCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-position-card">
      <div>
        <CustomIcon
          icon={
            positionIcon === "developer" ? (
              <FaCode size={30} />
            ) : (
              <FaChalkboardTeacher size={30} />
            )
          }
          iconColor={
            positionIcon === "developer"
              ? CustomIconColor.purple
              : CustomIconColor.yellow
          }
          size={CustomIconSize.small}
          text=""
        />
      </div>
      <div>
        <p>{t(EXPERIENCE.POSITION)}</p>
        <h4 className="card__title">{t(position)}</h4>
      </div>
    </div>
  );
};

export default PositionCard;
