import { Navigate } from "react-router-dom";

import { ROUTES } from "constants/routes.constants";

import AboutPage from "pages/about-page";
import SkillsPage from "pages/skills-page";
import ExperiencePage from "pages/experience-page";
import EducationPage from "pages/education-page";

export const childrenRoutes = [
  {
    path: ROUTES.HOME,
    element: <Navigate to="/about" />
  },
  {
    path: ROUTES.ABOUT,
    element: <AboutPage />
  },
  {
    path: ROUTES.SKILLS,
    element: <SkillsPage />
  },
  {
    path: ROUTES.EXPERIENCE,
    element: <ExperiencePage />
  },
  {
    path: ROUTES.EDUCATION,
    element: <EducationPage />
  }
];
