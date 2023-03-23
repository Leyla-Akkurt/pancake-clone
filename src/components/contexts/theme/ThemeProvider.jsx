import { useState, useEffect } from 'react';
import ThemeContext, { initialThemeState } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme);

  useEffect(() => {
    const savedThemeLocal = window.localStorage.getItem('hasDarkMode'); // returns a string
    // check what the user prefers and set it as the initialThemeState
    const match = !!savedThemeLocal
      ? savedThemeLocal === 'false'
        ? false
        : true
      : window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('match', match);
    setTheme(match);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('hasDarkMode', theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
