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
    title: SKILLS.HARD_SKILLS.MARKUP,
    items: [SKILLS.HARD_SKILLS.HTML, SKILLS.HARD_SKILLS.XML],
    icons: [
      <FaHtml5 key={uuidv4()} size={30} color="#f06529" />,
      <BsFiletypeXml key={uuidv4()} size={30} />
    ],
    data: [
      { value: 100, colors: ["#c8470f", "#f06529"] },
      { value: 80, colors: ["#362a80", "#51459e"] }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.HARD_SKILLS.STYLESHEET,
    items: [SKILLS.HARD_SKILLS.CSS, SKILLS.HARD_SKILLS.SASS],
    icons: [
      <FaCss3Alt key={uuidv4()} size={30} color="#2965f1" />,
      <FaSass key={uuidv4()} size={30} color="#CD6799" />
    ],
    data: [
      { value: 90, colors: ["#1143b9", "#2965f1"] },
      { value: 70, colors: ["#ab4074", "#CD6799"] }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.HARD_SKILLS.PROGRAMMING,
    items: [
      SKILLS.HARD_SKILLS.JAVASCRIPT,
      SKILLS.HARD_SKILLS.TYPESCRIPT,
      SKILLS.HARD_SKILLS.JAVA
    ],
    icons: [
      <BiLogoJavascript key={uuidv4()} size={30} color="#f0db4f" />,
      <BiLogoTypescript key={uuidv4()} size={30} color="#007acc" />,
      <FaJava key={uuidv4()} size={30} color="#ED1D25" />
    ],
    data: [
      { value: 90, colors: ["#ccb72d", "#f0db4f"] },
      { value: 80, colors: ["#004f83", "#007acc"] },
      { value: 40, colors: ["#b6090f", "#ED1D25"] }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.HARD_SKILLS.FRONTEND_LIBRARIES,
    items: [SKILLS.HARD_SKILLS.REACT, SKILLS.HARD_SKILLS.ANGULAR],
    icons: [
      <FaReact key={uuidv4()} size={30} color="#61DBFB" />,
      <FaAngular key={uuidv4()} size={30} color="#B52E31" />
    ],
    data: [
      { value: 90, colors: ["#2e9fbd", "#61DBFB"] },
      { value: 30, colors: ["#811012", "#B52E31"] }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.HARD_SKILLS.FRAMEWORKS_ENVIRONMENTS,
    items: [SKILLS.HARD_SKILLS.NODE_JS, SKILLS.HARD_SKILLS.EXPRESS],
    icons: [
      <FaNodeJs key={uuidv4()} size={30} color="#3C873A" />,
      <SiExpress key={uuidv4()} size={30} />
    ],
    data: [
      { value: 80, colors: ["#276325", "#3C873A"] },
      { value: 60, colors: ["#362a80", "#51459e"] }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.HARD_SKILLS.DATABASES,
    items: [SKILLS.HARD_SKILLS.POSTGRESQL, SKILLS.HARD_SKILLS.MONGODB],
    icons: [
      <BiLogoPostgresql key={uuidv4()} size={30} color="#336791" />,
      <BiLogoMongodb key={uuidv4()} size={30} color="#4db33d" />
    ],
    data: [
      { value: 80, colors: ["#1a476c", "#336791"] },
      { value: 70, colors: ["#278518", "#4db33d"] }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.HARD_SKILLS.VERSION_CONTROL,
    items: [SKILLS.HARD_SKILLS.GIT, SKILLS.HARD_SKILLS.GITHUB],
    icons: [
      <FaGitAlt key={uuidv4()} size={30} color="#f1502f" />,
      <FaGithub key={uuidv4()} size={30} />
    ],
    data: [
      { value: 90, colors: ["#c33214", "#f1502f"] },
      { value: 80, colors: ["#362a80", "#51459e"] }
    ]
  },
  {
    id: uuidv4(),
    title: SKILLS.HARD_SKILLS.OTHER_TOOLS,
    items: [SKILLS.HARD_SKILLS.JIRA, SKILLS.HARD_SKILLS.THREE_JS],
    icons: [
      <FaJira key={uuidv4()} size={30} color="#0052cc" />,
      <TbBrandThreejs key={uuidv4()} size={30} color="#51459e" />
    ],
    data: [
      { value: 90, colors: ["#00398e", "#0052cc"] },
      { value: 70, colors: ["#362a80", "#51459e"] }
    ]
  }
];
