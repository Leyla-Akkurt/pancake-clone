import Counter from './Counter';

export function Content({ contentName, head, number, subhead, classNumber }) {
  const counter = <Counter number={number} />;
  return (
    <div className={contentName}>
      <div className="head">{head}</div>
      <div className={`number ${classNumber}`}>{counter}</div>
      <div className="subhead">{subhead}</div>
    </div>
  );
}
