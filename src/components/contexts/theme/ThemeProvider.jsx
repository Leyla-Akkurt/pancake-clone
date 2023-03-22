import { useState, useEffect } from 'react';
import ThemeContext, { initialThemeState } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme);

  useEffect(() => {
    const savedThemeLocal = window.localStorage.getItem('globalTheme');
    !!savedThemeLocal && setTheme(savedThemeLocal);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('globalTheme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
