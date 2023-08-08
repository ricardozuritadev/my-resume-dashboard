import { Navigate } from "react-router-dom";

import AboutPage from "pages/about";
import SkillsPage from "pages/skills";
import ExperiencePage from "pages/experience";

export const childrenRoutes = [
  {
    path: "/",
    element: <Navigate to="/about" />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/skills",
    element: <SkillsPage />
  },
  {
    path: "/experience",
    element: <ExperiencePage />
  },
  {
    path: "/education",
    element: <div>cambiar</div>
  }
];
