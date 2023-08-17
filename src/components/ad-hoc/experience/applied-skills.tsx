import CardTitle from "components/generic/card-title";
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
      <CardTitle title={t(EXPERIENCE.APPLIED_SKILLS)} />

      <ul className="c-applied-skills__list">
        {appliedSkills.map((skill, index) => (
          <Tag key={index} text={skill} hasRandomColor />
        ))}
      </ul>
    </div>
  );
};

export default AppliedSkills;
