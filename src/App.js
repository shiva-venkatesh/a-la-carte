import React, { Component } from 'react'
import './App.css'

import Card from './components/card.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">A la carte</h1>
        </div>
        <div className="container">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <Card 
              cardText={'Item 1'}
              cardDescription={'$25'}
              cardImg={'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'}
              CTAbuttonText={''} 
              labelText={'Add to cart'}
              buttonHandler={(e) => { console.log('clicked') }}
            /> 
          </p>
        </div>
      </div>
    );
  }
}

export default App
