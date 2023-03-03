import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Content2 } from './Content2';
import { Button } from './Button';
import { Content } from './Content';
import contentData from './contentData';
import contentData2 from './contentData2';

export function Table() {
  const [tableContent, setTableContent] = useState('');
  const [tableContent2, setTableContent2] = useState('');
  const tableBodyRef = useRef();
  const { ref: tableRef, inView } = useInView();
  const [animation, setAnimation] = useState(false);
  const [headText, setHeadText] = useState('');
  const headTextRef = useRef(null);
  const [startCount, setStartCount] = useState(true);

  useEffect(() => {
    if (inView === true) {
      const viewInterval = setInterval(() => {
        tableBodyRef.current.style.opacity = 0.1;
      }, 3000);
      clearInterval(viewInterval);
    }

    tableBodyRef.current.style.opacity = 1;
    setStartCount(false);
    console.log(startCount);
    const interval = setInterval(() => {
      setAnimation(!animation);
      setHeadText(
        animation
          ? (headTextRef.current.innerText = ' Farms')
          : (headTextRef.current.innerText = ' Syrup Pools')
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [animation, inView]);

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
            console.log('tiklama');
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
          style={{ top: !animation ? 0 : 200, opacity: !animation ? 1 : 0 }}
        >
          {contentData.map((content, i) => (
            <Content key={i} {...content} />
          ))}
        </div>

        <div
          id="body-b"
          className="table-content body"
          style={{ top: animation ? 0 : 200, opacity: animation ? 1 : 0 }}
        >
          {contentData2.map((content, i) => (
            <Content2 key={i} {...content} />
          ))}
        </div>
      </div>
    </div>
  );
}
