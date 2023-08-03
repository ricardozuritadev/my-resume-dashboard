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
            <p>
              ¡Hola! Soy Ricardo, desarrollador Front End y de aplicaciones
              multiplataforma.
            </p>
            <p>
              Al inicio, la programación era una curiosidad para mí. Ahora se ha
              convertido en una pasión y día a día estoy mejorando y en
              constante aprendizaje de nuevas tecnologías.
            </p>
            <p>En esta página encontrarás más información sobre mí.</p>
            <p>¡Gracias por la visita!</p>
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
