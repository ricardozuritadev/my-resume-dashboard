import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type LinkComponentProps = {
  url: string;
  icon: IconProp;
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
        <span className="l-sidenav__icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="l-sidenav__text">{text}</span>
      </li>
    </NavLink>
  );
};

export default LinkComponent;
