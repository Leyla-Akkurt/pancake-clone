import { Button } from './Button';
import { Content } from './Content';
import contentData from './contentData';
import contentData2 from './contentData2';

export function Table() {
  //Table slider
  const tableBodyA = document.querySelector('#body-a');
  const tableBodyB = document.querySelector('#body-b');
  const headText = document.querySelector('#heading-b');
  const tableBtn = document.querySelector('#table-button');
  let tableHeight = document.querySelector('.table-body').offsetHeight;

  function updateTableHeight() {
    tableHeight = document.querySelector('.table-body').offsetHeight;
    return tableHeight;
  }

  let tableInterval;
  let head = document.querySelectorAll('.head');
  let subhead = document.querySelectorAll('.subhead');
  let number = document.querySelectorAll('.number');
  let content = document.querySelector('.table-body');
  tableBtn.addEventListener('click', changeTable);
  // timer
  function timer(className, condition) {
    let counts = setInterval(updated);
    let upto = 0;
    let element = document.querySelector(className).innerHTML;
    let count = document.querySelector(className);
    function updated() {
      count.innerHTML = ++upto + '%';
      if (upto === condition) {
        clearInterval(counts);
        count.innerHTML = element;
      }
    }
  }
  // intersection observer API
  setTimeout(() => {
    tableBodyA.classList.add('fade-in');
  }, 1700);
  const callBackFunction = function (entries) {
    if (entries[0].isIntersecting === true) {
      setTimeout(() => {
        for (let i = 0; i < head.length; i++) {
          head[i].style.visibility = 'visible';
          subhead[i].style.visibility = 'visible';
          number[i].style.visibility = 'visible';
        }

        timer('.number1', 127);
        timer('.number2', 121);
        timer('.number3', 114);
        timer('.number4', 103);
        timer('.number5', 91);
      }, 1700);
    }
  };
  const observer = new IntersectionObserver(callBackFunction);
  observer.observe(content);
  //to add animation for table element
  //declaration of every unit of tables

  //when clicking button table change
  function changeTable(e) {
    tableHeight = updateTableHeight();
    if (headText.innerHTML === 'Farms') {
      tableBodyA.classList.remove('fade-in');
      tableBodyB.classList.remove('fade-out');
      headText.innerHTML = 'Syrup Pools';
      tableBodyA.classList.add('fade-out');
      tableBodyA.style.transform = `translate3d(0px, ${tableHeight}px, 0px)`;
      tableBodyB.classList.add('fade-in');
      tableBodyB.style.transform = `translate3d(0px, -${tableHeight}px, 0px)`;
    } else {
      tableBodyB.classList.remove('fade-in');
      tableBodyA.classList.remove('fade-out');
      headText.innerHTML = 'Farms';
      tableBodyA.classList.add('fade-in');
      tableBodyA.style.transform = `translate3d(0px, 0px, 0px)`;
      tableBodyB.classList.add('fade-out');
      tableBodyB.style.transform = `translate3d(0px, ${tableHeight}px, 0px)`;
    }
    clearInterval(tableInterval);
    startAutoTable();
  }
  startAutoTable();
  // Start auto change
  function startAutoTable() {
    // Get the active table
    let activeTable = document.querySelector('.tableOn');
    // Get the index of the active table
    let activeIndex = Array.from(document.querySelectorAll('.body')).indexOf(
      activeTable
    );
    tableInterval = setInterval(() => {
      activeIndex = (activeIndex + 1) % 2;
      let newActiveTable = document.querySelectorAll('#body')[activeIndex];
      //  newActiveTable.classList.add("tableOn");
      changeTable({ target: newActiveTable });
    }, 5000);
  }

  //Table Content
  const tableContent = contentData.map((content) => {
    return <Content {...content} />;
  });

  const tableContent2 = contentData2.map((content) => {
    return <Content {...content} />;
  });

  return (
    <div className="table">
      <div className="table-header">
        <div className="heading-container">
          <div id="heading" className="table-heading">
            <h2>
              Top
              <span id="heading-b">Farms</span>
            </h2>
          </div>
        </div>

        <button id="table-button" className="arrow-button">
          <Button />
        </button>
      </div>
      <div className="table-body">
        <div id="body-a" className="table-content body tableOn">
          {tableContent}
        </div>

        <div id="body-b" className="table-content body">
          {tableContent2}
        </div>
      </div>
    </div>
  );
}
