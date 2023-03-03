import React from 'react';
import Home1 from './home1/Home1';
import Home2 from './home2/Home2';

function MainContent({ hasPhishingBanner }) {
  return (
    <div
      className="main-content"
      style={{ marginTop: hasPhishingBanner ? '7.875rem' : '3.563rem' }}
    >
      <div className="main-content-container">
        <Home1 />
        <Home2 />
      </div>
    </div>
  );
}

export default MainContent;
