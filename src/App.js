import React, { Component } from 'react';
import './App.css';
import RandomJoke from './components/RandomJoke'

class App extends Component {

  constructor() {
    super()
    this.state = {
      randomJoke: ''
    }
  }

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
      this.setState({ randomJoke: json.joke})
    }).catch(e => console.log(e))
  }

  randomClick(){
    console.log('click')
  }

  render() {
    return (
      <div className="App">
        <RandomJoke 
            randomJoke={this.state.randomJoke}
            handleClick={this.randomClick} />
      </div>
    );
  }
}

export default App;