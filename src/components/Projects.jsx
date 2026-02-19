import "../assets/css/projects.css";
export function Projects({ projects }) {
  if (!projects || projects.length === 0) return <p>No hay proyectos.</p>;

  return (
    <section>
      <div className="encabezado">
        <h1 className="texto">Proyectos</h1>
      </div>
      <div className="proyecto">
        {projects.map(p => (
          <div key={p.id} className="card-proyecto">
            <div className="info-proyecto">
            <h3 className="titulo-proyecto">{p.title}</h3>
            <p className="descr-proyecto">{p.description}</p>
            <small>Hecho por: {p.owner}</small>
            </div>
            {p.image && <img className="img-proyecto" src={p.image} alt={p.title}/>}
          </div>
        ))}
      </div>
    </section>
  );
}
