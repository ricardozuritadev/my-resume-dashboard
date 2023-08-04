import About from "pages/about";
import Skills from "pages/skills";
import { Navigate } from "react-router-dom";

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
    element: <div>cambiar</div>
  },
  {
    path: "/education",
    element: <div>cambiar</div>
  },
  {
    path: "/contact",
    element: <div>cambiar</div>
  }
];
