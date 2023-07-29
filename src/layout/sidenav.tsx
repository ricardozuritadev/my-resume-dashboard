import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

import { SIDENAV_CONSTANTS } from "constants/sidenav.constants";

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
              <a href="#" className="l-sidenav__link">
                <li className="l-sidenav__element">
                  <span className="l-sidenav__icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span className="l-sidenav__text">
                    {t(SIDENAV_CONSTANTS.ABOUT)}
                  </span>
                </li>
              </a>
              <a href="#" className="l-sidenav__link">
                <li className="l-sidenav__element">
                  <span className="l-sidenav__icon">
                    <FontAwesomeIcon icon={faLaptopCode} />
                  </span>
                  <span className="l-sidenav__text">
                    {t(SIDENAV_CONSTANTS.SKILLS)}
                  </span>
                </li>
              </a>
              <a href="#" className="l-sidenav__link">
                <li className="l-sidenav__element">
                  <span className="l-sidenav__icon">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                  <span className="l-sidenav__text">
                    {t(SIDENAV_CONSTANTS.EXPERIENCE)}
                  </span>
                </li>
              </a>
              <a href="#" className="l-sidenav__link">
                <li className="l-sidenav__element">
                  <span className="l-sidenav__icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <span className="l-sidenav__text">
                    {t(SIDENAV_CONSTANTS.EDUCATION)}
                  </span>
                </li>
              </a>
              <a href="#" className="l-sidenav__link">
                <li className="l-sidenav__element">
                  <span className="l-sidenav__icon">
                    <FontAwesomeIcon icon={faIdCard} />
                  </span>
                  <span className="l-sidenav__text">
                    {t(SIDENAV_CONSTANTS.CONTACT)}
                  </span>
                </li>
              </a>
            </ul>
          </nav>
        </section>

        <section>THEME TOGGLE</section>
      </div>

      {/* <div className="l-sidenav__bottom">
        <button onClick={() => i18n.changeLanguage("es")}>ESPAÑOL</button>
        <button onClick={() => i18n.changeLanguage("en")}>INGLES</button>
      </div> */}
    </aside>
  );
};

export default Sidenav;
