import React from 'react';
import CallToAction from './usageStats/CallToAction';
import UsageStats from './usageStats/UsageStats';

class Home2 extends React.Component {
  render() {
    return (
      <section id="home-2" className="home-2">
        <div className="home-2-container">
          <div className="home-2-wrapper">
            <div className="home-2-content">
              <CallToAction />
              <UsageStats />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home2;
