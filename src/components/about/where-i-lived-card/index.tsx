import { useTranslation } from "react-i18next";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import Slideshow from "components/about/where-i-lived-card/slideshow";

const WhereILivedCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card c-where-i-lived-card">
      <div className="card__header">
        <h2>{t(ABOUT_CONSTANTS.LIVED_IN)}</h2>
      </div>
      <Slideshow />
    </div>
  );
};

export default WhereILivedCard;
