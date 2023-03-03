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

  return (
    <ContentWrapper>
      <Header hasPhishingBannerHandler={setShowPhishingBanner} />
      <MainContent hasPhishingBanner={showPhishingBanner} />
      <BottomNav />
    </ContentWrapper>
  );
}

export default App;
