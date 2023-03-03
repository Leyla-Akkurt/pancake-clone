import { useEffect, useState } from 'react';
import PhishingBanner from './PhishingBanner';
import NavBar from './NavBar';

const Header = ({ hasPhishingBannerHandler }) => {
  const [styleTop, setstyleTop] = useState({ top: '0' });
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos || currentScrollPos <= 126) {
      setstyleTop({ top: '0' });
    } else {
      setstyleTop({ top: '-7.875rem' });
    }

    setPrevScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div id="head-area" className="head-area" style={styleTop}>
      <PhishingBanner hasPhishingBannerHandler={hasPhishingBannerHandler} />
      <NavBar />
    </div>
  );
};

export default Header;
