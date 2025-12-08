export function Home({ presentacion }) {
  return (
    <section>
      <h1>Miquel's Web S.A</h1>
      <h2>Presentación Formal</h2>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div key={presentacion.id} style={{ padding: "1rem", border: "1px solid #ccc" }}>
            <h3>{presentacion.name}</h3>
            <p><strong>Rol:</strong> {presentacion.role}</p>
            <p>{presentacion.description}</p>
            <p><strong>Proyectos:</strong> {presentacion.projects.length}</p>
          </div>
      </div>
    </section>
  );
}
