import {
  FaHtml5,
  FaReact,
  FaSass,
  FaJava,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaBitbucket,
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

import { SKILLS } from "constants/skills.constants";

export const HARD_SKILLS = [
  {
    id: 1,
    title: SKILLS.MARKUP,
    icons: [<FaHtml5 size={40} />, <BsFiletypeXml size={40} />]
  },
  {
    id: 2,
    title: SKILLS.STYLESHEET,
    icons: [<FaCss3Alt size={40} />, <FaSass size={40} />]
  },
  {
    id: 3,
    title: SKILLS.PROGRAMMING,
    icons: [
      <BiLogoJavascript size={40} />,
      <BiLogoTypescript size={40} />,
      <FaJava size={40} />
    ]
  },
  {
    id: 4,
    title: SKILLS.FRONTEND_LIBRARIES,
    icons: [<FaReact size={40} />, <BiLogoRedux size={40} />]
  },
  {
    id: 5,
    title: SKILLS.FRAMEWORKS_ENVIRONMENTS,
    icons: [<FaNodeJs size={40} />, <SiExpress size={40} />]
  },
  {
    id: 6,
    title: SKILLS.DATABASES,
    icons: [<BiLogoPostgresql size={40} />, <BiLogoMongodb size={40} />]
  },
  {
    id: 7,
    title: SKILLS.VERSION_CONTROL,
    icons: [
      <FaGitAlt size={40} />,
      <FaGithub size={40} />,
      <FaGitlab size={40} />,
      <FaBitbucket size={40} />
    ]
  },
  {
    id: 8,
    title: SKILLS.OTHER_TOOLS,
    icons: [<TbBrandThreejs size={40} />, <FaJira size={40} />]
  }
];
