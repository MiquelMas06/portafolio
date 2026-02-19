import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import Footer from "./components/Footer";
import './App.css'
export default function App() {
  const [page, setPage] = useState("home");        // controla qué sección mostrar
  const [data, setData] = useState(null);          // datos del JSON
  const [projects, setProjects] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  useEffect(() => {
    fetch("/public/data/portafolio.json")
      .then(res => res.json())
      .then(json => setProjects(json.presentacion.projects || []));
  }, []);
  useEffect(() => {
    fetch("/public/data/portafolio.json")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);
  useEffect(() => {
    fetch("/public/data/newsletter.json")
      .then(news => news.json())
      .then(newslet => setNewsletter(newslet));
  }, []);
  if (!data) return <p>Cargando...</p>;

  return (
    <section>
      <header>
        <div className="contenedorItems">
          <button className="btn-nav" onClick={() => setPage("home")}>Inicio</button>
          <button className="btn-nav" onClick={() => setPage("projects")}>Proyectos</button>
          <button className="btn-nav" onClick={() => setPage("contact")}>Contacto</button>
          <button className="btn-nav" onClick={() => setPage("newsletter")}>Newsletter</button>
        </div>
      </header>
      <main className="cuerpo">
      {page === "home" && <Home presentacion={data.presentacion} />}
      {page === "projects" && <Projects projects={projects} />}
      {page === "contact" && <Contact />}
      {page === "newsletter" && <Newsletter newsletter={newsletter.newsletter}/>}      
      </main>
      <Footer/>
    </section>
  );
}
