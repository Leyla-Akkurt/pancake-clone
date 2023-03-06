import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Content2 } from './Content2';
import { Button } from './Button';
import { Content } from './Content';
import contentData from './contentData';
import contentData2 from './contentData2';

export function Table() {
  const tableBodyRef = useRef();
  const { ref: tableRef, inView } = useInView();
  const [animation, setAnimation] = useState(false);
  const [, setHeadText] = useState('');
  const headTextRef = useRef(null);
  const [tableContent, setTableContent] = useState([]);
  const [tableContent2, setTableContent2] = useState([]);
  const [tableOpacity, setTableOpacity] = useState('0.1');

  console.log(inView);
  useEffect(() => {
    if (inView === true) {
      setTimeout(() => {
        setTableOpacity('1');
      }, 1500);

      tableBodyRef.current.style.opacity = tableOpacity;
      setTableContent(
        contentData.map((content, i) => <Content key={i} {...content} />)
      );
      setTableContent2(
        contentData2.map((content, i) => <Content2 key={i} {...content} />)
      );
    }
    const interval = setInterval(() => {
      setAnimation(!animation);
      setHeadText(
        animation
          ? (headTextRef.current.innerText = ' Farms')
          : (headTextRef.current.innerText = ' Syrup Pools')
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [animation, inView, setHeadText, tableOpacity]);

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
          onClick={() => {
            setAnimation((x) => !x);
            setHeadText(
              animation
                ? (headTextRef.current.innerText = ' Farms')
                : (headTextRef.current.innerText = ' Syrup Pools')
            );
          }}
          id="table-button"
          className="arrow-button"
        >
          <Button />
        </button>
      </div>
      <div className="table-body" ref={tableBodyRef}>
        <div
          id="body-a"
          className="table-content body tableOn"
          style={{
            marginTop: !animation ? 0 : '50%',
            opacity: !animation ? 1 : 0,
          }}
        >
          {tableContent}
        </div>

        <div
          id="body-b"
          className="table-content body"
          style={{
            marginTop: animation ? 0 : '50%',
            opacity: animation ? 1 : 0,
          }}
        >
          {tableContent2}
        </div>
      </div>
    </div>
  );
}
