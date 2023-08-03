import About from "pages/about";
import Skills from "pages/skills";

export const childrenRoutes = [
  {
    path: "/",
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
