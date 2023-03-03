import {
  ContentWrapper,
  Header,
  BottomNav,
  MainContent,
} from './components/index';
import { useState } from 'react';

function App() {
  const [showPhishingBanner, setShowPhishingBanner] = useState(true);

  return (
    <ContentWrapper>
      <Header hasPhishingBannerHandler={setShowPhishingBanner} />
      <MainContent hasPhishingBanner={showPhishingBanner} />
      <BottomNav />
    </ContentWrapper>
  );
}

export default App;
