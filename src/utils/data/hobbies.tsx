import { v4 as uuidv4 } from "uuid";

import { FaGuitar, FaCode, FaTicketAlt, FaGamepad } from "react-icons/fa";

import { ABOUT_CONSTANTS } from "constants/about.constants";

import { IconColor } from "types/card-item.types";

import { Hobbies } from "types/hobbies.types";

export const HOBBIES: Hobbies[] = [
  {
    id: uuidv4(),
    icon: <FaGuitar size="4rem" />,
    iconColor: IconColor.green,
    text: ABOUT_CONSTANTS.GUITAR
  },
  {
    id: uuidv4(),

    icon: <FaCode size="4rem" />,
    iconColor: IconColor.purple,
    text: ABOUT_CONSTANTS.CODE
  },
  {
    id: uuidv4(),

    icon: <FaTicketAlt size="4rem" />,
    iconColor: IconColor.pink,
    text: ABOUT_CONSTANTS.MOVIES
  },
  {
    id: uuidv4(),

    icon: <FaGamepad size="4rem" />,
    iconColor: IconColor.yellow,
    text: ABOUT_CONSTANTS.VIDEOGAMES
  }
];
