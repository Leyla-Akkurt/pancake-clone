import React from 'react';

class PhishingBanner extends React.Component {
  render() {
    return (
      <div className="phishing-warning-container">
        {/* <!-- text-area --> */}
        <div className="phishing-banner">
          <div className="phishing-banner-text-area">
            <img
              src="./images/decorations/phishing-warning-bunny.webp"
              className="phishing-banner-img"
              alt="phishing-warning"
            />
            <div className="phishing-banner-text">
              <span className="warning warning-important">
                Phishing warning:
              </span>
              <span className="warning">please make sure you're visiting</span>
              <span className="warning warning-url">
                https://pancakeswap.finance
              </span>
              <span className="warning">- check the URL carefully.</span>
            </div>
          </div>
          {/* <!-- close-button --> */}
          <button
            id="phishing-banner-close"
            className="phishing-banner-close"
            // onClick={closeBanner()}
          >
            <img src="./images/svg/close-button.svg" alt="close button" />
          </button>
        </div>
      </div>
    );
  }
}

export default PhishingBanner;
