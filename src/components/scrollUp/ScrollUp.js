import React, { useEffect, useState } from 'react';

function ScrollUp() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    //Button is displayed after scrolling for 300 pixels
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener('scroll', handleScrollButtonVisibility);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);
  const handleScrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <div
          className="scroll-to-top btn-color"
          id="scrollUp"
          onClick={handleScrolltoTop}
        >
          <svg
            viewBox="0 0 24 24"
            color="invertedContrast"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="scroll-up-svg"
            style={{ marginLeft: '0px' }}
          >
            <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path>
          </svg>
        </div>
      )}
    </>
  );
}

export default ScrollUp;
