type SoftSkillsCardProps = {
  text: string;
  icon: JSX.Element;
};

const SoftSkillsCard = ({ text, icon }: SoftSkillsCardProps) => {
  return (
    <div className="c-soft-skills-card">
      <p className="c-soft-skills-card__text">{text}</p>
      {icon}
    </div>
  );
};

export default SoftSkillsCard;
