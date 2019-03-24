import React, { Component } from 'react';
import './App.css';
import RandomJoke from './components/RandomJoke'

class App extends Component {

  componentDidMount() {
    this.randomAPI()
  }
  
  randomAPI() {
    let api = 'https://icanhazdadjoke.com/?callback=foo'
    fetch(api, 
      { headers: {
        'Accept': 'application/json'
      }       
    }
    ).then(response => response.json())
    .then(json => {
      console.log(json)
    }).catch(e => console.log(e))
  }
  render() {
    return (
      <div className="App">
        <RandomJoke />
      </div>
    );
  }
}

export default App;