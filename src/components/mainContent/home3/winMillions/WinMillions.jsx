import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function WinMillions() {
  const predictionRef = useRef();
  const lotteryRef = useRef();
  const { ref: winMillionRef, inView } = useInView();
  const [lotteryValue, setLotteryValue] = useState('rgba(8, 6, 11, 0.6)');
  const [predictionValue, setPredictionValue] = useState('rgba(8, 6, 11, 0.6)');
  const [predictionColor, setPredictionColor] = useState('transparent');
  const [lotteryColor, setLotteryColor] = useState('transparent');

  useEffect(() => {
    if (inView === true) {
      setTimeout(() => {
        setPredictionValue('transparent');
        setPredictionColor('rgb(40, 13, 95)');
        setLotteryValue('transparent');
        setLotteryColor('#ffb237');
      }, 1500);
      predictionRef.current.style.background = predictionValue;
      predictionRef.current.style.color = predictionColor;
      lotteryRef.current.style.background = lotteryValue;
      lotteryRef.current.style.color = lotteryColor;
    }
  }, [predictionValue, inView, lotteryColor, lotteryValue, predictionColor]);
  console.log(inView);
  console.log(predictionValue);
  return (
    <div className="win-millions-container">
      <div className="win-millions-wrapper">
        <div className="win-millions-assets">
          <div className="win-millions-cards-container">
            <div className="win-millions-cards-wrapper">
              <img
                src="./images/home/prediction-cards/bottom-left@2x.webp"
                loading="lazy"
                decoding="async"
                className="img-placeholder"
                alt=""
              />
              <div className="card-yellow-left">
                <img
                  className="card-yellow-left-img"
                  src="./images/home/prediction-cards/bottom-left@2x.webp"
                  alt="yellow card"
                />
              </div>
              <div className="card-green">
                <img
                  className="card-green-img"
                  src="./images/home/prediction-cards/green@2x.webp"
                  alt="green card"
                />
              </div>
              <div className="card-pink">
                <img
                  className="card-pink-img"
                  src="./images/home/prediction-cards/red@2x.webp"
                  alt="pink card"
                />
              </div>
              <div className="card-yellow-back">
                <img
                  className="card-yellow-back-img"
                  src=".\images\home\prediction-cards\top-right@2x.webp"
                  alt="yellow card"
                />
              </div>
            </div>
          </div>

          <div className="win-millions-balls-container">
            <div className="win-millions-balls-wrapper">
              <img
                src="./images/home/lottery-balls/2@2x.webp"
                loading="lazy"
                decoding="async"
                className="img-placeholder"
                alt=""
              />
              <div className="ball-n2">
                <img
                  className="ball-n2-img"
                  src="./images/home/lottery-balls/2@2x.webp"
                  alt="ball-1"
                />
              </div>
              <div className="ball-n4">
                <img
                  className="ball-n4-img"
                  src="./images/home/lottery-balls/4@2x.webp"
                  alt="ball-2"
                />
              </div>
              <div className="ball-n6">
                <img
                  className="ball-n6-img"
                  src="./images/home/lottery-balls/6@2x.webp"
                  alt="ball-3"
                />
              </div>
              <div className="ball-n7">
                <img
                  className="ball-n7-img"
                  src="./images/home/lottery-balls/7@2x.webp"
                  alt="ball-4"
                />
              </div>
              <div className="ball-n9">
                <img
                  className="ball-n9-img"
                  src="./images/home/lottery-balls/9@2x.webp"
                  alt="ball-5"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="win-millions-main">
          <div className="win-millions-main-container">
            <h2 className="win-millions-main-container-header">
              <span className="win-millions-main-container-header-span">
                Win{' '}
              </span>
              millions in prizes
            </h2>
            <div className="win-millions-main-container-subtext">
              Provably fair, on-chain games.
            </div>
            <div className="win-millions-main-container-subtext win-millions-main-container-subtext-last">
              Win big with PancakeSwap.
            </div>
            <div className="win-millions-main-duo-cards" ref={winMillionRef}>
              <div className="prediction">
                <div className="prediction-container">
                  <div className="prediction-wrapper">
                    <div className="prediction-wrapper-inner">
                      <div className="svg-wrapper">
                        <svg
                          viewBox="0 0 24 24"
                          width="36px"
                          color="inverseContrast"
                          xmlns="http://www.w3.org/2000/svg"
                          className="prediction-svg"
                        >
                          <path d="M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z"></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="text-wrapper">
                        <div className="text-wrapper-header">Prediction</div>
                        <h2
                          className="text-wrapper-subheader"
                          ref={predictionRef}
                        >
                          $1.1 billion
                        </h2>
                        <div className="text-wrapper-subtext">
                          in BNB + CAKE won so far
                        </div>
                        <div className="text-wrapper-subtext-last">
                          Predict the price trend of BNB or CAKE to win
                        </div>
                      </div>

                      <div className="text-wrapper-button-container">
                        <a href="/" className="text-wrapper-button-a">
                          <button className="button-og">
                            <div className="button-og-text">Play</div>
                            <svg
                              viewBox="0 0 24 24"
                              width="20px"
                              xmlns="http://www.w3.org/2000/svg"
                              className="button-og-svg"
                            >
                              <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                            </svg>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lottery">
                <div className="lottery-container">
                  <div className="lottery-wrapper">
                    <div className="lottery-wrapper-inner">
                      <div className="svg-wrapper">
                        <svg
                          viewBox="0 0 24 24"
                          width="36px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="lottery-svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.4144 13.4824L9.36944 5.52736L10.0765 6.23446C10.3694 6.52736 10.8443 6.52736 11.1372 6.23446C11.4301 5.94157 11.4301 5.4667 11.1372 5.1738L10.4301 4.4667L12.7281 2.16869C13.5092 1.38764 14.7755 1.38764 15.5565 2.16869L16.6173 3.22943C16.8125 3.42465 16.8125 3.74115 16.6173 3.93637C15.641 4.91268 15.641 6.49559 16.6173 7.4719C17.5936 8.44821 19.1765 8.44821 20.1528 7.4719C20.348 7.27669 20.6645 7.27669 20.8597 7.4719L21.9205 8.53265C22.7015 9.3137 22.7015 10.58 21.9205 11.3611L19.6224 13.6592L18.9153 12.9521C18.6224 12.6592 18.1475 12.6592 17.8546 12.9521C17.5617 13.245 17.5617 13.7198 17.8546 14.0127L18.5617 14.7198L10.6068 22.6748C9.82574 23.4558 8.55941 23.4558 7.77836 22.6748L6.7177 21.6141C6.52244 21.4189 6.52244 21.1023 6.7177 20.907C7.69401 19.9307 7.69401 18.3478 6.7177 17.3715C5.74139 16.3952 4.15848 16.3952 3.18217 17.3715C2.9869 17.5667 2.67032 17.5667 2.47506 17.3715L1.4144 16.3108C0.633351 15.5298 0.633351 14.2634 1.4144 13.4824ZM13.2584 7.29521C12.9655 7.00232 12.4907 7.00232 12.1978 7.29521C11.9049 7.5881 11.9049 8.06298 12.1978 8.35587L12.9049 9.06298C13.1978 9.35587 13.6727 9.35587 13.9655 9.06298C14.2584 8.77009 14.2584 8.29521 13.9655 8.00232L13.2584 7.29521ZM15.0262 10.1236C15.3191 9.83075 15.794 9.83074 16.0869 10.1236L16.794 10.8307C17.0869 11.1236 17.0869 11.5985 16.794 11.8914C16.5011 12.1843 16.0262 12.1843 15.7333 11.8914L15.0262 11.1843C14.7333 10.8914 14.7333 10.4165 15.0262 10.1236Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="text-wrapper">
                        <div className="text-wrapper-header">Lottery</div>
                        <h2 className="text-wrapper-subheader" ref={lotteryRef}>
                          <CountUp
                            duration={1}
                            end={80.553}
                            delay={2}
                            prefix="$"
                            decimals={3}
                          />
                        </h2>
                        <div className="text-wrapper-subtext">
                          in CAKE prizes this round
                        </div>
                        <div className="text-wrapper-subtext-last">
                          Buy tickets with CAKE, win CAKE if your numbers match
                        </div>
                      </div>

                      <div className="text-wrapper-button-container">
                        <a href="/" className="text-wrapper-button-a">
                          <button className="button-og">
                            <div className="button-og-text">Buy Tickets</div>
                            <svg
                              viewBox="0 0 24 24"
                              width="20px"
                              xmlns="http://www.w3.org/2000/svg"
                              className="button-og-svg"
                            >
                              <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                            </svg>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinMillions;
