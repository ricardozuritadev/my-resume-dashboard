import { useTranslation } from "react-i18next";

import { SIDENAV_CONSTANTS } from "constants/sidenav.constants";

import { PAGES } from "utils/data/pages";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import LinkComponent from "components/link-component";

const Sidenav = () => {
  const { t } = useTranslation();

  return (
    <aside className="l-sidenav">
      <div className="l-sidenav__top">
        <section className="l-sidenav__logo">LOGO</section>

        <section className="l-sidenav__profile">
          <div className="l-sidenav__pic-container">
            <img
              src="images/rz_avatar.png"
              alt="Profile pic"
              className="l-sidenav__pic"
            />
          </div>
          <div className="l-sidenav__info">
            <h3 className="l-sidenav__name">{SIDENAV_CONSTANTS.NAME}</h3>
            <p className="l-sidenav__profession">
              {t(SIDENAV_CONSTANTS.PROFESSION)}
            </p>
          </div>
        </section>

        <section className="l-sidenav__nav">
          <nav>
            <ul className="l-sidenav__links">
              {PAGES.map((page) => (
                <LinkComponent
                  key={page.text}
                  url={page.url}
                  icon={page.icon}
                  text={t(page.text)}
                />
              ))}
            </ul>
          </nav>
        </section>
        <div></div>
      </div>

      <section className="l-sidenav__bottom">
        <a href="https://www.linkedin.com/in/ricardozuritadev/" target="_blank">
          <FaLinkedin className="l-sidenav__contact" />
        </a>
        <a href="https://github.com/ricardozuritadev" target="_blank">
          <FaGithub className="l-sidenav__contact" />
        </a>
        <a href="mailto:ricardo.zurita.dev@gmail.com" target="_blank">
          <FaEnvelope className="l-sidenav__contact" />
        </a>
      </section>
    </aside>
  );
};

export default Sidenav;
