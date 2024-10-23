import logo from './logo.svg';
import './App.css';
import { MyForm } from './components/MyForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyForm />
      </header>
    </div>
  );
}

export default App;
