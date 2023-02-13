import React from 'react';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

class Swiper extends React.Component {
  render() {
    return (
      <div className="home-1-scroller">
        <swiper-container
          loop="true"
          pagination="true"
          pagination-type="bullets"
          pagination-clickable="true"
          pagination-horizontal-class="swiper-pagination-horizontal"
          effect="fade"
          fade-effect-cross-fade="true"
          inject-styles={[
            `
            :host(.swiper-pagination) {
              color: red;
            }
            `,
          ]}
        >
          <swiper-slide id="slide-1">
            <div className="scroller-slide-text">
              <img
                src="./images/decorations/AptosXPancakeSwap.webp"
                className="text"
                alt="aptos x pancakeswap logo"
              />
              <h2 className="subtext">Hello Aptos Project Teams!</h2>
              <a href="/">
                <button>
                  <div className="button-text">👋 Get In Touch</div>
                  <img
                    src="./images/svg/open-link.svg"
                    className="button-image"
                    alt="mini rectangular icon with an arrow pointing out"
                  />
                </button>
              </a>
            </div>

            <div className="scroller-slide-image-container">
              <span className="image-wrapper">
                <img
                  src="./images/decorations/Aptos-bunny.webp"
                  className="scroller-slide-image-auto"
                  alt="aptos bunny"
                />
              </span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="scroller-slide-text">
              <h2 className="text">Perpetual Futures</h2>
              <h2 className="subtext">Up to 100× Leverage</h2>
              <a href="/">
                <button>
                  <div className="button-text">Trade Now</div>
                  <img
                    src="./images/svg/arrow-right.svg"
                    className="button-image"
                    alt="mini arrow icon pointing right"
                  />
                </button>
              </a>
            </div>

            <div className="scroller-slide-image-container">
              <span className="image-wrapper">
                <img
                  srcSet="
                    ./images/decorations/perpetual640.webp 1200w,
                    ./images/decorations/perpetual.webp     967w
                  "
                  src="./images/decorations/perpetual.webp"
                  className="scroller-slide-image-auto"
                  alt="bunny holding a contract"
                />
              </span>
            </div>
          </swiper-slide>
          <swiper-slide id="slide-3">
            <div className="scroller-slide-text">
              <h2 className="text">Win $78.810 in Lottery</h2>
              <div className="timer-clock">
                <h2 id="clock-timer" className="subtext">
                  <span className="clock-timer-hours"></span>
                  <span className="clock-timer-subtext">h</span>

                  <span className="clock-timer-mins"></span>
                  <span className="clock-timer-subtext">m</span>

                  <span className="clock-timer-secs"></span>
                  <span className="clock-timer-subtext">s</span>
                </h2>
              </div>
              <a href="/">
                <button>
                  <div className="button-text">Play Now</div>
                  <img
                    src="./images/svg/arrow-right.svg"
                    className="button-image"
                    alt="mini arrow icon pointing right"
                  />
                </button>
              </a>
            </div>

            <div className="scroller-slide-image-container">
              <span className="image-wrapper">
                <img
                  srcSet="
                    ./images/decorations/lottery3840w.webp      1400w,
                    ./images/decorations/lottery1200w.webp      1079w,
                    ./images/decorations/lotteryMobile384w.webp  967w,
                    ./images/decorations/lotteryMobile256w.webp  369w
                  "
                  src="./images/decorations/lotteryMobile384w.webp"
                  className="scroller-slide-image-auto"
                  alt="lottery bunny"
                />
              </span>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    );
  }
}

export default Swiper;
