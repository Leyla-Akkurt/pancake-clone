import { React, useRef, useEffect } from 'react';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const Swiper = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.initialize();
  }, []);

  return (
    <div className="home-1-scroller">
      <div className="home-1-scroller-container">
        {/* scroller-wrapper */}
        <swiper-container
          ref={swiperElRef}
          init="false"
          effect="fade"
          fade-effect-cross-fade="true"
          watch-slides-progress="true"
          loop="true"
          pagination="true"
          pagination-clickable="true"
          pagination-el="#myswiper-pagination"
          pagination-type="bullets"
          autoplay="true"
          autoplay-delay="3000"
        >
          {/* scroller-slide slides */}
          <swiper-slide>
            <div className="slide-container">
              <div className="slide-wrapper">
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
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="slide-container">
              <div className="slide-wrapper">
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
                    <span className="dump-image">
                      <img
                        src="./images/svg/dumpImg.svg"
                        alt="dump placeholder"
                      />
                    </span>
                    <picture>
                      <source
                        srcSet="./images/decorations/perpetual640.webp"
                        media="(min-width: 968px)"
                      />
                      <img
                        src="./images/decorations/perpetual.webp"
                        alt="bunny holding a contract"
                        className="scroller-slide-image"
                      />
                    </picture>
                  </span>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="slide-container">
              <div className="slide-wrapper">
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
                    <span className="dump-image">
                      <img
                        src="./images/svg/dumpImg.svg"
                        alt="dump placeholder"
                      />
                    </span>
                    <picture>
                      <source
                        srcSet="./images/decorations/lottery3840w.webp"
                        media="(min-width: 1400px)"
                      />
                      <source
                        srcSet="./images/decorations/lottery1200w.webp"
                        media="(min-width: 576px)"
                      />
                      <img
                        src="./images/decorations/lotteryMobile384w.webp"
                        alt="bunny holding a contract"
                        className="scroller-slide-image"
                      />
                    </picture>
                  </span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <div id="myswiper-pagination"></div>
      </div>
    </div>
  );
};
export default Swiper;
