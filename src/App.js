import React, { Component } from 'react'
import './App.css'

import Card from './components/card.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1 className="app-title">A la carte</h1>
        </div>
        <div className="container">
          <div className="page-heading">
            <p className="cart-page-heading">
              All Items
            </p>
          </div>
          <div className="cart-page">
            <Card 
              cardText={'Item 1'}
              cardDescription={'$25'}
              cardImg={'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'}
              CTAbuttonText={''} 
              labelText={'Add to cart'}
              buttonHandler={(e) => { console.log('clicked') }}
            /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App
