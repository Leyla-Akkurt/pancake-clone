import React from 'react';
import CountUp from 'react-countup';

function CounterWorld({ number }) {
  return (
    <CountUp start={0} end={number} duration={1} separator="," delay={0.5} />
  );
}

export default CounterWorld;
