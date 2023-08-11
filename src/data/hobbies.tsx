import { v4 as uuidv4 } from "uuid";

import { FaGuitar, FaCode, FaTicketAlt, FaGamepad } from "react-icons/fa";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import { CustomIconColor } from "types/custom-icon.types";

import { Hobbies } from "types/hobbies.types";

export const hobbies_data: Hobbies[] = [
  {
    id: uuidv4(),
    icon: <FaGuitar size="4rem" />,
    iconColor: CustomIconColor.green,
    title: ABOUT_CONSTANTS.GUITAR.TITLE,
    description: ABOUT_CONSTANTS.GUITAR.DESCRIPTION
  },
  {
    id: uuidv4(),

    icon: <FaCode size="4rem" />,
    iconColor: CustomIconColor.purple,
    title: ABOUT_CONSTANTS.CODE.TITLE,
    description: ABOUT_CONSTANTS.CODE.DESCRIPTION
  },
  {
    id: uuidv4(),

    icon: <FaTicketAlt size="4rem" />,
    iconColor: CustomIconColor.pink,
    title: ABOUT_CONSTANTS.MOVIES.TITLE,
    description: ABOUT_CONSTANTS.MOVIES.DESCRIPTION
  },
  {
    id: uuidv4(),

    icon: <FaGamepad size="4rem" />,
    iconColor: CustomIconColor.yellow,
    title: ABOUT_CONSTANTS.VIDEOGAMES.TITLE,
    description: ABOUT_CONSTANTS.VIDEOGAMES.DESCRIPTION
  }
];
