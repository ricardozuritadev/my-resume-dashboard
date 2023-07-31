import { buttonColor } from "types/button.types";

type ButtonProps = {
  children: React.ReactNode;
  color: buttonColor;
};

const Button = ({ children, color: btnColor }: ButtonProps) => {
  const buttonColor = btnColor ? btnColor : "yellow";

  return (
    <button className={`c-button c-button--${buttonColor}`}>{children}</button>
  );
};

export default Button;
