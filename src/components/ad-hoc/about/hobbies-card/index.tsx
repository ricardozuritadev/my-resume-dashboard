import { useTranslation } from "react-i18next";

import { HOBBIES } from "utils/data/hobbies";
import { ABOUT_CONSTANTS } from "constants/about.constants";

import { IconColor } from "types/card-item.types";

import CustomIcon from "components/generic/custom-icon";

const HobbiesCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card c-hobbies-card">
      <div className="card__header">
        <h3 className="card__title">{ABOUT_CONSTANTS.HOBBIES}</h3>
        <div></div>
      </div>
      <div className="c-hobbies-card__container">
        {HOBBIES.map((hobbie) => (
          <CustomIcon
            key={hobbie.id}
            icon={hobbie.icon}
            iconColor={hobbie.iconColor as IconColor}
            text={t(hobbie.text)}
          />
        ))}
      </div>
    </div>
  );
};

export default HobbiesCard;
