import { useTranslation } from "react-i18next";

import { FaCode } from "react-icons/fa";

import { IconColor } from "types/card-item.types";

import { EXPERIENCE } from "constants/experience.constants";

import CardItem from "../about/hobbies-card/card-item";

type PositionCardProps = {
  position: string;
};

const PositionCard = ({ position }: PositionCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-position-card">
      <div>
        <CardItem
          icon={<FaCode size="4rem" />}
          iconColor={IconColor.green}
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
