export function Content({ contentName, head, number, subhead, classNumber }) {
  return (
    <div className={contentName}>
      <div className="head">{head}</div>
      <div className={`number ${classNumber}`}>{number}</div>
      <div className="subhead">{subhead}</div>
    </div>
  );
}
