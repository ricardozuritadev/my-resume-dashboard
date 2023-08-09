import { IconColor } from "types/card-item.types";

type CardItemProps = {
  icon: JSX.Element;
  iconColor: IconColor;
  text?: string;
};

const CardItem = ({ icon, iconColor, text }: CardItemProps) => {
  return (
    <div className="wraper">
      <div className={`c-custom-icon c-custom-icon--${iconColor}`}>{icon}</div>
      {text && <p>{text}</p>}
    </div>
  );
};

export default CardItem;
