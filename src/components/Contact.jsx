import '/public/assets/css/contact.css'

import { useState } from "react";
export function Contact(){
  const [form, setForm] = useState({ name: "", email: "", message: ""});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado correctamente`);
    // aquí normalment faríem una crida fetch a l'API; per l'entrega guardem en localStorage com a prova
    const existing = JSON.parse(localStorage.getItem("contact_messages") || "[]");
    existing.push({...form, date: new Date().toISOString()});
    localStorage.setItem("contact_messages", JSON.stringify(existing));
    setStatus("Missatge enviat. Gràcies!");
    setForm({ name: "", email: "", message: ""});
  };

  return (
    <section className="contacto-section">
      <h1 className='titulo'>CONTÁCTANOS</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className='name'>
          Nombre 
        <input name="name" className='input' value={form.name} onChange={handleChange} required />
        </label>
        <label className='email'>
          Correo electrónico
          <input name="email" className='input' type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label className='mensaje'>
          Mensaje
          <textarea name="message" className='input' value={form.message} onChange={handleChange} rows="6" required />
        </label>
        <div className='boton'>
            <button className='envia' type="submit">Enviar</button>
        </div>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}
