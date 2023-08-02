import Toggle from "components/toggle";

const Header = () => {
  return (
    <header className="l-header">
      <div>About me</div>
      <div className="l-header__actions">
        <div>language</div>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
