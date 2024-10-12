import logo from './logo.svg';
import './App.css';
import { PrimerosPasos } from './PrimerosPasos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!!!
        </p>
        <PrimerosPasos/>
      </header>
    </div>
  );
}

export default App;
