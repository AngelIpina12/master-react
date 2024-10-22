import logo from './logo.svg';
import './App.css';
import { Manage } from './components/Manage';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Ejercicio con hook useMemo */}
        <Tasks />
        {/* Ejercicio con metodo memo para componentes */}
        {/* <Manage /> */}
      </header>
    </div>
  );
}

export default App;
