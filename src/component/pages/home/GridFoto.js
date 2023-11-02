import "./GridFoto.css"

const GridFoto = ({ foto }) => {
  return (
    <article className="grid-foto">
      <div className="meal-card-image">
        <img src={foto.image} alt={foto.image} />
      </div>
      <div className="grid-foto-header">
        <h3>{foto.name}</h3>
        <span>{foto.price}</span>
      </div>
      <div className="grid-foto-footer">
        <p>{foto.description}</p>
      </div>
    </article>
  );
};

export default GridFoto;
