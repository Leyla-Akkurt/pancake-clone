import React from 'react';
import WorldOne from './WorldOne';
import WorldTwo from './WorldTwo';

function WorldGoRound() {
  return (
    <section id="world-go-round" className="world-go-round">
      <div className="world-go-round-container">
        <div className="world-go-round-wrapper">
          <WorldOne />
          <WorldTwo />
        </div>
      </div>
    </section>
  );
}

export default WorldGoRound;
