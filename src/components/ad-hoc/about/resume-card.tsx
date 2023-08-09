import { useTheme } from "utils/hooks/use-theme.hook";
import { useTranslation } from "react-i18next";

import { handleDownloadResume } from "utils/functions";

import { ABOUT_CONSTANTS } from "constants/about.constants";
import { ButtonColor, ButtonSize } from "types/button.types";

import Button from "components/generic/button";
import CVIcon from "components/generic/cv-icon";

const ResumeCard = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  const iconBackgroundColor = theme === "dark" ? "#65501d" : "#feeab7";

  return (
    <div className="card c-resume-card">
      <div className="card__header">
        <h3 className="card__title">{t(ABOUT_CONSTANTS.RESUME)}</h3>
        <p className="card__subtitle">{ABOUT_CONSTANTS.YEAR}</p>
      </div>

      <CVIcon backgroundColor={iconBackgroundColor} />

      <Button
        color={ButtonColor.purple}
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
