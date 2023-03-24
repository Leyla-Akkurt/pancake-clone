import React from 'react';
import WorldOne from './WorldOne';
import WorldTwo from './WorldTwo';

function WorldGoRound() {
  return (
    <div className="worldOneAndTwoContainer">
      <div className="innerContainer">
        <WorldOne />
        <WorldTwo />
      </div>
    </div>
  );
}

export default WorldGoRound;
