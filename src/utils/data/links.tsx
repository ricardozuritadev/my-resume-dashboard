import { SIDENAV_CONSTANTS } from "constants/sidenav.constants";

import {
  FaBuilding,
  FaGraduationCap,
  FaIdCard,
  FaLaptopCode,
  FaUser
} from "react-icons/fa";

export const links = [
  {
    url: "/about",
    icon: <FaUser />,
    text: SIDENAV_CONSTANTS.ABOUT
  },
  {
    url: "/skills",
    icon: <FaLaptopCode />,
    text: SIDENAV_CONSTANTS.SKILLS
  },
  {
    url: "/experience",
    icon: <FaBuilding />,
    text: SIDENAV_CONSTANTS.EXPERIENCE
  },
  {
    url: "/education",
    icon: <FaGraduationCap />,
    text: SIDENAV_CONSTANTS.EDUCATION
  },
  {
    url: "/contact",
    icon: <FaIdCard />,
    text: SIDENAV_CONSTANTS.CONTACT
  }
];
