import { ReactElement } from "react";

const Header = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return <header className="l-header">{children}</header>;
};

export default Header;
