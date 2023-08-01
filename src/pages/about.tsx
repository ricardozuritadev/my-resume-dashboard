import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import { handleDownloadResume } from "utils/functions";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import { ButtonColor, ButtonSize } from "types/button.types";
import { IconColor } from "types/card-item.types";

import FlipCard from "components/flip-card";
import Button from "components/button";
import CardItem from "components/card-item";
import Slideshow from "components/slideshow";
import CircleChart from "components/circle-chart";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="p-about">
      <div className="p-about__card p-about__card--bio">
        <FlipCard />
      </div>

      <div className="p-about__card p-about__cv">
        <div className="p-about__card-header">
          <h2>{t(ABOUT_CONSTANTS.RESUME)}</h2>
          <p>{ABOUT_CONSTANTS.YEAR}</p>
        </div>
        <FontAwesomeIcon icon={faFilePdf} size="7x" className="p-about__pdf" />
        <Button
          color={ButtonColor.yellow}
          size={ButtonSize.medium}
          handleClick={() => {
            if (i18n.language === "es") {
              handleDownloadResume(ABOUT_CONSTANTS.PDF_FILE_URL_ES);
            } else {
              handleDownloadResume(ABOUT_CONSTANTS.PDF_FILE_URL_ES);
            }
          }}
        >
          {t(ABOUT_CONSTANTS.DOWNLOAD_RESUME)}
        </Button>
      </div>

      <div className="p-about__card p-about__hobbies">
        <div className="p-about__card-header">
          <h2>{ABOUT_CONSTANTS.HOBBIES}</h2>
          <div></div>
        </div>
        <div className="p-hobbies-container">
          <CardItem
            icon={faGuitar}
            iconColor={IconColor.orange}
            text={t(ABOUT_CONSTANTS.GUITAR)}
          />
          <CardItem
            icon={faCode}
            iconColor={IconColor.yellow}
            text={t(ABOUT_CONSTANTS.CODE)}
          />
          <CardItem
            icon={faTicketSimple}
            iconColor={IconColor.purple}
            text={t(ABOUT_CONSTANTS.MOVIES)}
          />
          <CardItem
            icon={faGamepad}
            iconColor={IconColor.white}
            text={t(ABOUT_CONSTANTS.VIDEOGAMES)}
          />
        </div>
      </div>

      <div className="p-about__card p-about__live">
        <div className="p-about__card-header">
          <h2>{t(ABOUT_CONSTANTS.LIVED_IN)}</h2>
        </div>
        <Slideshow />
      </div>

      <div className="p-about__card p-about__lang">
        <div className="p-about__card-header p-about__card-header--line">
          <h2>{t(ABOUT_CONSTANTS.LANGUAGES)}</h2>
        </div>
        <div className="p-about__charts">
          <CircleChart
            endValue={100}
            size={12}
            bottomText={t(ABOUT_CONSTANTS.SPANISH)}
          />
          <CircleChart
            endValue={70}
            size={12}
            bottomText={t(ABOUT_CONSTANTS.ENGLISH)}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
