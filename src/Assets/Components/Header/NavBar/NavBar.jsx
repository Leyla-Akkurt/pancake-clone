import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav class="nav-container">
        {/* <!-- left - side --> */}
        <div class="nav-items">
          <div class="nav-items-logo">
            <a href="/" aria-label="Pancake home page">
              {/* <!-- desktop - logo --> */}
              <img
                src="./images/svg/navbarlogo-desktop.svg"
                class="nav-items-logo-desktop"
                alt="pancakeswap official logo"
              />
              {/* <!-- mobile - logo --> */}
              <img
                src="./images/svg/navbarlogo-mobile.svg"
                class="nav-items-logo-mobile"
                alt="pancakeswap official logo for mobile devices"
              />
            </a>
          </div>
          <div class="nav-items-menu">
            <ul>
              <li class="menu-item">
                <button>Trade</button>
              </li>
              <li class="menu-item">
                <button>Earn</button>
              </li>
              <li class="menu-item">
                <button>Win</button>
              </li>
              <li class="menu-item">
                <button>NFT</button>
              </li>
              <li class="menu-item">
                <button>
                  <img src="./images/svg/three-dots.svg" alt="3 dots icon" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- right - side --> */}
        <div class="nav-options">
          <div class="nav-options-price">
            <img
              src="./images/svg/price-icon.svg"
              class="price-icon"
              alt="mini pancakeswap's logo inside a blue circle"
            />
            <span id="cake-price">$</span>
          </div>
          <div class="nav-options-language">
            <img src="./images/svg/language-icon.svg" alt="mini globe icon" />
          </div>
          <div class="nav-options-settings">
            <img src="./images/svg/settings-icon.svg" alt="mini gear icon" />
          </div>
          <div class="nav-options-chain">
            <img
              src="./images/chains/bnb-chain.png"
              class="bnb-chain-icon"
              alt="mini bnb's chain icon"
            />
            <div class="nav-options-chain-text">
              <span class="desktop-text">BNB Smart Chain</span>
              <span class="mobile-text">BNB</span>
            </div>
            <img
              src="./images/svg/down-arrow.svg"
              class="down-arrow"
              alt="mini arrow pointing down"
            />
          </div>
          <button class="nav-options-wallet-connection">
            <span class="desktop-text">Connect Wallet</span>
            <span class="mobile-text">Connect</span>
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
