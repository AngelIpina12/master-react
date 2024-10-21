import logo from './logo.svg';
import './App.css';
import { Manage } from './components/Manage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Manage />
      </header>
    </div>
  );
}

export default App;
