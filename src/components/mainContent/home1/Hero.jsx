import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div className="home-1-hero">
        <div className="home-1-hero-content">
          <h2>The moon is made of pancakes.</h2>
          <h3>
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </h3>
          <div className="home-1-hero-content-buttons">
            <button className="connect">Connect Wallet</button>
            <a href="/">
              <button className="trade">Trade Now</button>
            </a>
          </div>
        </div>
        <div className="home-1-hero-graphics">
          <div className="home-1-hero-graphics-bunny">
            <span>
              <img
                srcSet="
                  ./images/home/lunar-bunny/astronaut-bunny.webp    1024w,
                  ./images/home/lunar-bunny/astronaut-bunny@2x.webp 2048w
                "
                alt="a bunny dressed like an astronaut"
              />
            </span>
          </div>
          <div className="home-1-hero-graphics-stars">
            <div className="stars-container">
              <img
                srcSet="
                    ./images/home/lunar-bunny/star-l.webp       512w,
                    ./images/home/lunar-bunny/star-l@1.5x.webp  768w,
                    ./images/home/lunar-bunny/star-l@2x.webp   1024w
                  "
                alt="Lunar Bunny"
                loading="lazy"
                decoding="async"
                className="stars"
              />
              <div className="left-star">
                <img
                  srcSet="
                    ./images/home/lunar-bunny/star-l.webp       512w,
                    ./images/home/lunar-bunny/star-l@1.5x.webp  768w,
                    ./images/home/lunar-bunny/star-l@2x.webp   1024w
                  "
                  alt="3D Star"
                />
              </div>
              <div className="right-star">
                <img
                  srcSet="
                    ./images/home/lunar-bunny/star-r.webp       512w,
                    ./images/home/lunar-bunny/star-r@1.5x.webp  768w,
                    ./images/home/lunar-bunny/star-r@2x.webp   1024w
                  "
                  alt="3D Star"
                />
              </div>
              <div className="top-right-star">
                <img
                  srcSet="
                    ./images/home/lunar-bunny/star-top-r.webp       512w,
                    ./images/home/lunar-bunny/star-top-r@1.5x.webp  768w,
                    ./images/home/lunar-bunny/star-top-r@2x.webp   1024w
                  "
                  alt="3D Star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
