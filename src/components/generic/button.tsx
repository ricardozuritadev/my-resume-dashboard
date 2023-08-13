import classNames from "classnames";

import { ButtonColor, ButtonSize } from "types/button.types";

type ButtonProps = {
  children: React.ReactNode;
  color: ButtonColor;
  size: ButtonSize;
  handleClick: () => void;
  isOutlineBtn?: boolean;
};

const Button = ({
  children,
  color,
  size,
  handleClick,
  isOutlineBtn
}: ButtonProps) => {
  const buttonClasses = classNames(
    "c-button",
    `c-button--${color}`,
    `c-button--${size}`,
    {
      "c-button--outline": isOutlineBtn
    }
  );

  return (
    <button onClick={handleClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
