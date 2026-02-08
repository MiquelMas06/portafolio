import { useState } from 'react';
import '/public/assets/css/index.css';
export function Home({ presentacion }) {
    const [visible, setVisible] = useState(false);
  return (
    <section>
      <div className='encabezado'>
      <h1 className='texto'>Miquel's Web S.A</h1>
      <h2 className='texto2'>Presentación Formal</h2>
      </div>
      <div className="profile-card">
          <div key={presentacion.id}>
            <img src={presentacion.imagen} className='avatar' alt="" />
            <h3 className="presentacion-name" >{presentacion.name}</h3>
            <p className="tagline" ><strong>Rol:</strong> {presentacion.role}</p>
            <p className='bio' >{presentacion.description}</p>
            <p>{visible ? presentacion.mas : ""}</p>
            <div className='divider'></div>
            <button className='button' onClick={() => setVisible(!visible)}>
              {visible ? "Mostrar menos" : "Conoceme más"}</button>
            <p><strong>Proyectos:</strong>{presentacion.projects.length}</p>
          </div>
      </div>
    </section>
  );
}