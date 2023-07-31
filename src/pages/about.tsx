import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
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

      <div className="p-about__card p-about__card--cv">
        <div className="p-about__cv-container">
          <h3>{t(ABOUT_CONSTANTS.RESUME)}</h3>
          <p>{t(ABOUT_CONSTANTS.YEAR)}</p>
        </div>
        <FontAwesomeIcon icon={faFilePdf} size="7x" className="p-about__pdf" />
        <Button color={buttonColor.yellow}>
          {t(ABOUT_CONSTANTS.DOWNLOAD_RESUME)}
        </Button>
      </div>

      <div className="p-about__card p-about__card--hobbies"></div>

      <div className="p-about__card p-about__card--live"></div>

      <div className="p-about__card p-about__card--lang"></div>
    </div>
  );
};

export default About;
