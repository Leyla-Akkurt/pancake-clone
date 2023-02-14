import React from 'react';
import Swiper from './Swiper';
import Backdrop from './Backdrop';
import Hero from './Hero';

class Home1 extends React.Component {
  render() {
    return (
      <section id="home-1" className="home-1">
        <div className="home-1-container">
          <div className="home-1-wrapper">
            <Swiper />
            <Backdrop />
            <Hero />
          </div>
        </div>
      </section>
    );
  }
}

export default Home1;
