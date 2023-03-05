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
              <img
                src={slide.btnImgSrc}
                className="button-image"
                alt={slide.btnImgAlt}
              />
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
