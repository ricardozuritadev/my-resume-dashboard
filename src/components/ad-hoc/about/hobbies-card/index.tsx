import { useState } from "react";
import { useTranslation } from "react-i18next";

import { hobbies_data } from "data/hobbies";
import { ABOUT_CONSTANTS } from "constants/about.constants";

import { CustomIconColor, CustomIconSize } from "types/custom-icon.types";

import CustomIcon from "components/generic/custom-icon";
import CardTitle from "components/generic/card-title";
import HobbiesDetails from "./hobbies-details";

const HobbiesCard = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);
  const [selectedHobbieDescription, setSelectedHobbieDescription] =
    useState<string>("");
  const [selectedHobbieColor, setSelectedHobbieColor] = useState<
    CustomIconColor | undefined
  >(undefined);

  const { t } = useTranslation();

  const showDetailsCard = () => setIsDetailsVisible(!isDetailsVisible);
  const handleHideDetails = () => setIsDetailsVisible(false);

  return (
    <div className="card c-hobbies-card">
      <CardTitle
        title={ABOUT_CONSTANTS.HOBBIES}
        subtitle={t(ABOUT_CONSTANTS.VIEW_DETAILS)}
      />

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

      <HobbiesDetails
        onClick={handleHideDetails}
        isDetailsVisible={isDetailsVisible}
        selectedHobbieDescription={selectedHobbieDescription}
        selectedHobbieColor={selectedHobbieColor}
      />
    </div>
  );
};

export default HobbiesCard;
