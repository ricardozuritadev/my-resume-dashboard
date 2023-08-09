import { v4 as uuidv4 } from "uuid";

import { FaGuitar, FaCode, FaTicketAlt, FaGamepad } from "react-icons/fa";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import { CustomIconColor } from "types/custom-icon.types";

import { Hobbies } from "types/hobbies.types";

export const HOBBIES: Hobbies[] = [
  {
    id: uuidv4(),
    icon: <FaGuitar size="4rem" />,
    iconColor: CustomIconColor.green,
    text: ABOUT_CONSTANTS.GUITAR
  },
  {
    id: uuidv4(),

    icon: <FaCode size="4rem" />,
    iconColor: CustomIconColor.purple,
    text: ABOUT_CONSTANTS.CODE
  },
  {
    id: uuidv4(),

    icon: <FaTicketAlt size="4rem" />,
    iconColor: CustomIconColor.pink,
    text: ABOUT_CONSTANTS.MOVIES
  },
  {
    id: uuidv4(),

    icon: <FaGamepad size="4rem" />,
    iconColor: CustomIconColor.yellow,
    text: ABOUT_CONSTANTS.VIDEOGAMES
  }
];
