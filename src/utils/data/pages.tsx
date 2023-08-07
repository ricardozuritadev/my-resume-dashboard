import { SIDENAV_CONSTANTS } from "constants/sidenav.constants";

import {
  FaBuilding,
  FaGraduationCap,
  FaLaptopCode,
  FaUser
} from "react-icons/fa";

export const PAGES = [
  {
    url: "/about",
    icon: <FaUser size={20} />,
    text: SIDENAV_CONSTANTS.ABOUT
  },
  {
    url: "/skills",
    icon: <FaLaptopCode size={20} />,
    text: SIDENAV_CONSTANTS.SKILLS
  },
  {
    url: "/experience",
    icon: <FaBuilding size={20} />,
    text: SIDENAV_CONSTANTS.EXPERIENCE
  },
  {
    url: "/education",
    icon: <FaGraduationCap size={20} />,
    text: SIDENAV_CONSTANTS.EDUCATION
  }
];
