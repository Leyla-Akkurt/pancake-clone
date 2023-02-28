import React from 'react';
import Home1 from './home1/Home1';
import Home2 from './home2/Home2';

class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="main-content-container">
          <Home1 />
          <Home2 />
        </div>
      </div>
    );
  }
}

export default MainContent;
