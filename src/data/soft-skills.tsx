import { v4 as uuidv4 } from "uuid";

import { SKILLS } from "constants/skills.constants";

import { GradientColor, SoftSkill } from "types/soft-skill.types";

export const soft_skills_data: SoftSkill[] = [
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.PROBLEM_SOLVING,
    svg: SKILLS.SOFT_SKILLS.PROBLEM_SOLVING_SVG,
    gradientColor: GradientColor.purple
  },
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.SELF_MANAGEMENT,
    svg: SKILLS.SOFT_SKILLS.SELF_MANAGEMENT_SVG,
    gradientColor: GradientColor.yellow
  },
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.ABILITY_TO_TEACH,
    svg: SKILLS.SOFT_SKILLS.ABILITY_TO_TEACH_SVG,
    gradientColor: GradientColor.pink
  },
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.TEAMWORK,
    svg: SKILLS.SOFT_SKILLS.TEAMWORK_SVG,
    gradientColor: GradientColor.green
  },
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.ADAPTABILITY,
    svg: SKILLS.SOFT_SKILLS.ADAPTABILITY_SVG,
    gradientColor: GradientColor.purple
  }
];
