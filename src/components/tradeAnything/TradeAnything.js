
export function TradeAnything() {
//Main Content Part2
//Trade Anything.... Part

return(
<div className="tradeAnything">
                
                <div className="paragraphOne">
                  <h2>
                    <span>Trade </span>anything. No registration, no hassle.
                  </h2>
                 
                  <div className="subTitle">
                    Trade any token on BNB Smart Chain in seconds, just by
                    connecting your wallet.
                  </div>
                 
                  <div className="tradeNow">
                   
                    <a href="https://pancakeswap.finance/swap">
                      <input
                        type="button"
                        value="Trade Now"
                        className="buttonTrade"
                      />
                    </a>

                    
                    <a
                      target="_blank"
                      href="https://docs.pancakeswap.finance/"
                      className="learnLink"
                      >Learn </a>
                  </div>
                </div>
              

                <div className="containerOfCoinImages">
                  <div className="containerOfCoinImages-container">
                    
                    <div className="images">
                      <img
                      src="./images/home/trade/BNB@2x.webp"
                      alt="BNB token"
                      />
                    </div>

                    <div className="images">
                      <img
                        src="./images/home/trade/BTC@2x.webp"
                        alt="BTC token"
                      />
                    </div>

                    <div className="images">
                      <img
                        src="./images/home/trade/CAKE@2x.webp"
                        alt="CAKE token"
                      />
                    </div>
                  </div>
                </div>
                
        </div>
)
  }
 