import "../assets/css/newsletter.css";
import { Noticia } from "./noticia.jsx";
import { useState } from "react";

export function Newsletter({ newsletter }) {
    const [form, setForm] = useState({ name: "", email: "", message: ""});
    const [status, setStatus] = useState(null);
    const handleChange = (e) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Suscripción con correo ${form.email}`);
    // aquí normalment faríem una crida fetch a l'API; per l'entrega guardem en localStorage com a prova
    const existing = JSON.parse(localStorage.getItem("contact_messages") || "[]");
    existing.push({...form, date: new Date().toISOString()});
    localStorage.setItem("contact_messages", JSON.stringify(existing));
    setStatus("T'has suscrit a la nostra pàgina, gràcies!");
    setForm({ name: "", email: "", message: ""});
  };
  return (
    <section>
  <div className="header">
    <h2 className="news-titulo">Todo el mundo quiere viajar gratis</h2>
    <p className="news-desc">En la web de creacion de paginas con react puedes encontrar todo lo que deseas sobre paginas web, a demas de descuentos exclusivos para viajes a sitios diversos como: </p>
  </div>
  <div className="noticias">
    {newsletter.map(p => (
    <Noticia key={p.id} newsletter={p}/>
    ))}
  </div>
  <div className="Suscripcion">
  <h1 className='titulo'>Suscribete a nuestra plataforma</h1>
    <form className="contact-form" onSubmit={handleSubmit}>
          <label className='email'>
          Correu electrònic
          <input name="email" className='input' type="email" value={form.email} onChange={handleChange} required />
        </label>
        <div className='boton'>
            <button className='envia' type="submit">Enviar</button>
        </div>
        {status && <p className="status">{status}</p>}
    </form>
  </div>

          
    </section>
  );
}
