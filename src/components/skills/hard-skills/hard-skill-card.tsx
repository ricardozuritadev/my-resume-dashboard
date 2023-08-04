type HardSkillCardProps = {
  id: number;
  title: string;
  icons: JSX.Element[];
};

const HardSkillCard = ({ title, icons }: HardSkillCardProps) => {
  return (
    <div className="c-hard-skill-card">
      <p>{title}</p>
      <div className="c-hard-skill-card__icons">{icons}</div>
    </div>
  );
};

export default HardSkillCard;
