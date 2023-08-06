import { v4 as uuidv4 } from "uuid";

import { SoftSkill } from "types/soft-skill.types";

import { TbBulbFilled } from "react-icons/tb";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import {
  RiTeamLine,
  RiCalendarTodoLine,
  RiUserFollowLine
} from "react-icons/ri";
import { SKILLS } from "constants/skills.constants";

export const SOFT_SKILLS: SoftSkill[] = [
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.PROBLEM_SOLVING,
    icon: <TbBulbFilled size={40} />
  },
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.SELF_MANAGEMENT,
    icon: <RiCalendarTodoLine size={40} />
  },
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.ABILITY_TO_TEACH,
    icon: <LiaChalkboardTeacherSolid size={40} />
  },
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.TEAMWORK,
    icon: <RiTeamLine size={40} />
  },
  {
    id: uuidv4(),
    text: SKILLS.SOFT_SKILLS.ADAPTABILITY,
    icon: <RiUserFollowLine size={40} />
  }
];
