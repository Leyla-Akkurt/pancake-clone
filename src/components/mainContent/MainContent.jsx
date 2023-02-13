import React from 'react';
import Home1 from './home1/Home1';

class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="main-content-container">
          <Home1 />
        </div>
      </div>
    );
  }
}

export default MainContent;
