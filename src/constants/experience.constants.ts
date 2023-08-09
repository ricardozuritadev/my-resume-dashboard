import { Position } from "types/experience.types";

export const EXPERIENCE = {
  MONTH: "experience.month",
  YEAR: "experience.year",
  CURRENTLY: "experience.currently",
  POSITION: "experience.position",
  RESPONSIBILITIES: "experience.responsibilities",
  APPLIED_SKILLS: "experience.appliedSkills",
  LEARNING: "experience.learning",
  CHALENGES: "experience.challenges",
  COMPANIES: {
    CYC: {
      NAME: "CYC",
      LOGO: "",
      DESCRIPTION: "experience.companies.cyc.description",
      POSITION: "experience.companies.cyc.position",
      POSITION_ICON: Position.developer,
      RESPONSIBILITIES: "experience.companies.cyc.responsibilities",
      APPLIED_SKILLS: {
        JAVASCRIPT: "JavaScript",
        TYPESCRIPT: "TypeScript",
        REACT: "React",
        NODE: "Node",
        GIT: "Git",
        BEM: "BEM",
        AGILE: "Agile"
      },
      LEARNING: "experience.companies.cyc.learning",
      CHALENGES: "experience.companies.cyc.challenges"
    },
    THE_BRIDGE: {
      NAME: "The Bridge",
      LOGO: "",
      DESCRIPTION: "experience.companies.theBridge.description",
      POSITION: "experience.companies.theBridge.position",
      POSITION_ICON: Position.teacher,
      RESPONSIBILITIES: "experience.companies.theBridge.responsibilities",
      APPLIED_SKILLS: {
        HTML: "HTML",
        CSS: "CSS",
        JAVASCRIPT: "JavaScript",
        REACT: "React",
        NODE: "Node",
        EXPRESS: "Express",
        MONGO_DB: "MongoDB",
        POSTGRE_SQL: "PostgreSQL"
      },
      LEARNING: "experience.companies.theBridge.learning",
      CHALENGES: "experience.companies.theBridge.challenges"
    },
    CLEVERPY: {
      NAME: "Cleverpy",
      LOGO: "",
      DESCRIPTION: "experience.companies.cleverpy.description",
      POSITION: "experience.companies.cleverpy.position",
      POSITION_ICON: Position.developer,
      RESPONSIBILITIES: "experience.companies.cleverpy.responsibilities",
      APPLIED_SKILLS: {
        JAVASCRIPT: "JavaScript",
        TYPESCRIPT: "TypeScript",
        REACT: "React",
        OPEN_LAYERS: "OpenLayers",
        GIT: "Git",
        BITBUCKET: "Bitbucket",
        BEM: "BEM",
        JIRA: "Jira",
        AGILE: "Agile"
      },
      LEARNING: "experience.companies.cleverpy.learning",
      CHALENGES: "experience.companies.cleverpy.challenges"
    }
  }
};
