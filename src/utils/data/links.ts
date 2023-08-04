import { SIDENAV_CONSTANTS } from "constants/sidenav.constants";

import {
  faBuilding,
  faGraduationCap,
  faIdCard,
  faLaptopCode,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    url: "/about",
    icon: faUser,
    text: SIDENAV_CONSTANTS.ABOUT
  },
  {
    url: "/skills",
    icon: faLaptopCode,
    text: SIDENAV_CONSTANTS.SKILLS
  },
  {
    url: "/experience",
    icon: faBuilding,
    text: SIDENAV_CONSTANTS.EXPERIENCE
  },
  {
    url: "/education",
    icon: faGraduationCap,
    text: SIDENAV_CONSTANTS.EDUCATION
  },
  {
    url: "/contact",
    icon: faIdCard,
    text: SIDENAV_CONSTANTS.CONTACT
  }
];
