import { useTranslation } from "react-i18next";

import { ButtonColor, ButtonSize } from "types/button.types";

import Button from "components/generic/button";

import { handleDownloadPdf } from "utils/functions";
import { EDUCATION } from "constants/education.constants";

type EducationCardProps = {
  school: string;
  date: string;
  degree: string;
  description: string;
  diplomaUrl: string;
  finished: boolean;
};

const EducationCard = ({
  school,
  date,
  degree,
  description,
  diplomaUrl,
  finished
}: EducationCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-education-card">
      <div>
        <h3 className="card__title c-education-card__title">
          <span>{school}</span>
          <span className="c-education-card__date">{date}</span>
        </h3>

        <p className="c-education-card__degree">{t(degree)}</p>
        <p className="c-education-card__text">{t(description)}</p>
      </div>
      <div className="c-education-card__button">
        {finished ? (
          <Button
            color={ButtonColor.purple}
            size={ButtonSize.small}
            handleClick={() => handleDownloadPdf(diplomaUrl)}
          >
            {t(EDUCATION.DOWNLOAD_DIPLOMA)}
          </Button>
        ) : (
          <p className="c-education-card__inprogress">
            {t(EDUCATION.IN_PROGRESS)}
          </p>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
