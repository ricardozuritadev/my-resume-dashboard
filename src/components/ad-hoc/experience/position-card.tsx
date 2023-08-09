import { useTranslation } from "react-i18next";

import { FaCode } from "react-icons/fa";

import { CustomIconSize, CustomIconColor } from "types/custom-icon.types";

import { EXPERIENCE } from "constants/experience.constants";

import CustomIcon from "../../generic/custom-icon";

type PositionCardProps = {
  position: string;
};

const PositionCard = ({ position }: PositionCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-position-card">
      <div>
        <CustomIcon
          icon={<FaCode size={30} />}
          iconColor={CustomIconColor.purple}
          size={CustomIconSize.small}
          text=""
        />
      </div>
      <div>
        <p>{t(EXPERIENCE.POSITION)}</p>
        <h3>{t(position)}</h3>
      </div>
    </div>
  );
};

export default PositionCard;
