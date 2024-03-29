import React from 'react';
import Home1 from './home1/Home1';
import Home2 from './home2/Home2';
import Home4 from './home4/Home4';
import Home3 from './home3/Home3';
import WorldGoRound from './worldGoRound/WorldGoRound';

function MainContent({ hasPhishingBanner }) {
  return (
    <div
      className="main-content"
      style={{ marginTop: hasPhishingBanner ? '7.875rem' : '3.563rem' }}
    >
      <div className="main-content-container">
        <Home1 />
        <Home2 />
        <Home4 />
        <Home3 />
        <WorldGoRound />
      </div>
    </div>
  );
}

export default MainContent;
