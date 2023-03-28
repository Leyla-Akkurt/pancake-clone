import useCountDownToDate from '../../../hooks/useCountDownToDate';

const SwiperSlide = ({ slide }) => {
  const { hours, mins, secs } = useCountDownToDate();
  return (
    <div id={slide.id} className="slide-container">
      <div className="slide-wrapper">
        {/* TEXT CONTAINER AT SLIDE'S LEFT SIDE */}
        <div className="scroller-slide-text">
          {slide.hasHeaderImg ? (
            <img
              src={slide.headerImg}
              className="text"
              alt={slide.headerImgAlt}
            />
          ) : (
            <h2 className="text">{slide.text}</h2>
          )}
          {/* IF SUBTEXT = COUNTDOWN RENDER THE FAKE COUNTDOWN ELSE JUST THE SUBTEXT STRING */}
          {slide.subtext === 'countdown' ? (
            <div className="timer-clock">
              <h2 id="clock-timer" className="subtext">
                <span className="clock-timer-hours">{hours}</span>
                <span className="clock-timer-subtext">h</span>

                <span className="clock-timer-mins">{mins}</span>
                <span className="clock-timer-subtext">m</span>

                <span className="clock-timer-secs">{secs}</span>
                <span className="clock-timer-subtext">s</span>
              </h2>
            </div>
          ) : (
            <h2 className="subtext">{slide.subtext}</h2>
          )}
          <a href="/">
            <button>
              <div className="button-text">{slide.btnText}</div>
              {slide.btnSvg === 'arrow-right' ? (
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button-image"
                  height="24"
                >
                  <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button-image"
                  height="24"
                >
                  <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                </svg>
              )}
            </button>
          </a>
        </div>

        {/* IMAGE CONTAINER AT SLIDE'S RIGHT SIDE */}
        <div className="scroller-slide-image-container">
          <span className="image-wrapper">
            {slide.hasPlaceholder && (
              <span className="dump-image">
                <img src="./images/svg/dumpImg.svg" alt="dump placeholder" />
              </span>
            )}
            <picture>
              {slide.hasSrcSetImgs &&
                slide.srcSetImgs.map((img, index) => {
                  return (
                    <source
                      key={`img-${index}`}
                      srcSet={img.srcSet}
                      media={img.media}
                    />
                  );
                })}
              <img
                src={slide.mainImgSrc}
                alt={slide.mainImgAlt}
                className={
                  slide.hasSrcSetImgs
                    ? 'scroller-slide-image'
                    : 'scroller-slide-image-auto'
                }
              />
            </picture>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlide;
