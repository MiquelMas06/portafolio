// export function Projects({ projects }) {
// //   const all = projectes.flatMap(member =>
//     // member.projects.map(p => ({ ...p, owner: member.name }))
//     const all = (projects || []).flatMap(member =>
//     (member.projects || []).map(p => ({
//       ...p,
//       owner: member.name
//     }))
//   );

//   return (
//     <section>
//       <h1>Proyectos</h1>

//       {all.length === 0 ? (
//         <p>No hay proyectos.</p>
//       ) : (
//         <div style={{ display: "grid", gap: "1rem" }}>
//           {all.map(p => (
//             <div key={p.id} style={{ padding: "1rem", border: "1px solid #ccc" }}>
//               <h3>{p.title}</h3>
//               <p>{p.description}</p>
//               <small>Hecho por: {p.owner}</small>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
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
