import React from 'react';

class PhishingBanner extends React.Component {
  // phshingPopUpValue = null or true/false.
  phishingPopUpValue = JSON.parse(
    window.localStorage.getItem('hasPhishingPopUp')
  );
  // init state = null. Phishing warning component wont render.
  state = {
    hasPhishingPopUp: this.phishingPopUpValue,
  };

  // set the state and the local storage
  setHasPhishingPopUp = (value = this.phishingPopUpValue) => {
    this.setState({ hasPhishingPopUp: value });
    window.localStorage.setItem('hasPhishingPopUp', value.toString());
    this.props.hasPhishingBannerHandler(false);
  };

  handleStorage = (e) => {
    if (this.state.hasPhishingPopUp === null) {
      this.setHasPhishingPopUp(true);
    } else {
      e !== undefined && this.setHasPhishingPopUp(false);
    }
  };

  componentDidMount() {
    this.handleStorage();
  }

  render() {
    // dont render the component if hasPhishingPopUp is false
    if (!this.state.hasPhishingPopUp) {
      return null;
    }
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
            type="button"
            id="phishing-banner-close"
            className="phishing-banner-close"
            onClick={this.handleStorage}
          >
            <img src="./images/svg/close-button.svg" alt="close button" />
          </button>
        </div>
      </div>
    );
  }
}

export default PhishingBanner;
