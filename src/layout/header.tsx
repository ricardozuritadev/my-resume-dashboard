import { useMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSelector from "components/language-selector";
import Toggle from "components/toggle";

const Header = () => {
  const { t } = useTranslation();

  const match = useMatch("/:pageName");
  const pageName = match?.params.pageName;

  return (
    <header className="l-header">
      <h2 className="l-header__title">{t(`sidenav.${pageName}`) || ""}</h2>
      <div className="l-header__actions">
        <LanguageSelector />
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
