import { useTranslation } from "react-i18next";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import CircleChart from "components/ad-hoc/about/languages-card/circle-chart";
import CardTitle from "components/generic/card-title";

const LanguagesCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card c-languages-card">
      <CardTitle title={t(ABOUT_CONSTANTS.LANGUAGES)} />

      <div className="c-languages-card__charts">
        <CircleChart endValue={100} bottomText={t(ABOUT_CONSTANTS.SPANISH)} />
        <CircleChart endValue={70} bottomText={t(ABOUT_CONSTANTS.ENGLISH)} />
      </div>
    </div>
  );
};

export default LanguagesCard;
