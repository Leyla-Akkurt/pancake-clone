import React from 'react';
import MenuButton from '../header/MenuButton';

class BottomNav extends React.Component {
  render() {
    return (
      <nav className="mobile-nav-items">
        <div className="mobile-nav-items-container">
          <MenuButton
            target={{ name: 'Trade', href: '/trade' }}
            innerLinks={[
              { href: '/swap', name: 'Swap', type: 'null' },
              { href: '/limit', name: 'Limit', type: 'null' },
              { href: '/liquidity', name: 'Liquidity', type: 'null' },
              { href: '/perpetual', name: 'Perpetual', type: 'exit' },
              { href: '/bridge', name: 'Bridge', type: 'exit' },
            ]}
            mobile={{
              src: './images/svg/bottom-menu/trade-dark.svg',
              alt: 'abstract icon for trade category',
            }}
          />
          <MenuButton
            target={{ name: 'Earn', href: '/trade' }}
            innerLinks={[
              { href: '/farms', name: 'Farms', type: 'null' },
              { href: '/pools', name: 'Pools', type: 'null' },
            ]}
            mobile={{
              src: './images/svg/bottom-menu/earn-dark.svg',
              alt: 'abstract icon for earn category',
            }}
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
            mobile={{
              src: './images/svg/bottom-menu/win-dark.svg',
              alt: 'abstract icon for win category',
            }}
          />
          <MenuButton
            target={{ name: 'NFT', href: '/trade' }}
            innerLinks={[
              { href: '/overview', name: 'Overview', type: 'null' },
              { href: '/collections', name: 'Collections', type: 'null' },
              { href: '/activity', name: 'Activity', type: 'null' },
            ]}
            mobile={{
              src: './images/svg/bottom-menu/nft-dark.svg',
              alt: 'abstract icon for nft category',
            }}
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
            mobile
          />
        </div>
      </nav>
    );
  }
}

export default BottomNav;
