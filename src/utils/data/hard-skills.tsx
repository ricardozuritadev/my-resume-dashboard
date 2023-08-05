import { v4 as uuidv4 } from "uuid";

import {
  FaHtml5,
  FaReact,
  FaAngular,
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
  BiLogoTypescript
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandThreejs } from "react-icons/tb";

import { SKILLS } from "constants/skills.constants";

import { HardSkill } from "types/hard-skill.types";

export const HARD_SKILLS: HardSkill[] = [
  {
    id: uuidv4(),
    title: SKILLS.MARKUP,
    items: [SKILLS.HTML, SKILLS.XML],
    icons: [
      <FaHtml5 key={uuidv4()} size={30} color="#f06529" />,
      <BsFiletypeXml key={uuidv4()} size={30} />
    ],
    data: [
      { value: 100, color: "#f06529" },
      { value: 80, color: "#51459e" }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.STYLESHEET,
    items: [SKILLS.CSS, SKILLS.SASS],
    icons: [
      <FaCss3Alt key={uuidv4()} size={30} color="#2965f1" />,
      <FaSass key={uuidv4()} size={30} color="#CD6799" />
    ],
    data: [
      { value: 90, color: "#2965f1" },
      { value: 70, color: "#CD6799" }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.PROGRAMMING,
    items: [SKILLS.JAVASCRIPT, SKILLS.TYPESCRIPT, SKILLS.JAVA],
    icons: [
      <BiLogoJavascript key={uuidv4()} size={30} color="#f0db4f" />,
      <BiLogoTypescript key={uuidv4()} size={30} color="#007acc" />,
      <FaJava key={uuidv4()} size={30} color="#ED1D25" />
    ],
    data: [
      { value: 90, color: "#f0db4f" },
      { value: 80, color: "#007acc" },
      { value: 40, color: "#ED1D25" }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.FRONTEND_LIBRARIES,
    items: [SKILLS.REACT, SKILLS.ANGULAR],
    icons: [
      <FaReact key={uuidv4()} size={30} color="#61DBFB" />,
      <FaAngular key={uuidv4()} size={30} color="#B52E31" />
    ],
    data: [
      { value: 90, color: "#61DBFB" },
      { value: 30, color: "#B52E31" }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.FRAMEWORKS_ENVIRONMENTS,
    items: [SKILLS.NODE_JS, SKILLS.EXPRESS],
    icons: [
      <FaNodeJs key={uuidv4()} size={30} color="#3C873A" />,
      <SiExpress key={uuidv4()} size={30} />
    ],
    data: [
      { value: 80, color: "#3C873A" },
      { value: 60, color: "#51459e" }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.DATABASES,
    items: [SKILLS.POSTGRESQL, SKILLS.MONGODB],
    icons: [
      <BiLogoPostgresql key={uuidv4()} size={30} color="#336791" />,
      <BiLogoMongodb key={uuidv4()} size={30} color="#4db33d" />
    ],
    data: [
      { value: 80, color: "#336791" },
      { value: 70, color: "#4db33d" }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.VERSION_CONTROL,
    items: [SKILLS.GIT, SKILLS.GITHUB],
    icons: [
      <FaGitAlt key={uuidv4()} size={30} color="#f1502f" />,
      <FaGithub key={uuidv4()} size={30} />
    ],
    data: [
      { value: 90, color: "#f1502f" },
      { value: 80, color: "#51459e" }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.OTHER_TOOLS,
    items: [SKILLS.JIRA, SKILLS.THREE_JS],
    icons: [
      <FaJira key={uuidv4()} size={30} color="#0052cc" />,
      <TbBrandThreejs key={uuidv4()} size={30} color="#51459e" />
    ],
    data: [
      { value: 90, color: "#0052cc" },
      { value: 70, color: "#51459e" }
    ]
  }
];
