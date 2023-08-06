import { IconColor } from "types/card-item.types";

type CardItemProps = {
  icon: JSX.Element;
  iconColor: IconColor;
  text: string;
};

const CardItem = ({ icon, iconColor, text }: CardItemProps) => {
  return (
    <div className="wraper">
      <div className={`c-card-item c-card-item--${iconColor}`}>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default CardItem;
