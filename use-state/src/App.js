import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { ObtenerAnio } from './components/ObtenerAnio';

function App() {
  let anio = new Date();
  const anioActual = anio.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>EL estado en React - Hook useState</h1>
        <ObtenerAnio anio={anioActual}/>
        <hr/>
        <MiPrimerEstado/>
      </header>
    </div>
  );
}

export default App;
