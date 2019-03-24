import React, { Component } from 'react';
import './App.css';
import RandomJoke from './components/RandomJoke'

class App extends Component {

  constructor() {
    super()
    this.state = {
      randomJoke: ''
    }
    this.randomClick = this.randomClick.bind(this)
  }

  componentDidMount() {
    this.randomAPI()
  }
  
  randomAPI() {
    let api = 'https://icanhazdadjoke.com/'
    fetch(api, 
      { headers: {
        'Accept': 'application/json',
        'User-Agent': ' My Library (https://github.com/tara-fenton/dad-jokes)'
      }       
    }
    ).then(response => response.json())
    .then(json => {
      this.setState({ randomJoke: json.joke})
    }).catch(e => console.log(e))
  }

  randomClick(){
    this.randomAPI()
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