import { Button } from './Button';
import { Content } from './Content';
import contentData from './contentData';
import contentData2 from './contentData2';
import { useButton } from './useButton';

export function Table() {
  const { handleClick, bodyaRef, bodybRef, headTextRef } = useButton();

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
      <div className="table-body">
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
