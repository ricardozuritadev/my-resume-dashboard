import { v4 as uuidv4 } from "uuid";

import {
  FaHtml5,
  FaReact,
  FaSass,
  FaJava,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJira
} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoRedux,
  BiLogoTypescript
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandThreejs } from "react-icons/tb";

import { HardSkill } from "types/hard-skill.types";

import { SKILLS } from "constants/skills.constants";

export const HARD_SKILLS: HardSkill[] = [
  {
    id: uuidv4(),
    title: SKILLS.MARKUP,
    languages: [SKILLS.HTML, SKILLS.XML],
    icons: [
      <FaHtml5 key={uuidv4()} size={40} />,
      <BsFiletypeXml key={uuidv4()} size={40} />
    ],
    percentages: [100, 80]
  },
  {
    id: uuidv4(),
    title: SKILLS.STYLESHEET,
    languages: [SKILLS.CSS, SKILLS.SASS],
    icons: [
      <FaCss3Alt key={uuidv4()} size={40} />,
      <FaSass key={uuidv4()} size={40} />
    ],
    percentages: [90, 70]
  },
  {
    id: uuidv4(),
    title: SKILLS.PROGRAMMING,
    languages: [SKILLS.JAVASCRIPT, SKILLS.TYPESCRIPT, SKILLS.JAVA],
    icons: [
      <BiLogoJavascript key={uuidv4()} size={40} />,
      <BiLogoTypescript key={uuidv4()} size={40} />,
      <FaJava key={uuidv4()} size={40} />
    ],
    percentages: [90, 80, 40]
  },
  {
    id: uuidv4(),
    title: SKILLS.FRONTEND_LIBRARIES,
    languages: [SKILLS.REACT, SKILLS.REDUX],
    icons: [
      <FaReact key={uuidv4()} size={40} />,
      <BiLogoRedux key={uuidv4()} size={40} />
    ],
    percentages: [90, 80]
  },
  {
    id: uuidv4(),
    title: SKILLS.FRAMEWORKS_ENVIRONMENTS,
    languages: [SKILLS.NODE_JS, SKILLS.EXPRESS],
    icons: [
      <FaNodeJs key={uuidv4()} size={40} />,
      <SiExpress key={uuidv4()} size={40} />
    ],
    percentages: [80, 70]
  },
  {
    id: uuidv4(),
    title: SKILLS.DATABASES,
    languages: [SKILLS.POSTGRESQL, SKILLS.MONGODB],
    icons: [
      <BiLogoPostgresql key={uuidv4()} size={40} />,
      <BiLogoMongodb key={uuidv4()} size={40} />
    ],
    percentages: [80, 70]
  },
  {
    id: uuidv4(),
    title: SKILLS.VERSION_CONTROL,
    languages: [SKILLS.GIT, SKILLS.GITHUB],
    icons: [
      <FaGitAlt key={uuidv4()} size={40} />,
      <FaGithub key={uuidv4()} size={40} />
    ],
    percentages: [90, 80]
  },
  {
    id: uuidv4(),
    title: SKILLS.OTHER_TOOLS,
    languages: [SKILLS.THREE_JS, SKILLS.JIRA],
    icons: [
      <TbBrandThreejs key={uuidv4()} size={40} />,
      <FaJira key={uuidv4()} size={40} />
    ],
    percentages: [70, 90]
  }
];
