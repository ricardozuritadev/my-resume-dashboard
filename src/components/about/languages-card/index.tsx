import { useTranslation } from "react-i18next";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import CircleChart from "components/about/languages-card/circle-chart";

const LanguagesCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card c-languages-card">
      <div className="card__header">
        <h3>{t(ABOUT_CONSTANTS.LANGUAGES)}</h3>
      </div>
      <div className="c-languages-card__charts">
        <CircleChart endValue={100} bottomText={t(ABOUT_CONSTANTS.SPANISH)} />
        <CircleChart endValue={70} bottomText={t(ABOUT_CONSTANTS.ENGLISH)} />
      </div>
    </div>
  );
};

export default LanguagesCard;
