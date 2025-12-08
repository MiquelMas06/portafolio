import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // aquí normalment faríem una crida fetch a l'API; per l'entrega guardem en localStorage com a prova
    const existing = JSON.parse(localStorage.getItem("new_email") || "[]");
    existing.push({ email, date: new Date().toISOString() });
    localStorage.setItem("new_email", JSON.stringify(existing));
    setMsg("¡Gracias por suscribirte!");
    setEmail("");
  };

  return (
    <section>
      <h1>Newsletter</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email"
          value={email}
          placeholder="Tu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Suscribirme</button>
      </form>

      {msg && <p>{msg}</p>}
    </section>
  );
}
