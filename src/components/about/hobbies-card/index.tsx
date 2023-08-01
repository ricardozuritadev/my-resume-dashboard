import { useTranslation } from "react-i18next";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import { IconColor } from "types/card-item.types";

import {
  faCode,
  faGamepad,
  faGuitar,
  faTicketSimple
} from "@fortawesome/free-solid-svg-icons";

import CardItem from "components/about/hobbies-card/card-item";

const HobbiesCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card c-hobbies-card">
      <div className="card__header">
        <h2>{ABOUT_CONSTANTS.HOBBIES}</h2>
        <div></div>
      </div>
      <div className="c-hobbies-card__container">
        <CardItem
          icon={faGuitar}
          iconColor={IconColor.orange}
          text={t(ABOUT_CONSTANTS.GUITAR)}
        />
        <CardItem
          icon={faCode}
          iconColor={IconColor.yellow}
          text={t(ABOUT_CONSTANTS.CODE)}
        />
        <CardItem
          icon={faTicketSimple}
          iconColor={IconColor.purple}
          text={t(ABOUT_CONSTANTS.MOVIES)}
        />
        <CardItem
          icon={faGamepad}
          iconColor={IconColor.white}
          text={t(ABOUT_CONSTANTS.VIDEOGAMES)}
        />
      </div>
    </div>
  );
};

export default HobbiesCard;
