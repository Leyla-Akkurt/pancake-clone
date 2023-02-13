import { EarnPassive } from "./EarnPassive";
import { Table } from "./Table";

export function SecondPart() {
    return(
      <div class="second-part-wrapper">         
      <div class="secondPart">
      <svg
        viewBox="0 0 1660 48"
        preserveAspectRatio="none"
        color="text"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
        class="sc-4ba21b47-0 IIbzK"
      >
        <path
          d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"
        ></path>
      </svg>
      
      <div class="secontPart-container">
      <EarnPassive/>
      <Table/>
      </div>
      </div>
    </div>

    )
}