import logo from './logo.svg';
import './App.css';
import { PrimerosPasos } from './PrimerosPasos';
import { Props } from './Props';

function App() {
  const fichaMedica = {
    altura: "187 cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!!!
        </p>
        <Props nombre="Angel" apellidos="Ipiña" ficha={fichaMedica} />
        <hr/>
        <PrimerosPasos/>
      </header>
    </div>
  );
}

export default App;
