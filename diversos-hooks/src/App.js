import logo from './logo.svg';
import './App.css';
import { TestsCustom } from './components/TestsCustom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestsCustom />
      </header>
    </div>
  );
}

export default App;
