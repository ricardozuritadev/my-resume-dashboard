import { useTranslation } from "react-i18next";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import { IconColor } from "types/card-item.types";

import { FaGuitar, FaCode, FaTicketAlt, FaGamepad } from "react-icons/fa";

import CardItem from "components/about/hobbies-card/card-item";

const HobbiesCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card c-hobbies-card">
      <div className="card__header">
        <h3>{ABOUT_CONSTANTS.HOBBIES}</h3>
        <div></div>
      </div>
      <div className="c-hobbies-card__container">
        <CardItem
          icon={<FaGuitar size="4rem" />}
          iconColor={IconColor.orange}
          text={t(ABOUT_CONSTANTS.GUITAR)}
        />
        <CardItem
          icon={<FaCode size="4rem" />}
          iconColor={IconColor.purple}
          text={t(ABOUT_CONSTANTS.CODE)}
        />
        <CardItem
          icon={<FaTicketAlt size="4rem" />}
          iconColor={IconColor.white}
          text={t(ABOUT_CONSTANTS.MOVIES)}
        />
        <CardItem
          icon={<FaGamepad size="4rem" />}
          iconColor={IconColor.yellow}
          text={t(ABOUT_CONSTANTS.VIDEOGAMES)}
        />
      </div>
    </div>
  );
};

export default HobbiesCard;
