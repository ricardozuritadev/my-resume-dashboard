import { EDUCATION } from "constants/education.constants";
import { v4 as uuidv4 } from "uuid";

export const education_data = [
  {
    id: uuidv4(),
    school: EDUCATION.ILERNA.NAME,
    date: EDUCATION.ILERNA.DATE,
    degree: EDUCATION.ILERNA.DEGREE,
    description: EDUCATION.ILERNA.DESCRIPTION
  },
  {
    id: uuidv4(),
    school: EDUCATION.THE_BRIDGE.NAME,
    date: EDUCATION.THE_BRIDGE.DATE,
    degree: EDUCATION.THE_BRIDGE.DEGREE,
    description: EDUCATION.THE_BRIDGE.DESCRIPTION
  },
  {
    id: uuidv4(),
    school: EDUCATION.CEI.NAME,
    date: EDUCATION.CEI.DATE,
    degree: EDUCATION.CEI.DEGREE,
    description: EDUCATION.CEI.DESCRIPTION
  },
  {
    id: uuidv4(),
    school: EDUCATION.TRAZOS.NAME,
    date: EDUCATION.TRAZOS.DATE,
    degree: EDUCATION.TRAZOS.DEGREE,
    description: EDUCATION.TRAZOS.DESCRIPTION
  },
  {
    id: uuidv4(),
    school: EDUCATION.UDLA.NAME,
    date: EDUCATION.UDLA.DATE,
    degree: EDUCATION.UDLA.DEGREE,
    description: EDUCATION.UDLA.DESCRIPTION
  }
];
