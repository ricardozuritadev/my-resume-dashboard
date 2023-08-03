import { useTranslation } from "react-i18next";

import { SIDENAV_CONSTANTS } from "constants/sidenav.constants";

import { links } from "utils/data/links";

import LinkComponent from "components/link-component";

const Sidenav = () => {
  const { t } = useTranslation();

  return (
    <aside className="l-sidenav">
      <div className="l-sidenav__top">
        <section>LOGO</section>

        <section>
          <div className="l-sidenav__pic-container">
            <img
              src="images/rz_avatar.png"
              alt="Profile pic"
              className="l-sidenav__pic"
            />
          </div>
          <div className="l-sidenav__info">
            <h3>{SIDENAV_CONSTANTS.NAME}</h3>
            <p className="l-sidenav__profession">
              {t(SIDENAV_CONSTANTS.PROFESSION)}
            </p>
          </div>
        </section>

        <section className="l-sidenav__nav">
          <nav>
            <ul className="l-sidenav__links">
              {links.map((link) => (
                <LinkComponent
                  key={link.text}
                  url={link.url}
                  icon={link.icon}
                  text={t(link.text)}
                />
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </aside>
  );
};

export default Sidenav;
