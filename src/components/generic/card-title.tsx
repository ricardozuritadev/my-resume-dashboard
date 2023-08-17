type CardTitleProps = {
  title: string;
  subtitle?: string;
};

const CardTitle = ({ title, subtitle }: CardTitleProps) => {
  return (
    <div className="card__header">
      <h3 className="card__title">{title}</h3>
      {subtitle && <p className="card__subtitle">{subtitle}</p>}
    </div>
  );
};

export default CardTitle;
