import { React, useRef, useEffect } from 'react';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import swiperSlides from './assets/swiperSlides.json';
import SwiperSlide from './swiperSlide/SwiperSlide';
// register Swiper custom elements
register();

const Swiper = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.initialize();
  }, []);

  return (
    <div className="home-1-scroller">
      <div className="home-1-scroller-container">
        {/* scroller-wrapper */}
        <swiper-container
          ref={swiperElRef}
          init="false"
          effect="fade"
          fade-effect-cross-fade="true"
          watch-slides-progress="true"
          loop="true"
          pagination="true"
          pagination-clickable="true"
          pagination-el="#myswiper-pagination"
          pagination-type="bullets"
          autoplay="true"
          autoplay-delay="3000"
        >
          {swiperSlides &&
            swiperSlides.map((slide) => {
              return (
                <swiper-slide key={slide.id}>
                  <SwiperSlide slide={slide} />
                </swiper-slide>
              );
            })}
        </swiper-container>
        <div id="myswiper-pagination"></div>
      </div>
    </div>
  );
};

export default Swiper;
