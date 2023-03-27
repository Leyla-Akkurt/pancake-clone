import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function WorldTwo() {
  const { ref, inView } = useInView();

  return (
    <div className="container-world-down" ref={ref}>
      <div className="top-part">
        <div className="stats one">
          <div className="tinted-text">Circulating Supply</div>
          <div className="full-text">
            {inView && (
              <CountUp
                start={0}
                end={166580157}
                duration={1}
                separator=","
                delay={1}
              />
            )}
          </div>
        </div>
        <div className="stats-two two addBorder2">
          <div className="tinted-text testing">Total supply</div>
          <div className="full-text testing">
            {inView && (
              <CountUp
                start={0}
                end={366858290}
                duration={1}
                separator=","
                delay={1}
              />
            )}
          </div>
        </div>
        <div className="stats-two three addBorder2">
          <div className="tinted-text testing">Max Supply</div>
          <div className="full-text testing">750,000,000 </div>
        </div>
        <div className="stats-two four addedBorder noneBorder">
          <div className="tinted-text">Market Cadiv</div>
          <div className="full-text testing">$640 million</div>
        </div>
        <div className="stats-two five addedBorder">
          <div className="tinted-text testing">Burned to date</div>
          <div className="full-text testing">
            {inView && (
              <CountUp
                start={0}
                end={730148902}
                duration={1}
                delay={1}
                separator=","
              />
            )}
          </div>
        </div>
        <div className="stats-two six addedBorder">
          <div className="tinted-text testing">Current emissions</div>
          <div className="full-text testing">9.9/block</div>
        </div>
      </div>
    </div>
  );
}

export default WorldTwo;
