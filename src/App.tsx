import { Suspense } from "react";
import { useTheme } from "utils/hooks/use-theme.hook";

import ThemeContextProvider from "contexts/theme.context";

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

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Suspense>
  );
}
