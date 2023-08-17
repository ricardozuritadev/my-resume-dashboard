import { useTheme } from "utils/hooks/use-theme.hook";
import { useTranslation } from "react-i18next";

import { handleDownloadPdf } from "utils/functions";

import { ABOUT_CONSTANTS } from "constants/about.constants";
import { ButtonColor, ButtonSize } from "types/button.types";

import Button from "components/generic/button";
import CVIcon from "components/generic/cv-icon";
import CardTitle from "components/generic/card-title";

const ResumeCard = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  const iconBackgroundColor = theme === "dark" ? "#65501d" : "#feeab7";

  return (
    <div className="card c-resume-card">
      <CardTitle
        title={t(ABOUT_CONSTANTS.RESUME)}
        subtitle={ABOUT_CONSTANTS.YEAR}
      />

      <CVIcon backgroundColor={iconBackgroundColor} />

      <Button
        color={ButtonColor.purple}
        size={ButtonSize.medium}
        handleClick={() => {
          if (i18n.resolvedLanguage === "es") {
            handleDownloadPdf(ABOUT_CONSTANTS.PDF_FILE_URL_ES);
          } else {
            handleDownloadPdf(ABOUT_CONSTANTS.PDF_FILE_URL_EN);
          }
        }}
      >
        {t(ABOUT_CONSTANTS.DOWNLOAD_RESUME)}
      </Button>
    </div>
  );
};

export default ResumeCard;
