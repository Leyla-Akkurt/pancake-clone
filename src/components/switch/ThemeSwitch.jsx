import React, { useContext } from 'react';
import ThemeContext from '../contexts/theme/ThemeContext';

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="light-switch">
      <input
        type="checkbox"
        className="light-switch-checkbox"
        checked={theme}
        onChange={(e) => setTheme(e.currentTarget.checked)}
      />
      <div className="light-switch-active">
        <div className="light-switch-active-wrapper">
          <img src="./images/svg/switch-moon-active.svg" alt="moon icon" />
        </div>
      </div>
      <div className="light-switch-checkbox-icons">
        <img src="./images/svg/switch-sun.svg" alt="sun icon" />
        <img src="./images/svg/switch-moon.svg" alt="moon icon" />
      </div>
    </div>
  );
};

export default ThemeSwitch;
