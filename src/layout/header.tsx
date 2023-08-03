import LanguageSelector from "components/language-selector";
import Toggle from "components/toggle";

const Header = () => {
  return (
    <header className="l-header">
      <h2 className="l-header__title">Acerca de mí</h2>
      <div className="l-header__actions">
        <LanguageSelector />
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
