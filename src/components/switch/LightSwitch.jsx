const LightSwitch = () => {
  return (
    <div className="light-switch">
      <input type="checkbox" className="light-switch-checkbox" defaultChecked />
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

export default LightSwitch;
