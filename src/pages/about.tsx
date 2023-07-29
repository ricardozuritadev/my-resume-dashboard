import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="p-about">
      <div className="p-about__card p-about__card--bio">
        <button className="p-about__button">Mi historia</button>
      </div>

      <div className="p-about__card p-about__card--cv">
        <div className="p-about__cv-container">
          <h3>Curriculum Vitae</h3>
          <p>/2023</p>
        </div>
        <FontAwesomeIcon icon={faFilePdf} size="7x" className="p-about__pdf" />
        <button className="p-about__button">Descargar CV</button>
      </div>

      <div className="p-about__card p-about__card--hobbies"></div>

      <div className="p-about__card p-about__card--live"></div>

      <div className="p-about__card p-about__card--lang"></div>
    </div>
  );
};

export default About;
