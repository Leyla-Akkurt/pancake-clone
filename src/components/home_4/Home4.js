import { SecondPart } from '../secondPart/SecondPart';
import { TradeAnything } from '../tradeAnything/TradeAnything';

export function Home4() {
  return (
    <section id="home-4" className="home-4">
      <div className="svg home-4-svg">
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          className="home-4-svg-line"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
        </svg>
      </div>
      <TradeAnything />
      <SecondPart />
    </section>
  );
}
