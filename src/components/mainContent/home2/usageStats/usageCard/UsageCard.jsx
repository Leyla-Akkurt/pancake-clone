import React from 'react';

class UsageCard extends React.Component {
  render() {
    return (
      <div className="usage-stats-box">
        <div className="usage-stats-box-container">
          <div className="usage-stats-box-wrapper">
            <div className="box-icon-wrapper">
              <img
                src={this.props.img}
                alt={this.props.imgAlt}
                className="box-icon"
              />
            </div>

            <div className="box-text">
              <h2>{this.props.header}</h2>
              <h2>{this.props.headerSpan}</h2>
              <div>{this.props.subHeader}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UsageCard.defaultProps = {
  img: 'icon',
  imgAlt: 'sample alt text',
  header: 'Header',
  headerSpan: 'text',
  subHeader: 'Sub text',
};

export default UsageCard;
