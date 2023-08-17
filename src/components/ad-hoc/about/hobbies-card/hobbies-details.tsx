import classNames from "classnames";
import { FaAngleDown } from "react-icons/fa";
import { CustomIconColor } from "types/custom-icon.types";

type HobbiesDetailsProps = {
  onClick: () => void;
  isDetailsVisible: boolean;
  selectedHobbieDescription: string;
  selectedHobbieColor: CustomIconColor | undefined;
};

const HobbiesDetails = ({
  onClick,
  isDetailsVisible,
  selectedHobbieDescription,
  selectedHobbieColor
}: HobbiesDetailsProps) => {
  const detailsClasses = classNames(
    "c-hobbies-card__details",
    `c-hobbies-card__details--${selectedHobbieColor}`,
    {
      "c-hobbies-card__details--visible": isDetailsVisible
    }
  );

  return (
    <div className={detailsClasses}>
      <FaAngleDown size={40} cursor="pointer" onClick={onClick} />
      {selectedHobbieDescription && (
        <p className="c-hobbies-card__description">
          {selectedHobbieDescription}
        </p>
      )}
      <div></div>
    </div>
  );
};

export default HobbiesDetails;
