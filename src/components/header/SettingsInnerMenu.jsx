import LightSwitch from '../switch/LightSwitch';
import Switch from '../switch/Switch';

// SettingsInnerMenu content
const innerLinks = [
  { name: 'Global', perc: 'none' },
  { name: 'Dark Mode', perc: 'light-switch' },
  { name: 'Subgraph Health Indicator', perc: 'switch' },
  { name: 'Show username', perc: 'switch' },
  { name: 'Token Risk Scanning', perc: 'switch' },
  {
    name: 'Default Transaction Speed (GWEI)',
    perc: ['Default', 'Standard(5)', 'Fast(6)', 'Instant(7)'],
  },
];

// Appears onClick
const SettingsInnerMenu = ({ hasOverlay, hasOverlayHandler }) => {
  const handleClick = () => hasOverlayHandler(!hasOverlay);

  return (
    <div className="settings-inner-menu">
      <div className="settings-inner-menu-header">
        <div className="header-text">
          <h2>Settings</h2>
        </div>
        <button onClick={handleClick}>
          <img
            src="./images/svg/x-icon.svg"
            className="close-btn"
            alt="x icon"
          />
        </button>
      </div>
      <div className="settings-inner-menu-body">
        <div className="body-container">
          <div className="body-container-wrapper">
            {innerLinks &&
              innerLinks.map((link, index) => {
                return (
                  <div key={index}>
                    {/* PERC = NONE */}
                    {link.perc === 'none' && (
                      <div className="secondary-header">Global</div>
                    )}
                    {/* PERC = LIGHT-SWITCH */}
                    {link.perc === 'light-switch' && (
                      <div className="body-content plus-light-switch">
                        <div className="body-content-text">{link.name}</div>
                        <LightSwitch />
                      </div>
                    )}
                    {/* PERC = SWITCH */}
                    {link.perc === 'switch' && (
                      <div className="body-content plus-switch">
                        <div className="body-content-text">{link.name}</div>
                        <Switch />
                      </div>
                    )}
                    {/* PERC = ARRAY */}
                    {Array.isArray(link.perc) && (
                      <div className="body-content plus-array">
                        <div className="body-content-text">{link.name}</div>
                        <div className="plus-array-items">
                          {link.perc.map((perc, index) => {
                            const button =
                              index === 2 ? (
                                <button key={perc + index.toString()} autoFocus>
                                  {perc}
                                </button>
                              ) : (
                                <button key={perc + index.toString()}>
                                  {perc}
                                </button>
                              );
                            return button;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsInnerMenu;
