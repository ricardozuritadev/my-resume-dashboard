import { useTranslation } from "react-i18next";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import Slideshow from "components/ad-hoc/about/where-i-lived-card/slideshow";
import CardTitle from "components/generic/card-title";

const WhereILivedCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card c-where-i-lived-card">
      <CardTitle title={t(ABOUT_CONSTANTS.LIVED_IN)} />
      <Slideshow />
    </div>
  );
};

export default WhereILivedCard;
