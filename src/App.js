// App.js
import React, { useState } from 'react';
import ThemeContext from './contexts/ThemeContext';
import './App.css';
import UserList from './components/UserList';
import { UserProvider } from './contexts/UserContext';
import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
      setDarkMode(prevMode => !prevMode);
  };
  return (
    <div className="App">
      <header className="App-header">
        User Management Dashboard
        
      </header>
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        <UserProvider>
      <main>
        <Header/>
        <UserList />
      </main>
      </UserProvider>
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
