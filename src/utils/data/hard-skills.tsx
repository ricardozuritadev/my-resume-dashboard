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
    id: uuidv4(),
    title: SKILLS.MARKUP,
    icons: [
      <FaHtml5 key={uuidv4()} size={40} />,
      <BsFiletypeXml key={uuidv4()} size={40} />
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.STYLESHEET,
    icons: [
      <FaCss3Alt key={uuidv4()} size={40} />,
      <FaSass key={uuidv4()} size={40} />
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.PROGRAMMING,
    icons: [
      <BiLogoJavascript key={uuidv4()} size={40} />,
      <BiLogoTypescript key={uuidv4()} size={40} />,
      <FaJava key={uuidv4()} size={40} />
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.FRONTEND_LIBRARIES,
    icons: [
      <FaReact key={uuidv4()} size={40} />,
      <BiLogoRedux key={uuidv4()} size={40} />
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.FRAMEWORKS_ENVIRONMENTS,
    icons: [
      <FaNodeJs key={uuidv4()} size={40} />,
      <SiExpress key={uuidv4()} size={40} />
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.DATABASES,
    icons: [
      <BiLogoPostgresql key={uuidv4()} size={40} />,
      <BiLogoMongodb key={uuidv4()} size={40} />
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.VERSION_CONTROL,
    icons: [
      <FaGitAlt key={uuidv4()} size={40} />,
      <FaGithub key={uuidv4()} size={40} />,
      <FaGitlab key={uuidv4()} size={40} />,
      <FaBitbucket key={uuidv4()} size={40} />
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.OTHER_TOOLS,
    icons: [
      <TbBrandThreejs key={uuidv4()} size={40} />,
      <FaJira key={uuidv4()} size={40} />
    ]
  }
];
