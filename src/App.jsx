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

  return (
    <ContentWrapper>
      <Header hasPhishingBannerHandler={setShowPhishingBanner} />
      <MainContent hasPhishingBanner={showPhishingBanner} />
      <Footer />
      <ScrollUp />
      <BottomNav />
    </ContentWrapper>
  );
}

export default App;
