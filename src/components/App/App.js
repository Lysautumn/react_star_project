import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starList: [
        {name:'hadar', diameter: 50},
        {name:'gacrux', diameter: 2000},
        {name:'kochab', diameter: 555}
      ],
      newStar: {
        name: '',
        diameter: '',
      }
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDiameterChange = this.handleDiameterChange.bind(this);
  }

  handleNameChange(event) {
    console.log(event.target.value);
    
  }

  handleDiameterChange(event) {
    console.log(event.target.value);
    
  }
  render() {
    // let starListItemArray = [];
    // for(let i = 0; i < this.state.starList.length; i++) {
    //   const starListItem = <li>{this.state.starList[i]}</li>
    //   starListItemArray.push(starListItem);
    // }

    // const starListItemArray = this.state.starList.map(star => <li>{star}</li>);
    return (
      <div>
        <div>
            <input onChange={this.handleNameChange} value={this.state.newStar.name}/>
            <input onChange={this.handleDiameterChange} value={this.state.newStar.diameter}/>
        </div>
        {this.state.newStar.name} and {this.state.newStar.diameter}
        <ul>
          {this.state.starList.map(star => <li key={star.name}>The star {star.name} has a diameter of {star.diameter}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
