type SoftSkillsCardProps = {
  text: string;
  icon: JSX.Element;
};

const SoftSkillsCard = ({ text, icon }: SoftSkillsCardProps) => {
  return (
    <div className="c-soft-skills-card">
      <p className="c-soft-skills-card__text">{text}</p>
      <div className="vertical-line"></div>
      {icon}
    </div>
  );
};

export default SoftSkillsCard;
