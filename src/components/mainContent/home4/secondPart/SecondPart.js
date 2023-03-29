import { EarnPassive } from './earnPassive/EarnPassive';
import { Table } from './table/Table';

export function SecondPart() {
  return (
    <div className="second-part-wrapper">
      <div className="secondPart">
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-4ba21b47-0 IIbzK"
        >
          <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
        </svg>

        <div className="secontPart-container">
          <EarnPassive />
          <Table />
        </div>
      </div>
    </div>
  );
}
