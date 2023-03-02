import React from 'react';

class PhishingBanner extends React.Component {
  // dont render the PhishingBanner = default State
  state = {
    hasPhishingPopUp: false,
  };

  componentDidMount() {
    const phishingPopUpValue = window.localStorage.getItem('hasPhishingPopUp');
    // if there isn't a hasPhishingPopUp value set in the local storage then render the PhishingBanner component
    if (phishingPopUpValue === null) {
      this.setState({ hasPhishingPopUp: true });
      window.localStorage.setItem('hasPhishingPopUp', 'true');
    } else {
      // else check the phishingPopUpValue and set the state for it accordingly
      !Boolean(phishingPopUpValue)
        ? this.setState({ hasPhishingPopUp: true })
        : this.setState({ hasPhishingPopUp: false });
    }
  }

  closePhisingBanner = () => {
    this.setState({
      hasPhishingPopUp: false,
    });
    window.localStorage.setItem('hasPhishingPopUp', 'false');
  };

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
            onClick={this.closePhisingBanner}
          >
            <img src="./images/svg/close-button.svg" alt="close button" />
          </button>
        </div>
      </div>
    );
  }
}

export default PhishingBanner;
