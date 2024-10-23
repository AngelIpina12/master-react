import logo from './logo.svg';
import './App.css';
import { MyUser } from './components/MyUser';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyUser />
      </header>
    </div>
  );
}

export default App;
