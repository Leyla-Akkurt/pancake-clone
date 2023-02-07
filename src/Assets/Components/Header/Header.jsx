import React from 'react';
import PhishingBanner from '../PhishingBanner/PhishingBanner';
import NavBar from '../Header/NavBar/NavBar';

class Header extends React.Component {
  render() {
    return (
      <div id="head-area" class="head-area">
        <PhishingBanner />
        <NavBar />
      </div>
    );
  }
}

export default Header;
