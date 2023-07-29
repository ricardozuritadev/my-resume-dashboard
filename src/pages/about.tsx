const About = () => {
  return (
    <div className="p-about">
      <div className="p-about__card p-about__card--bio">
        <button className="p-about__button">Bio</button>
      </div>
      <div className="p-about__card p-about__card--cv">
        <h2 className="p-about__title">Curriculum Vitae</h2>
        <button className="p-about__button">Descargar CV</button>
      </div>
      <div className="p-about__card p-about__card--hobbies"></div>
      <div className="p-about__card p-about__card--live"></div>
      <div className="p-about__card p-about__card--lang"></div>
    </div>
  );
};

export default About;
