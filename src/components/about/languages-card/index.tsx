import { useTranslation } from "react-i18next";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import CircleChart from "components/about/languages-card/circle-chart";

const LanguagesCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card c-languages-card">
      <div className="card__header card__header--line">
        <h2>{t(ABOUT_CONSTANTS.LANGUAGES)}</h2>
      </div>
      <div className="c-languages-card__charts">
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
  );
};

export default LanguagesCard;
