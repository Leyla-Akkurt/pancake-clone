import useCoinPrice from '../hooks/useCoinPrice';
import MenuButton from './MenuButton';

function NavBar() {
  const { coinPrice, isLoading } = useCoinPrice();

  return (
    <nav className="nav-container">
      {/* <!-- left - side --> */}
      <div className="nav-items">
        <div className="nav-items-logo">
          <a href="/" aria-label="Pancake home page">
            {/* <!-- desktop - logo --> */}
            <img
              src="./images/svg/navbarlogo-desktop.svg"
              className="nav-items-logo-desktop"
              alt="pancakeswap official logo"
            />
            {/* <!-- mobile - logo --> */}
            <img
              src="./images/svg/navbarlogo-mobile.svg"
              className="nav-items-logo-mobile"
              alt="pancakeswap official logo for mobile devices"
            />
          </a>
        </div>
        <div className="nav-items-menu">
          <div className="nav-items-menu-wrapper">
            <MenuButton
              target={{ name: 'Trade', href: '/trade' }}
              innerLinks={[
                { href: '/swap', name: 'Swap' },
                { href: '/limit', name: 'Limit' },
                { href: '/liquidity', name: 'Liquidity' },
                { href: '/perpetual', name: 'Perpetual' },
                { href: '/bridge', name: 'Bridge' },
              ]}
            />
            <MenuButton target={{ name: 'Earn', href: '/trade' }} />
            <MenuButton target={{ name: 'Win', href: '/trade' }} />
            <MenuButton target={{ name: 'NFT', href: '/trade' }} />
            <MenuButton
              altTarget={{
                src: './images/svg/three-dots.svg',
                alt: '3 dots icon',
              }}
            />
          </div>
        </div>
      </div>
      {/* <!-- right - side --> */}
      <div className="nav-options">
        <a href="/" className="nav-options-price">
          <img
            src="./images/svg/price-icon.svg"
            className="price-icon"
            alt="mini pancakeswap's logo inside a blue circle"
          />
          <span id="cake-price">
            ${coinPrice && coinPrice}
            {isLoading && <i>loading..</i>}
          </span>
        </a>
        <div className="nav-options-language">
          <img src="./images/svg/language-icon.svg" alt="mini globe icon" />
        </div>
        <div className="nav-options-settings">
          <img src="./images/svg/settings-icon.svg" alt="mini gear icon" />
        </div>
        <div className="nav-options-chain">
          <img
            src="./images/chains/bnb-chain.png"
            className="bnb-chain-icon"
            alt="mini bnb's chain icon"
          />
          <div className="nav-options-chain-text">
            <span className="desktop-text">BNB Smart Chain</span>
            <span className="mobile-text">BNB</span>
          </div>
          <img
            src="./images/svg/down-arrow.svg"
            className="down-arrow"
            alt="mini arrow pointing down"
          />
        </div>
        <button className="nav-options-wallet-connection">
          <span className="desktop-text">Connect Wallet</span>
          <span className="mobile-text">Connect</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
