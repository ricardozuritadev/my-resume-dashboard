type SoftSkillsCardProps = {
  text: string;
  svg: string;
  gradientColor: string;
};

const SoftSkillsCard = ({ text, svg, gradientColor }: SoftSkillsCardProps) => {
  const gradientClass = `c-soft-skills-card--${gradientColor}`;

  return (
    <div className={`c-soft-skills-card ${gradientClass}`}>
      <p className="c-soft-skills-card__text">{text}</p>
      <img
        src={`/svg/${svg}.svg`}
        alt="icon"
        className="c-soft-skills-card__svg"
      />
    </div>
  );
};

export default SoftSkillsCard;
