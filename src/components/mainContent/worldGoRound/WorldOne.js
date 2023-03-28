import React from 'react';

class WorldOne extends React.Component {
  render() {
    return (
      <div className="container-world">
        <div className="container-world-up">
          <div id="world-left-part">
            <h2 className="subheader-text">
              <span id="purple-cake">CAKE</span> makes our world go round.
            </h2>
            <p id="purple-cake-two">
              CAKE token is at the heart of the PancakeSwap ecosystem. Buy it,
              win it, farm it, spend it, stake it... heck, you can even vote
              with it!
            </p>
            <div id="button-link">
              <a href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56">
                <button id="buycake">Buy CAKE</button>
              </a>
              <a
                href="https://docs.pancakeswap.finance/tokenomics/cake"
                id="buycake-link"
              >
                Learn
                <svg
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="buycake-link-svg"
                >
                  <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="world-right-part">
            <div className="world-right-part-container">
              <img
                src="./images/home/cake/bottom-right@2x.webp"
                loading="lazy"
                decoding="async"
                class="world-right-part-container-img-placeholder"
                alt="cake"
              />
              <div className="world-right-part-container-img">
                <img
                  className="cake-image1"
                  src=".\images\home\cake\coin@2x.webp"
                  alt=""
                />
              </div>
              <div className="world-right-part-container-img">
                <img
                  className="cake-image2"
                  src=".\images\home\cake\bottom-right@2x.webp"
                  alt=""
                />
              </div>
              <div className="world-right-part-container-img">
                <img
                  className="cake-image3"
                  src=".\images\home\cake\top-right@2x.webp"
                  alt=""
                />
              </div>
              <div className="world-right-part-container-img">
                <img
                  className="cake-image4"
                  src=".\images\home\cake\top-left@2x.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorldOne;
