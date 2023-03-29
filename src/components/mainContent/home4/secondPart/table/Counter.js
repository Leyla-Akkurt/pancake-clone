import CountUp from 'react-countup';

export default function Counter({ number }) {
  return (
    <CountUp duration={1} end={number} delay={2} suffix="%" decimals={3} />
  );
}
