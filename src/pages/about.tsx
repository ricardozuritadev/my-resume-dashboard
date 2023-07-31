import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import { buttonColor } from "types/button.types";

import Button from "components/button";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="p-about">
      <div className="p-about__card p-about__card--bio">
        <Button color={buttonColor.yellow}>
          {t(ABOUT_CONSTANTS.MY_STORY)}
        </Button>
      </div>

      <div className="p-about__card p-about__cv">
        <div className="p-about__card-header">
          <h3>{t(ABOUT_CONSTANTS.RESUME)}</h3>
          <p>{t(ABOUT_CONSTANTS.YEAR)}</p>
        </div>
        <FontAwesomeIcon icon={faFilePdf} size="7x" className="p-about__pdf" />
        <Button color={buttonColor.yellow}>
          {t(ABOUT_CONSTANTS.DOWNLOAD_RESUME)}
        </Button>
      </div>

      <div className="p-about__card p-about__hobbies">
        <div className="p-about__card-header">
          <h3>{ABOUT_CONSTANTS.HOBBIES}</h3>
          <div></div>
        </div>
        <div className="p-hobbies-container">
          <div className="p-hobbies-container__item">
            <FontAwesomeIcon
              icon={faGuitar}
              className="p-hobbies-container__icon p-hobbies-container__icon--orange"
            />
            <p> {t(ABOUT_CONSTANTS.GUITAR)}</p>
          </div>
          <div className="p-hobbies-container__item">
            <FontAwesomeIcon
              icon={faCode}
              className="p-hobbies-container__icon p-hobbies-container__icon--gray"
            />
            <p> {t(ABOUT_CONSTANTS.CODE)}</p>
          </div>
          <div className="p-hobbies-container__item">
            <FontAwesomeIcon
              icon={faTicketSimple}
              className="p-hobbies-container__icon p-hobbies-container__icon--purple"
            />
            <p> {t(ABOUT_CONSTANTS.MOVIES)}</p>
          </div>
          <div className="p-hobbies-container__item">
            <FontAwesomeIcon
              icon={faGamepad}
              className="p-hobbies-container__icon p-hobbies-container__icon--white"
            />
            <p> {t(ABOUT_CONSTANTS.VIDEOGAMES)}</p>
          </div>
        </div>
      </div>

      <div className="p-about__card p-about__live"></div>

      <div className="p-about__card p-about__lang"></div>
    </div>
  );
};

export default About;
