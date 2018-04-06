import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SpeciesList from './SpeciesList';
import SpeciesData from './SpeciesData';
import SomeForm from './SomeForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      species: []
    };
  }
  
  async getAllSpecies() {
    let species = [];
    let next = "https://swapi.co/api/species/?page=1";
    while (next) {
      await fetch(next)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          species = species.concat(data.results)
          next = data.next
        })
    }
  
    console.log("this is after the loop")
    species = species.map(race => {
      let id = race.url.split("/")[5];
      return {...race, id}
    })
    this.setState({ species })
  }

  componentDidMount() {
    this.getAllSpecies();
  }
  
  render() {
    return (
      <div className="App">
        <Link to='/someForm'>SOME FORM</Link><br />
        <Link to='/'>HOME</Link><br /><br /><br />
        <Route exact path="/" render={(props) => (
          <SpeciesList {...props} allSpecies={this.state.species} />
        )} />
        <Route path="/species/:id" render={(props) => (
          <SpeciesData {...props} allSpecies={this.state.species} />
        )} />
        <Route path="/someForm" render={() => (
          <SomeForm />
        )} />
      </div>
    );
  }
}

export default App;
