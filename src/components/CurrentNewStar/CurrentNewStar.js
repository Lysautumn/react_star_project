import React, { Component } from 'react';


class CurrentNewStar extends Component {
  render() {
    return (
        <div>
          Our new star is: { this.props.newStar.name } with a diameter of { this.props.newStar.diameter }
        </div>
    );
  }
}

export default CurrentNewStar;
