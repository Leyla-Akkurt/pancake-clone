import React from 'react';
import UsageCard from './usageCard/UsageCard';
import stats from './stats';

class UsageStats extends React.Component {
  render() {
    return (
      <div className="usage-stats">
        {stats &&
          stats.map((stat) => {
            return (
              <UsageCard
                key={stat.id}
                img={stat.img}
                imgAlt={stat.imgAlt}
                header={stat.header}
                headerSpan={stat.headerSpan}
                subHeader={stat.subHeader}
              />
            );
          })}
      </div>
    );
  }
}

export default UsageStats;
