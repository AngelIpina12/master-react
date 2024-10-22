import logo from './logo.svg';
import './App.css';
import { ExampleComponent } from './components/ExampleComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ExampleComponent />
      </header>
    </div>
  );
}

export default App;
