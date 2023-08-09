import { NavLink } from "react-router-dom";

type LinkComponentProps = {
  url: string;
  icon: JSX.Element;
  text: string;
};

const LinkComponent = ({ url, icon, text }: LinkComponentProps) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        `l-sidenav__link ${isActive ? "active" : ""}`
      }
    >
      <li className="l-sidenav__element">
        <span className="l-sidenav__icon">{icon}</span>
        <span className="l-sidenav__text">{text}</span>
      </li>
    </NavLink>
  );
};

export default LinkComponent;
