import { Navigate } from "react-router-dom";

import About from "pages/about";
import Skills from "pages/skills";
import Experience from "pages/experience";

export const childrenRoutes = [
  {
    path: "/",
    element: <Navigate to="/about" />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/experience",
    element: <Experience />
  },
  {
    path: "/education",
    element: <div>cambiar</div>
  }
];
