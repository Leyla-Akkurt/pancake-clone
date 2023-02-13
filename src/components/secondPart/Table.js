export function Table(){

 //Table slider
 const tableBodyA = document.querySelector("#body-a");
 const tableBodyB = document.querySelector("#body-b");
 const headText = document.querySelector("#heading-b");
 const tableBtn = document.querySelector("#table-button");
 let tableHeight = document.querySelector(".table-body").offsetHeight;

 function updateTableHeight() {
   tableHeight = document.querySelector(".table-body").offsetHeight;
   return tableHeight;
 }

 let tableInterval;
 let head = document.querySelectorAll(".head");
 let subhead = document.querySelectorAll(".subhead");
 let number = document.querySelectorAll(".number");
 let content = document.querySelector(".table-body");
 tableBtn.addEventListener("click", changeTable);
 // timer
 function timer(className, condition) {
   let counts = setInterval(updated);
   let upto = 0;
   let element = document.querySelector(className).innerHTML;
   let count = document.querySelector(className);
   function updated() {
     count.innerHTML = ++upto + "%";
     if (upto === condition) {
       clearInterval(counts);
       count.innerHTML = element;
     }
   }
 }
 // intersection observer API
 setTimeout(() => {
   tableBodyA.classList.add("fade-in");
 }, 1700);
 const callBackFunction = function (entries) {
   if (entries[0].isIntersecting == true) {
     setTimeout(() => {
       for (let i = 0; i < head.length; i++) {
         head[i].style.visibility = "visible";
         subhead[i].style.visibility = "visible";
         number[i].style.visibility = "visible";
       }

       timer(".number1", 127);
       timer(".number2", 121);
       timer(".number3", 114);
       timer(".number4", 103);
       timer(".number5", 91);
     }, 1700);
   }
 };
 const observer = new IntersectionObserver(callBackFunction);
 observer.observe(content);
 //to add animation for table element
 //declaration of every unit of tables

 let section1 = document.querySelector(".section1");
 let section1_vs = document.querySelector(".section1_vs");

 let section2 = document.querySelector(".section2");
 let section2_vs = document.querySelector(".section2_vs");

 let section3 = document.querySelector(".section3");
 let section3_vs = document.querySelector(".section3_vs");

 let section4 = document.querySelector(".section4");
 let section4_vs = document.querySelector(".section4_vs");

 let section5 = document.querySelector(".section5");
 let section5_vs = document.querySelector(".section5_vs");

 //when clicking button table change
 function changeTable(e) {
   tableHeight = updateTableHeight();
   if (headText.innerHTML === "Farms") {
     tableBodyA.classList.remove("fade-in");
     tableBodyB.classList.remove("fade-out");
     headText.innerHTML = "Syrup Pools";
     tableBodyA.classList.add("fade-out");
     tableBodyA.style.transform = `translate3d(0px, ${tableHeight}px, 0px)`;
     tableBodyB.classList.add("fade-in");
     tableBodyB.style.transform = `translate3d(0px, -${tableHeight}px, 0px)`;
   } else {
     tableBodyB.classList.remove("fade-in");
     tableBodyA.classList.remove("fade-out");
     headText.innerHTML = "Farms";
     tableBodyA.classList.add("fade-in");
     tableBodyA.style.transform = `translate3d(0px, 0px, 0px)`;
     tableBodyB.classList.add("fade-out");
     tableBodyB.style.transform = `translate3d(0px, ${tableHeight}px, 0px)`;
   }
   clearInterval(tableInterval);
   startAutoTable();
 }
 startAutoTable();
 // Start auto change
 function startAutoTable() {
   // Get the active table
   let activeTable = document.querySelector(".tableOn");
   // Get the index of the active table
   let activeIndex = Array.from(document.querySelectorAll(".body")).indexOf(
     activeTable
   );
   tableInterval = setInterval(() => {
     activeIndex = (activeIndex + 1) % 2;
     let newActiveTable = document.querySelectorAll("#body")[activeIndex];
     //  newActiveTable.classList.add("tableOn");
     changeTable({ target: newActiveTable });
   }, 5000);
 }

    return(
      <div class="table">
      <div class="table-header">
        <div class="heading-container">
          <div id="heading" class="table-heading">
            <h2>
              Top
              <span id="heading-b">Farms</span>
            </h2>
          </div>
        </div>
        <button id="table-button" class="arrow-button">
          <svg
            class="arrow"
            viewBox="0 0 24 25"
            height="24px"
            width="24px"
            color="textSubtle"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="table-body">
        <div id="body-a" class="table-content body tableOn">
          <div class="content1 section1">
            <div class="head">WMX-BUSD LP</div>
            <div class="number number1">127.037%</div>
            <div class="subhead">APR</div>
          </div>
          <div class="content2 section2">
            <div class="head">KRS-BUSD LP</div>
            <div class="number number2">121.361%</div>
            <div class="subhead">APR</div>
          </div>
          <div class="content2 section3">
            <div class="head">WGP-BUSD LP</div>
            <div class="number number3">114.196%</div>
            <div class="subhead">APR</div>
          </div>
          <div class="content2 section4">
            <div class="head">ARV-BNP LP</div>
            <div class="number number4">103.357%</div>
            <div class="subhead">APR</div>
          </div>
          <div class="content2 section5">
            <div class="head">CO-BUSD LP</div>
            <div class="number number5">91.452%</div>
            <div class="subhead">APR</div>
          </div>
        </div>
        <div id="body-b" class="table-content body">
          <div class="content1 section1_vs">
            <div class="head">Stake CAKE</div>
            <div class="number">Up to 59.669%</div>
            <div class="subhead">APY</div>
          </div>
          <div class="content2 section2_vs">
            <div class="head">Stake CAKE-Earn CO</div>
            <div class="number">7.276%</div>
            <div class="subhead">APR</div>
          </div>
          <div class="content2 section3_vs">
            <div class="head">Stake CAKE-Earn XCAD</div>
            <div class="number">6.903%</div>
            <div class="subhead">APR</div>
          </div>
          <div class="content2 section4_vs">
            <div class="head">Stake CAKE-Earn KRS</div>
            <div class="number">6.836%</div>
            <div class="subhead">APR</div>
          </div>
          <div class="content2 section5_vs">
            <div class="head">Stake CAKE-Earn MGP</div>
            <div class="number">6.479%</div>
            <div class="subhead">APR</div>
          </div>
        </div>
      </div>
    </div>
    )
}