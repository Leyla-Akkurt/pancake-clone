import useCoinPrice from '../hooks/useCoinPrice';
import MenuButton from './MenuButton';
import SettingsButton from './SettingsButton';

function NavBar({ hasOverlay, hasOverlayHandler }) {
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
        {/* <!-- menu - buttons (left) --> */}
        <div className="nav-items-menu">
          <div className="nav-items-menu-wrapper">
            <MenuButton
              target={{ name: 'Trade', href: '/trade' }}
              innerLinks={[
                { href: '/swap', name: 'Swap', type: 'null' },
                { href: '/limit', name: 'Limit', type: 'null' },
                { href: '/liquidity', name: 'Liquidity', type: 'null' },
                { href: '/perpetual', name: 'Perpetual', type: 'exit' },
                { href: '/bridge', name: 'Bridge', type: 'exit' },
              ]}
            />
            <MenuButton
              target={{ name: 'Earn', href: '/trade' }}
              innerLinks={[
                { href: '/farms', name: 'Farms', type: 'null' },
                { href: '/pools', name: 'Pools', type: 'null' },
              ]}
            />
            <MenuButton
              target={{ name: 'Win', href: '/trade' }}
              innerLinks={[
                {
                  href: '/competition',
                  name: 'Trading Competition',
                  type: 'null',
                },
                {
                  href: '/prediction',
                  name: 'Prediction (BETA)',
                  type: 'null',
                },
                { href: '/lottery', name: 'Lottery', type: 'null' },
                { href: '/pottery', name: 'Pottery (BETA)', type: 'null' },
              ]}
            />
            <MenuButton
              target={{ name: 'NFT', href: '/trade' }}
              innerLinks={[
                { href: '/overview', name: 'Overview', type: 'null' },
                { href: '/collections', name: 'Collections', type: 'null' },
                { href: '/activity', name: 'Activity', type: 'null' },
              ]}
            />
            <MenuButton
              altTarget={{
                src: './images/svg/three-dots.svg',
                alt: '3 dots icon',
              }}
              innerLinks={[
                { href: '/info', name: 'Info', type: 'null' },
                { href: '/ifo', name: 'IFO', type: 'null' },
                { href: '/voting', name: 'Voting', type: 'VOTE NOW' },
                { name: 'hrCosmetic', type: 'hrCosmetic' },
                { href: '/leaderboard', name: 'Leaderboard', type: 'null' },
                { name: 'hrCosmetic', type: 'hrCosmetic' },
                { href: '/blog', name: 'Blog', type: 'exit' },
                { href: '/docs', name: 'Docs', type: 'exit' },
              ]}
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
          <button className="simple-btn">
            <img src="./images/svg/language-icon.svg" alt="mini globe icon" />
          </button>
        </div>
        <SettingsButton
          hasOverlay={hasOverlay}
          hasOverlayHandler={hasOverlayHandler}
        />
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
