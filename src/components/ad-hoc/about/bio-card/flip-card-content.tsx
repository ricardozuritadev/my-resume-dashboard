import { ReactElement } from "react";

const FlipCardContent = ({
  children
}: {
  children: ReactElement | ReactElement[];
}) => {
  return <div className="c-flip-card__content">{children}</div>;
};

export default FlipCardContent;
