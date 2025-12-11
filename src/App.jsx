import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import Footer from "./components/Footer";
import '/public/assets/css/general.css';
export default function App() {
  const [page, setPage] = useState("home");        // controla qué sección mostrar
  const [data, setData] = useState(null);          // datos del JSON
  const [projects, setProjects] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  useEffect(() => {
    fetch("/public/portafolio.json")
      .then(res => res.json())
      .then(json => setProjects(json.presentacion.projects || []));
  }, []);
  useEffect(() => {
    fetch("/public/portafolio.json")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);
  useEffect(() => {
    fetch("/public/newsletter.json")
      .then(news => news.json())
      .then(newslet => setNewsletter(newslet));
  }, []);
  if (!data) return <p>Cargando...</p>;

  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
        <button onClick={() => setPage("home")}>Inicio</button>
        <button onClick={() => setPage("projects")}>Proyectos</button>
        <button onClick={() => setPage("contact")}>Contacto</button>
        <button onClick={() => setPage("newsletter")}>Newsletter</button>
      </nav>

      {page === "home" && <Home presentacion={data.presentacion} />}
      {page === "projects" && <Projects projects={projects} />}
      {page === "contact" && <Contact />}
      {page === "newsletter" && <Newsletter newsletter={newsletter.newsletter}/>}
      <div>
        <Footer/>
      </div>
    </div>
  );
}
