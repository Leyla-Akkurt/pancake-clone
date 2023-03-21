import {
  ContentWrapper,
  Header,
  BottomNav,
  Footer,
  MainContent,
  WinMillions,
  WorldOne,
  WorldTwo,
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

  return (
    <ContentWrapper>
      <Header hasPhishingBannerHandler={setShowPhishingBanner} />
      <MainContent hasPhishingBanner={showPhishingBanner} />
      <WinMillions />
      <WorldOne />
      <WorldTwo />
      <Footer />
      <ScrollUp />
      <BottomNav />
    </ContentWrapper>
  );
}

export default App;
