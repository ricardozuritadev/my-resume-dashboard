import Tag from "components/generic/tag";
import { EXPERIENCE } from "constants/experience.constants";
import { useTranslation } from "react-i18next";

type AppliedSkillsProps = {
  appliedSkills: string[];
};

const AppliedSkills = ({ appliedSkills }: AppliedSkillsProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-applied-skills">
      <h3 className="c-applied-skills__title">
        {t(EXPERIENCE.APPLIED_SKILLS)}
      </h3>
      <ul className="c-applied-skills__list">
        {appliedSkills.map((skill, index) => (
          <Tag key={index} text={skill} />
        ))}
      </ul>
    </div>
  );
};

export default AppliedSkills;
