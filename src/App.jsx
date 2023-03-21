import {
  ContentWrapper,
  Header,
  BottomNav,
  MainContent,
} from './components/index';
import { useState } from 'react';

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
      <BottomNav />
    </ContentWrapper>
  );
}

export default App;
