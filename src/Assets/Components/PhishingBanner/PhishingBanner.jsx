import React from 'react';

class PhishingBanner extends React.Component {
  render() {
    return (
      <div class="phishing-warning-container">
        {/* <!-- text-area --> */}
        <div class="phishing-banner">
          <div class="phishing-banner-text-area">
            <img
              src="./images/decorations/phishing-warning-bunny.webp"
              class="phishing-banner-img"
              alt="phishing-warning"
            />
            <div class="phishing-banner-text">
              <span class="warning warning-important">Phishing warning:</span>
              <span class="warning">please make sure you're visiting</span>
              <span class="warning warning-url">
                https://pancakeswap.finance
              </span>
              <span class="warning">- check the URL carefully.</span>
            </div>
          </div>
          {/* <!-- close-button --> */}
          <button
            id="phishing-banner-close"
            class="phishing-banner-close"
            onclick="closeBanner()"
          >
            <img src="./images/svg/close-button.svg" alt="close button" />
          </button>
        </div>
      </div>
    );
  }
}

export default PhishingBanner;
