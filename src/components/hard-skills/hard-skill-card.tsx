type HardSkillCardProps = {
  title: string;
  languages: string[];
  icons: JSX.Element[];
  percentages: number[];
  setXAxisData: React.Dispatch<React.SetStateAction<string[]>>;
  setSeriesData: React.Dispatch<React.SetStateAction<number[]>>;
};

const HardSkillCard = ({
  title,
  languages,
  icons,
  percentages,
  setXAxisData,
  setSeriesData
}: HardSkillCardProps) => {
  const selectHardSkill = () => {
    setXAxisData(languages);
    setSeriesData(percentages);
  };

  return (
    <div className="c-hard-skill-card" onClick={selectHardSkill}>
      <p className="c-hard-skill-card__title">{title}</p>
      <div className="c-hard-skill-card__icons">{icons}</div>
    </div>
  );
};

export default HardSkillCard;
