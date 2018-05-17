import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starList: [
        { name:'hadar', diameter: 50 },
        { name:'gacrux', diameter: 2000 },
        { name:'kochab', diameter: 555 }
      ],
      newStar: {
        name: '',
        diameter: '',
      }
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.newStar);
    this.setState({
      starList: [ ...this.state.starList, this.state.newStar ],
      newStar: {
        name: '',
        diameter: '',
      }
    })
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    })
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
          Our new star is: { this.state.newStar.name } with a diameter of { this.state.newStar.diameter }
        </div>
        <div>
          <form onSubmit={ this.handleSubmit }>
            <input onChange={ this.handleChangeFor('name') } value={ this.state.newStar.name }/>
            <input onChange={ this.handleChangeFor('diameter') } value={ this.state.newStar.diameter }/>
            <input type='submit' value='Submit Star'/>
          </form>
        </div>
        <ul>
          { this.state.starList.map(star => <li key={ star.name }>The star { star.name } has a diameter of { star.diameter }</li>) }
        </ul>
      </div>
    );
  }
}

export default App;
