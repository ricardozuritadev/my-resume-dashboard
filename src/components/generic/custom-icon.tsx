import React from "react";
import { CustomIconSize, CustomIconColor } from "types/custom-icon.types";

type CustomIconProps = {
  icon: JSX.Element;
  iconColor: CustomIconColor;
  size: CustomIconSize;
  setSelectedHobbieDescription?: React.Dispatch<React.SetStateAction<string>>;
  setSelectedHobbieColor?: React.Dispatch<
    React.SetStateAction<CustomIconColor | undefined>
  >;
  showDetailsCard?: () => void;
  title?: string;
  description?: string;
};

const CustomIcon = ({
  icon,
  iconColor,
  size,
  setSelectedHobbieDescription,
  setSelectedHobbieColor,
  showDetailsCard,
  title,
  description
}: CustomIconProps) => {
  return (
    <div
      className="wraper"
      onClick={() => {
        if (
          !setSelectedHobbieDescription ||
          !setSelectedHobbieColor ||
          !showDetailsCard
        )
          return;
        setSelectedHobbieColor(iconColor);
        setSelectedHobbieDescription(description || "");
        showDetailsCard();
      }}
    >
      <div
        className={`c-custom-icon c-custom-icon--${iconColor} c-custom-icon--${size}`}
      >
        {icon}
      </div>
      {title && <p>{title}</p>}
    </div>
  );
};

export default CustomIcon;
