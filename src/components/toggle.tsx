import { useTheme } from "utils/hooks/use-theme.hook";

const Toggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="c-toggle">
      <label className="c-toggle__label">
        <input
          type="checkbox"
          className="c-toggle__input"
          onClick={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
