import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  const [list, setList] = useState([])

  return (
    <div>
      <div className="layout">
          {/* Cabecera */}
          <header className="header">
            <div className="logo">
              <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
          </header>
          {/* Barra de navegación */}
          <nav className="nav">
            <ul>
              <li><a href="/#">Inicio</a></li>
              <li><a href="/#">Películas</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Contacto</a></li>
            </ul>
          </nav>
          {/* Contenido principal */}
          <section className="content">
            {/* aqui va el listado de películas */}
            <Listado list={list} setList={setList}/>
            
          </section>
          {/* Barra lateral */}
          <aside className="lateral">
            <Buscador/>
            <Crear setList={setList}/>
          </aside>
          {/* Pie de página */}
          <footer className="footer">
            &copy; Máster en Javascript ES12 y TypeScript
          </footer>
      </div>
    </div>
  );
}

export default App;
