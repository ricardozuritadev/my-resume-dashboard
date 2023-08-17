import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useTheme } from "utils/hooks/use-theme.hook";

import { childrenRoutes } from "routes/children-routes";
import { ROUTES } from "constants/routes.constants";

import ThemeContextProvider from "contexts/theme.context";

import ErrorPage from "pages/error-page";
import Sidenav from "layout/sidenav";
import Header from "layout/header";
import Main from "layout/main";

import PageTitle from "components/ad-hoc/page-title";
import LanguageSelector from "components/generic/language-selector";
import Toggle from "components/generic/toggle";

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="l-app" id={theme}>
        <Sidenav />

        <Header>
          <PageTitle />
          <div className="l-header__actions">
            <LanguageSelector />
            <Toggle />
          </div>
        </Header>

        <Main />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
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
