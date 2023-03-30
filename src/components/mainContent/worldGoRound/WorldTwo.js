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
  return (
    <div className="container-world-down" ref={WorldRef}>
      <div className="stats-wrapper">
        <div className="stats-tinted-text">Circulating Supply</div>
        <div className="stats-full-text">{circleContent}</div>
      </div>
      <div className="stats-wrapper area-b">
        <div className="stats-tinted-text">Total supply</div>
        <div className="stats-full-text">{totalContent}</div>
      </div>
      <div className="stats-wrapper area-c">
        <div className="stats-tinted-text">Max Supply</div>
        <div className="stats-full-text">750,000,000 </div>
      </div>
      <div className="stats-wrapper stats-wrapper-alt3 area-d">
        <div className="stats-tinted-text">Market Cadiv</div>
        <div className="stats-full-text">$640 million</div>
      </div>
      <div className="stats-wrapper stats-wrapper-alt2 area-e">
        <div className="stats-tinted-text">Burned to date</div>
        <div className="stats-full-text">{burnedContent}</div>
      </div>
      <div className="stats-wrapper stats-wrapper-alt2 area-f">
        <div className="stats-tinted-text">Current emissions</div>
        <div className="stats-full-text">9.9/block</div>
      </div>
    </div>
  );
}

export default WorldTwo;
