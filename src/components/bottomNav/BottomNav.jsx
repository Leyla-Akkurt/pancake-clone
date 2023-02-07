import React from 'react';

class BottomNav extends React.Component {
  render() {
    return (
      <nav className="mobile-nav-items">
        <ul className="mobile-nav-items-container">
          <li className="menu-item">
            <button>
              <img
                src="./images/svg/bottom-menu/trade-dark.svg"
                alt="abstract icon for trade category"
              />
              Trade
            </button>
          </li>
          <li className="menu-item">
            <button>
              <img
                src="./images/svg/bottom-menu/earn-dark.svg"
                alt="abstract icon for earn category"
              />
              Earn
            </button>
          </li>
          <li className="menu-item">
            <button>
              <img
                src="./images/svg/bottom-menu/win-dark.svg"
                alt="abstract icon for win category"
              />
              Win
            </button>
          </li>
          <li className="menu-item">
            <button>
              <img
                src="./images/svg/bottom-menu/nft-dark.svg"
                alt="abstract icon for nft category"
              />
              NFT
            </button>
          </li>
          <li className="menu-item">
            <button>
              <img src="./images/svg/three-dots.svg" alt="3 dots icon" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default BottomNav;
