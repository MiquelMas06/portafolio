import "/public/assets/css/newsletter.css";
import { useState } from "react";

export function Newsletter({ newsletter }) {
  const [visible, setVisible] = useState(true);
  return (
    <section>
<div class="container">
<div class="header">
<h2>Todo el mundo quiere viajar gratis</h2>
<p>En la web de creacion de paginas con react puedes encontrar todo lo que deseas sobre paginas web, a demas de descuentos exclusivos para viajes a sitios diversos como: </p>
</div>

{newsletter.map(p => (
          <div key={p.id} class="section">
          <img src={p.image} alt="Bangkok" />
          <h2>{p.title}</h2>
          <p style={{ display: visible ? "block" : "none" }}>{p.content}</p>
          <button class="btn" onClick={() => setVisible(false)}>READ MORE</button>
          </div>))}

</div>
    </section>
  );
}
