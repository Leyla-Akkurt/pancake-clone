export function TradeAnything() {
  //Main Content Part2
  //Trade Anything.... Part

  return (
    <div className="tradeAnything">
      <div className="paragraphOne">
        <h2>
          <span>Trade </span>anything. No registration, no hassle.
        </h2>

        <div className="subTitle">
          Trade any token on BNB Smart Chain in seconds, just by connecting your
          wallet.
        </div>

        <div className="tradeNow">
          <a href="https://pancakeswap.finance/swap">
            <input type="button" value="Trade Now" className="buttonTrade" />
          </a>

          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://docs.pancakeswap.finance/"
            className="learnLink"
          >
            Learn
            <svg
              viewBox="0 0 24 24"
              color="primary"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              className="learn-svg"
            >
              <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="containerOfCoinImages">
        <div className="containerOfCoinImages-container">
          <div className="images">
            <img src="./images/home/trade/BNB@2x.webp" alt="BNB token" />
          </div>

          <div className="images">
            <img src="./images/home/trade/BTC@2x.webp" alt="BTC token" />
          </div>

          <div className="images">
            <img src="./images/home/trade/CAKE@2x.webp" alt="CAKE token" />
          </div>
        </div>
      </div>
    </div>
  );
}
