import {
  ContentWrapper,
  Header,
  BottomNav,
  Footer,
  MainContent,
} from './components/index';
import { useState } from 'react';
import ScrollUp from './components/scrollUp/ScrollUp';

function App() {
  const initPhishingBannerState = localStorage.getItem('hasPhishingPopUp')
    ? JSON.parse(localStorage.getItem('hasPhishingPopUp'))
    : false;

  const [showPhishingBanner, setShowPhishingBanner] = useState(
    initPhishingBannerState
  );

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <ContentWrapper hasOverlay={showOverlay} hasOverlayHandler={setShowOverlay}>
      <Header
        hasPhishingBannerHandler={setShowPhishingBanner}
        hasOverlay={showOverlay}
        hasOverlayHandler={setShowOverlay}
      />
      <MainContent hasPhishingBanner={showPhishingBanner} />
      <Footer />
      <ScrollUp />
      <BottomNav />
    </ContentWrapper>
  );
}

export default App;
