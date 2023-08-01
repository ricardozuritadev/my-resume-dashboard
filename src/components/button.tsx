import { ButtonColor, ButtonSize } from "types/button.types";

type ButtonProps = {
  children: React.ReactNode;
  color: ButtonColor;
  size: ButtonSize;
  isOutlineBtn?: boolean;
};

const Button = ({ children, isOutlineBtn, color, size }: ButtonProps) => {
  const outlineBtn = isOutlineBtn ? "outline" : "";
  const buttonColor = color ? color : "yellow";
  const buttonSize = size ? size : "medium";

  return (
    <button
      className={`c-button c-button--${outlineBtn} c-button--${buttonColor} c-button--${buttonSize}`}
    >
      {children}
    </button>
  );
};

export default Button;
