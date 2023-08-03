import { useTranslation } from "react-i18next";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import { ButtonColor, ButtonSize } from "types/button.types";

import Button from "components/button";
import { useState } from "react";

const FlipCard = () => {
  const [flip, setFlip] = useState<boolean>(false);

  const { t } = useTranslation();

  const flipStyles = flip ? "flip" : "";

  return (
    <div className="c-flip-container">
      <div className={`c-flip-card ${flipStyles}`}>
        <div className="c-flip-card__back">
          <div></div>
          <div className="c-flip-card__content">
            <p>{t(ABOUT_CONSTANTS.BIO_FIRST_PART)}</p>
            <p>{t(ABOUT_CONSTANTS.BIO_SECOND_PART)}</p>
            <p> {t(ABOUT_CONSTANTS.BIO_THIRD_PART)}</p>
            <p> {t(ABOUT_CONSTANTS.BIO_FOURTH_PART)}</p>
          </div>
          <Button
            color={ButtonColor.yellow}
            size={ButtonSize.medium}
            handleClick={() => {
              setFlip(!flip);
            }}
          >
            {t(ABOUT_CONSTANTS.BACK)}
          </Button>
        </div>
        <div className="c-flip-card__front">
          <div className="card__header">
            <h3>{ABOUT_CONSTANTS.BIO}</h3>
          </div>
          <Button
            color={ButtonColor.yellow}
            size={ButtonSize.medium}
            handleClick={() => {
              setFlip(!flip);
            }}
          >
            {t(ABOUT_CONSTANTS.MY_STORY)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
