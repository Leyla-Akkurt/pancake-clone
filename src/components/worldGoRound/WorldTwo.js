import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CounterWorld from './CounterWorld';

function WorldTwo() {
  const { ref: WorldRef, inView } = useInView();
  const [circleContent, setCircleContent] = useState();
  const [totalContent, setTotalContent] = useState();
  const [burnedContent, setBurnedContent] = useState();
  useEffect(() => {
    if (inView) {
      setCircleContent(() => <CounterWorld number={166580157} />);
      setTotalContent(() => <CounterWorld number={366858290} />);
      setBurnedContent(() => <CounterWorld number={730148902} />);
    }
  }, [inView]);
  console.log(circleContent);
  return (
    <div className="container-world-down" ref={WorldRef}>
      <div className="top-part">
        <div className="stats one">
          <div className="tinted-text">Circulating Supply</div>
          <div className="full-text">{circleContent}</div>
        </div>
        <div className="stats-two two addBorder2">
          <div className="tinted-text testing">Total supply</div>
          <div className="full-text testing">{totalContent}</div>
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
          <div className="full-text testing">{burnedContent}</div>
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
