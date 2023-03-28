import React from 'react';

class CallToAction extends React.Component {
  render() {
    return (
      <>
        <img
          src="./images/svg/home-2/home-2-icon.svg"
          alt="mini icon of pancake's face"
          className="home-2-logo"
        />
        <h2 className="home-2-content-header">Used by millions.</h2>
        <h2 className="home-2-content-subheader">Trusted with billions.</h2>
        <div className="home-2-content-text">
          PancakeSwap has the most users of any decentralized platform, ever.
        </div>
        <div className="home-2-content-flexy-text">
          And those users are now entrusting the platform with over $3.2 billion
          in funds.
        </div>
        <div className="home-2-content-subtext">Will you join them?</div>
      </>
    );
  }
}

export default CallToAction;
