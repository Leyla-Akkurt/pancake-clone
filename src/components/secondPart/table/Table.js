import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Content2 } from './Content2';
import { Button } from './Button';
import { Content } from './Content';
import contentData from './contentData';
import contentData2 from './contentData2';
import { useButton } from './useButton';

export function Table() {
  const { handleClick, bodyaRef, bodybRef, headTextRef, setHeadText } =
    useButton();
  const [tableContent, setTableContent] = useState('');
  const [tableContent2, setTableContent2] = useState('');
  const tableBodyRef = useRef();
  const { ref: tableRef, inView } = useInView();

  useEffect(() => {
    if (inView === true) {
      setTimeout(() => {
        tableBodyRef.current.style.opacity = 1;
      }, 3000);
      tableBodyRef.current.style.opacity = 0.1;
      setTableContent(
        contentData.map((content) => {
          return <Content {...content} />;
        })
      );
      setTableContent2(
        contentData2.map((content) => {
          return <Content2 {...content} />;
        })
      );
    }
  }, [inView]);

  return (
    <div className="table" ref={tableRef}>
      <div className="table-header">
        <div className="heading-container">
          <div id="heading" className="table-heading">
            <h2>
              Top
              <span id="heading-b" ref={headTextRef}>
                Farms
              </span>
            </h2>
          </div>
        </div>

        <button
          onClick={handleClick}
          id="table-button"
          className="arrow-button"
        >
          <Button />
        </button>
      </div>
      <div className="table-body" ref={tableBodyRef}>
        <div id="body-a" ref={bodyaRef} className="table-content body tableOn">
          {tableContent}
        </div>

        <div id="body-b" ref={bodybRef} className="table-content body">
          {tableContent2}
        </div>
      </div>
    </div>
  );
}
