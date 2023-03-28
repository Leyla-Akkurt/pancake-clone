import React from 'react';
//true = dark , false = light

export const initialThemeState = {
  theme: false,
  setTheme: () => null,
};

const ThemeContext = React.createContext(initialThemeState);

export default ThemeContext;
