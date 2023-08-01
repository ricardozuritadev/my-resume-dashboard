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
  const outlineBtn = isOutlineBtn ? "outline" : "";
  const buttonColor = color ? color : "yellow";
  const buttonSize = size ? size : "medium";

  return (
    <button
      onClick={handleClick}
      className={`c-button c-button--${outlineBtn} c-button--${buttonColor} c-button--${buttonSize}`}
    >
      {children}
    </button>
  );
};

export default Button;
