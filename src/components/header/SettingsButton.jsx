const SettingsButton = ({ hasOverlay, hasOverlayHandler }) => {
  const handleClick = () => hasOverlayHandler(!hasOverlay);

  return (
    <>
      <div className="nav-options-settings">
        <button className="simple-btn" type="button" onClick={handleClick}>
          <img src="./images/svg/settings-icon.svg" alt="mini gear icon" />
        </button>
      </div>
    </>
  );
};

export default SettingsButton;
