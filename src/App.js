import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import MainBody from './components/MainBody';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import ThemeContext from './utils/ThemeContext';
function App() {
  const [theme, setTheme] = useState('light')
  const handleTheme = () => {
    console.log("hiii")
    let themeSelect = theme == 'light' ? 'dark' : 'light'
    setTheme(themeSelect)

  }
  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";
  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;
  return (
    <Provider store={AppStore}>
      <ThemeContext.Provider value={{ theme: theme, setTheme,handleTheme }}>
        <MainBody />
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
