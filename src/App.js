import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import RandomJoke from './components/RandomJoke'
import Search from './components/Search'
import JokesList from './components/JokesList';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      randomJoke: '',
      jokes: [],
      term: '',
    }
    this.randomClick = this.randomClick.bind(this)
    this.searchClick = this.searchClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.randomAPI()
  }

  randomAPI() {
    let api = 'https://icanhazdadjoke.com/'
    fetch(api,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': ' My Library (https://github.com/tara-fenton/dad-jokes)'
        }
      }
    ).then(response => response.json())
      .then(json => {
        this.setState({ randomJoke: json.joke })
      }).catch(e => console.log(e))
  }

  searchAPI() {
    let api = `https://icanhazdadjoke.com/search?term=${this.state.term}`
    fetch(api,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': ' My Library (https://github.com/tara-fenton/dad-jokes)'
        }
      }
    ).then(response => response.json())
      .then(json => {
        this.setState({ jokes: json.results })
      }).catch(e => console.log(e))
  }

  randomClick() {
    this.randomAPI()
  }

  searchClick() {
    this.searchAPI()
  }

  handleChange(value) {
    this.setState({ term: value })
  }
 
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/random" render={() => <RandomJoke
              randomJoke={this.state.randomJoke}
              handleClick={this.randomClick} />} />
            <Route exact path="/search" render={() => <div><Search
              handleClick={this.searchClick}
              handleChange={this.handleChange} />
              <JokesList
                jokes={this.state.jokes}
              />
            </div>
            } />

            <div className="pipe"></div>
          </main>
          <Footer />
        </div>
        {/* <Route exact path="/" component={} /> */}

      </BrowserRouter>
    );
  }
}

export default App;