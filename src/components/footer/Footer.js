import React from 'react';
import MainFooter from '../mainFooter/MainFooter';
import StartInSeconds from '../startInSeconds/StartInSeconds';

function Footer() {
  return (
    <div id="footer" className="footer">
      <StartInSeconds />
      <MainFooter />
    </div>
  );
}

export default Footer;
