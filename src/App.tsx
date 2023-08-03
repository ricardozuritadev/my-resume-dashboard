import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useTheme } from "utils/hooks/use-theme.hook";

import { childrenRoutes } from "routes/children-routes";

import ThemeContextProvider from "contexts/theme.context";

import ErrorPage from "pages/error";
import Header from "layout/header";
import Main from "layout/main";
import Sidenav from "layout/sidenav";

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="l-app" id={theme}>
        <Sidenav />
        <div className="l-app__main">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: childrenRoutes
  }
]);

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </Suspense>
  );
}
