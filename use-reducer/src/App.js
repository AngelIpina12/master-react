import logo from './logo.svg';
import './App.css';
import { MyGames } from './components/MyGames';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyGames />
      </header>
    </div>
  );
}

export default App;
