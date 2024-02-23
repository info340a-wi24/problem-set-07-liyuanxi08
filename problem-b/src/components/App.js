import React, { Component } from 'react';
import { AboutNav, BreedNav } from './Navigation'; 
import PetList from './PetList'; 
import dogsData from '../data/dogs.json'; 
import _ from 'lodash';
import '../style.css'; 

class App extends Component {
  state = {
    pets: dogsData,
  };

  handleAdopt = (petName) => {
    this.setState((prevState) => ({
      pets: prevState.pets.map((pet) =>
        pet.name === petName ? { ...pet, adopted: true } : pet
      ),
    }));
  };

  render() {
    const allBreeds = Object.keys(_.groupBy(this.state.pets, 'breed'));
    const firstTwoBreeds = allBreeds.slice(0, 2); 
    const breeds = firstTwoBreeds.map((breed, index) => `Breed ${index === 0 ? 'A' : 'B'}`);
    console.log(breeds);
    
    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>
        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <AboutNav />
              <BreedNav breeds={breeds} />
            </div>
            <div id="petList" className="col-9">
            <PetList pets={this.state.pets} handleAdopt={this.handleAdopt} />
            </div>
          </div>
        </main>
        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </div>
    );
  }
}

export default App;
