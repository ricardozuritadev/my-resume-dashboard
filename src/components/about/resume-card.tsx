import { useTranslation } from "react-i18next";

import { handleDownloadResume } from "utils/functions";

import { ABOUT_CONSTANTS } from "constants/about.constants";
import { ButtonColor, ButtonSize } from "types/button.types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import Button from "components/button";

const ResumeCard = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="card c-resume-card">
      <div className="card__header">
        <h2>{t(ABOUT_CONSTANTS.RESUME)}</h2>
        <p>{ABOUT_CONSTANTS.YEAR}</p>
      </div>
      <FontAwesomeIcon
        icon={faFilePdf}
        size="7x"
        className="c-resume-card__pdf"
      />
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
  );
};

export default ResumeCard;
