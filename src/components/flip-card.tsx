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
              Al inicio, la programación era una curiosidad para mí. Ahora se ha
              convertido en una pasión y día a día estoy mejorando y en
              constante aprendizaje de nuevas tecnologías.
            </p>
            <p>
              Lo que más disfruto es desarrollar plataformas o apps que
              solucionen algún problema cotidiano. Ya sea una plataforma para
              gestionar tareas de mi trabajo o una app para controlar las
              finanzas con mi pareja. Sé que hay muchas soluciones ya en el
              mercado, pero busco desarrollar una a medida y con la satisfacción
              de haberla realizado yo mismo, con el aprendizaje que ello
              conlleva.
            </p>
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
