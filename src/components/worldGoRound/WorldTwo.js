import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function WorldTwo() {
  const { ref, inView } = useInView();

  return (
    <div className="container-world-down" ref={ref}>
      <div className="top-part-world">
        <div className="stats-one">
          <p className="tinted-text">Circulating Supply</p>
          <h1 className="full-text">
            {inView && (
              <CountUp
                start={0}
                end={166580157}
                duration={1}
                separator=","
                delay={1}
              />
            )}
          </h1>
        </div>
        <div className="stats-two">
          <p className="tinted-text testing">Total supply</p>
          <h1 className="full-text testing">
            {inView && (
              <CountUp
                start={0}
                end={366858290}
                duration={1}
                separator=","
                delay={1}
              />
            )}
          </h1>
        </div>
        <div className="stats-three">
          <p className="tinted-text testing">Max Supply</p>
          <h1 className="full-text testing">750,000,000 </h1>
        </div>
      </div>
      <div className="bot-part-world">
        <div className="stats-one">
          <p className="tinted-text">Market Cap</p>
          <h1 className="full-text">$640 million</h1>
        </div>
        <div className="stats-two">
          <p className="tinted-text testing">Burned to date</p>
          <h1 className="full-text testing">
            {inView && (
              <CountUp
                start={0}
                end={730148902}
                duration={1}
                delay={1}
                separator=","
              />
            )}
          </h1>
        </div>
        <div className="stats-three">
          <p className="tinted-text testing">Current emissions</p>
          <h1 className="full-text testing">9.9/block</h1>
        </div>
      </div>
    </div>
  );
}

export default WorldTwo;
