import React from 'react';

class Backdrop extends React.Component {
  render() {
    return (
      <div className="home-1-backdrop">
        <div className="home-1-backdrop-container">
          <img
            src="./images/svg/home-1-backdrop.svg"
            alt="decorative wavy line at the bottom of home1 section"
          />
        </div>
      </div>
    );
  }
}

export default Backdrop;
