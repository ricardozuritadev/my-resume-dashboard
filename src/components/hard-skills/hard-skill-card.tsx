import { useTranslation } from "react-i18next";

type HardSkillCardProps = {
  id: string;
  title: string;
  icons: JSX.Element[];
};

const HardSkillCard = ({ title, icons }: HardSkillCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-hard-skill-card">
      <p className="c-hard-skill-card__title">{t(title)}</p>
      <div className="c-hard-skill-card__icons">{icons}</div>
    </div>
  );
};

export default HardSkillCard;
