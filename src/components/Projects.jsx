export function Projects({ projects }) {
  if (!projects || projects.length === 0) return <p>No hay proyectos.</p>;

  return (
    <section>
      <h1>Proyectos</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {projects.map(p => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <small>Hecho por: {p.owner}</small>
            {p.image && <img src={p.image} alt={p.title} style={{ maxWidth: "200px", marginTop: "0.5rem", padding: "1rem" }} />}
          </div>
        ))}
      </div>
    </section>
  );
}
