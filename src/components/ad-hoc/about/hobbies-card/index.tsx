import { useState } from "react";
import { useTranslation } from "react-i18next";

import classNames from "classnames";

import { hobbies_data } from "data/hobbies";
import { ABOUT_CONSTANTS } from "constants/about.constants";

import { CustomIconColor, CustomIconSize } from "types/custom-icon.types";

import { FaAngleDown } from "react-icons/fa";
import CustomIcon from "components/generic/custom-icon";

const HobbiesCard = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);
  const [selectedHobbieDescription, setSelectedHobbieDescription] =
    useState<string>("");
  const [selectedHobbieColor, setSelectedHobbieColor] = useState<
    CustomIconColor | undefined
  >(undefined);

  const { t } = useTranslation();

  const detailsClasses = classNames(
    "c-hobbies-card__details",
    `c-hobbies-card__details--${selectedHobbieColor}`,
    {
      "c-hobbies-card__details--visible": isDetailsVisible
    }
  );

  const showDetailsCard = () => setIsDetailsVisible(!isDetailsVisible);
  const hideDetailsCard = () => setIsDetailsVisible(false);

  return (
    <div className="card c-hobbies-card">
      <div className="card__header">
        <h3 className="card__title">{ABOUT_CONSTANTS.HOBBIES}</h3>
        <div></div>
      </div>
      <div className="c-hobbies-card__container">
        {hobbies_data.map((hobbie) => (
          <CustomIcon
            key={hobbie.id}
            icon={hobbie.icon}
            iconColor={hobbie.iconColor as CustomIconColor}
            size={CustomIconSize.large}
            setSelectedHobbieDescription={setSelectedHobbieDescription}
            setSelectedHobbieColor={setSelectedHobbieColor}
            showDetailsCard={showDetailsCard}
            title={t(hobbie.title)}
            description={t(hobbie.description)}
          />
        ))}
      </div>
      <div className={detailsClasses}>
        <FaAngleDown size={50} cursor="pointer" onClick={hideDetailsCard} />
        {selectedHobbieDescription && (
          <p className="c-hobbies-card__description">
            {selectedHobbieDescription}
          </p>
        )}
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default HobbiesCard;
