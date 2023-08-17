import { useMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PageTitle = () => {
  const { t } = useTranslation();

  const match = useMatch("/:pageName");
  const pageName = match?.params.pageName;

  return <h2 className="c-page-title">{t(`sidenav.${pageName}`) || ""}</h2>;
};

export default PageTitle;
