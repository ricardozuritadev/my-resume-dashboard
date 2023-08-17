import { useTranslation } from "react-i18next";

import classNames from "classnames";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import { ButtonColor, ButtonSize } from "types/button.types";

import Button from "components/generic/button";
import { useState } from "react";
import CardTitle from "components/generic/card-title";
import FlipCardContent from "./flip-card-content";

const FlipCard = () => {
  const [flip, setFlip] = useState<boolean>(false);

  const { t } = useTranslation();

  const flipCardClasses = classNames("c-flip-card", {
    flip
  });

  return (
    <div className="c-flip-container" onClick={() => setFlip(!flip)}>
      <div className={flipCardClasses}>
        <div className="c-flip-card__back">
          <FlipCardContent>
            <p>{t(ABOUT_CONSTANTS.BIO_FIRST_PART)}</p>
            <p>{t(ABOUT_CONSTANTS.BIO_SECOND_PART)}</p>
          </FlipCardContent>

          <Button
            color={ButtonColor.purple}
            size={ButtonSize.medium}
            handleClick={() => setFlip(!flip)}
          >
            {t(ABOUT_CONSTANTS.BACK)}
          </Button>
        </div>

        <div className="c-flip-card__front">
          <CardTitle title={ABOUT_CONSTANTS.BIO} />
          <Button
            color={ButtonColor.purple}
            size={ButtonSize.medium}
            handleClick={() => setFlip(!flip)}
          >
            {t(ABOUT_CONSTANTS.MY_STORY)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
