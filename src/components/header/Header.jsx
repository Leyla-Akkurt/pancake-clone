import React from 'react';
import PhishingBanner from './PhishingBanner';
import NavBar from './NavBar';

class Header extends React.Component {
  render() {
    return (
      <div id="head-area" className="head-area">
        <PhishingBanner />
        <NavBar />
      </div>
    );
  }
}

export default Header;
