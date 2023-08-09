import { CustomIconSize, CustomIconColor } from "types/custom-icon.types";

type CustomIconProps = {
  icon: JSX.Element;
  iconColor: CustomIconColor;
  size: CustomIconSize;
  text?: string;
};

const CustomIcon = ({ icon, iconColor, size, text }: CustomIconProps) => {
  return (
    <div className="wraper">
      <div
        className={`c-custom-icon c-custom-icon--${iconColor} c-custom-icon--${size}`}
      >
        {icon}
      </div>
      {text && <p>{text}</p>}
    </div>
  );
};

export default CustomIcon;
