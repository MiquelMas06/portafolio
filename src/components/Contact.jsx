import React, { useState } from "react";

export function Contact(){
  const [form, setForm] = useState({ name: "", email: "", message: ""});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // aquí normalment faríem una crida fetch a l'API; per l'entrega guardem en localStorage com a prova
    const existing = JSON.parse(localStorage.getItem("contact_messages") || "[]");
    existing.push({...form, date: new Date().toISOString()});
    localStorage.setItem("contact_messages", JSON.stringify(existing));
    setStatus("Missatge enviat. Gràcies!");
    setForm({ name: "", email: "", message: ""});
  };

  return (
    <section className="contact container">
      <h1>Contacta'ns</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nom
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Correu electrònic
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Missatge
          <textarea name="message" value={form.message} onChange={handleChange} rows="6" required />
        </label>
        <button type="submit">Enviar</button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}
