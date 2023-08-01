import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IconColor } from "types/card-item.types";

type CardItemProps = {
  icon: IconDefinition;
  iconColor: IconColor;
  text: string;
};

const CardItem = ({ icon, iconColor, text }: CardItemProps) => {
  return (
    <div className="c-card-item">
      <FontAwesomeIcon
        icon={icon}
        className={`c-card-item__icon c-card-item__icon--${iconColor}`}
      />
      <p>{text}</p>
    </div>
  );
};

export default CardItem;
