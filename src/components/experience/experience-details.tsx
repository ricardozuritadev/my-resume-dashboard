const ExperienceDetails = () => {
  return (
    <div className="c-experience-details">
      <div className="c-experience-details__first">
        <h3 className="card__title c-experience-details__company">Cleverpy</h3>
        <p className="c-experience-details__dates">
          Marzo 2022 - Septiembre 2022
        </p>
        <p className="c-experience-details__description">
          Cleverpy es una consultora de software especializada en el desarrollo
          de soluciones basadas en Machine Learning, Computer Vision y Sistemas
          de Información Georreferenciada para Industria y Smart Cities
        </p>
      </div>

      <div className="c-experience-details__second">
        <div>
          <p>Puesto</p>
          <h3>Desarrollador Frontend</h3>
        </div>
        <div>Tareas y responsabilidades</div>
      </div>

      <div className="c-experience-details__third">
        <div>Habilidades aplicadas</div>
        <div>Habilidades aprendidas</div>
        <div>Principales retos</div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
