import { useTranslation } from "react-i18next";

import { languages } from "utils/translations/locales";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage;

  const getSelectedClassname = (language: string) =>
    resolvedLanguage === language ? "selected-language" : "";

  return (
    <>
      <div className="c-language-selector">
        {Object.keys(languages).map((language) => (
          <div
            key={language}
            className={`c-language-selector__lang ${getSelectedClassname(
              language
            )}`}
            onClick={() => i18n.changeLanguage(language)}
          >
            {language}
          </div>
        ))}
      </div>
    </>
  );
};

export default LanguageSelector;
