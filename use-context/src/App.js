import './App.css';
import { AppRouter } from './routing/AppRouter';
import { TestContext } from './context/TestContext';
import { useEffect, useState } from 'react';
function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    let userStorage = JSON.parse(localStorage.getItem("user"));
    setUser(userStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  
  const course = {
    id: 1,
    title: "Master en React",
    content: "Muchas horas de contenido"
  }

  return (
    <div className="App">
      <TestContext.Provider value={{user, setUser}}>
        <AppRouter />
      </TestContext.Provider>
    </div>
  );
}

export default App;
