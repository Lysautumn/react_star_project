import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import StarForm from '../StarForm/StarForm';

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
      },
      planets: [

      ]
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

  componentDidMount() {
    console.log('component did mount');
    this.getPlanets();
  }

  getPlanets() {
    axios.get('https://swapi.co/api/planets/?format=json')
        .then(response => {
          console.log(response);
          this.addPlanets(response.data.results);
        })
        .catch(error => {
          console.log(error);
        })
  }

  addPlanets(planets) {
    this.setState({
      planets: planets
    })
  }

  render() {
    return (
      <div>
        <Header />
        <CurrentNewStar newStar={ this.state.newStar }/>
        <StarForm 
         newStar={ this.state.newStar}
         handleChangeFor={ this.handleChangeFor }
         handleSubmit={ this.handleSubmit }/>
        <StarList starList={ this.state.starList }/>
        <div>
          Planets:
          <ul>
            { this.state.planets.map(planet => <li key={ planet.name }>The planet { planet.name } has a diameter of { planet.diameter }</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
