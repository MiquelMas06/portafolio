import "../assets/css/newsletter.css";
import { useState } from "react";

export function Noticia({ newsletter }) {
  const [visible, setVisible] = useState(true);
  return (
        <div key={newsletter.id} className="section">
          <img src={newsletter.image} alt={newsletter.name} />
          <h2>{newsletter.title}</h2>
          <p>{visible ? newsletter.content : ""}</p>
          <button className="btn" onClick={() => setVisible(!visible)}>
            {visible ? "Mostrar menos" : "Mostrar más"}
          </button>
        </div>
  );
}
