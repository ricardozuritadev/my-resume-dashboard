import { EXPERIENCE } from "constants/experience.constants";
import { useTranslation } from "react-i18next";

type ResponsibilitiesCardProps = {
  responsibilities: string;
};

const ResponsibilitiesCard = ({
  responsibilities
}: ResponsibilitiesCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-responsibilities-card">
      <h3 className="card__title c-responsibilities-card__title">
        {t(EXPERIENCE.RESPONSIBILITIES)}
      </h3>
      <p className="c-responsibilities-card__text">{t(responsibilities)}</p>
    </div>
  );
};

export default ResponsibilitiesCard;
