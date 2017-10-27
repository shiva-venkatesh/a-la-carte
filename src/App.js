import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import Card from './components/card.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      cartItems: []
    }
    this.renderCartButton = this.renderCartButton.bind(this)
    this.addItemToCart = this.addItemToCart.bind(this)
  }

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/qhnfp')
      .then((response) => {
        this.setState({items: response.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  renderCartButton() {
    if(!this.state.cartItems.length) {
      return false
    }
    return(
        <div className="go-to-cart right">
          <button className="navigate-to-cart" onClick={() => { console.log('You want to go to cart ?') }}>
            Go to cart
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>
      )
  }

  addItemToCart(item) { 
    console.log(item.name + ' clicked')
    console.log(this.state.cartItems)
    this.setState({
      cartItems: [...this.state.cartItems, item]
    })
  }

  render() {
    const renderItem = this.state.items.map((item) => {
      return(
            <Card 
              cardText={item.name}
              cardDescription={'$' + item.price}
              cardImg={item.img_url}
              labelText={'Add to cart'}
              buttonHandler={() => {this.addItemToCart(item)}}
              key={item.id}
            /> 
        )
    })

    return (
      <div className="app">
        <div className="app-header">
          <h1 className="app-title">À la carte cart items: {this.state.cartItems.length}</h1>
        </div>
        <div className="container">
          <div className="page-heading">
            <p className="cart-page-heading">
              All Items
            </p>
            {this.renderCartButton()}
          </div>
          <div className="cart-page">
            {renderItem}
          </div>
        </div>
      </div>
    );
  }
}

export default App
