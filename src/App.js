import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import Card from './components/card.js'
import CartView from './components/cartView.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      cartItems: [],
      cartView: false,
      totalDiscount: 0
    }
    this.renderCartButton = this.renderCartButton.bind(this)
    this.addItemToCart = this.addItemToCart.bind(this)
    this.renderCartView = this.renderCartView.bind(this)
    this.renderListingPage = this.renderListingPage.bind(this)
    this.updateTotalDiscount = this.updateTotalDiscount.bind(this)
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
          <button className="navigate-to-cart" onClick={() => { 
              this.updateTotalDiscount()
              this.setState({cartView: true})
            }}>
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

  updateTotalDiscount() {
    let totalDiscount = 0
    let itemDiscount
    const getCartItem = this.state.cartItems.map((cartItem) => {
      return(
          itemDiscount = (cartItem.discount)*(cartItem.price)/100,
          totalDiscount = totalDiscount + itemDiscount,
          this.setState({totalDiscount: totalDiscount})
        )
    })
  }

  renderListingPage() {
    if(this.state.cartView) {
      return false
    }
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
    return(
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
      )
  }

  renderCartView() {
    console.log(this.state.totalDiscount)
    if(!this.state.cartView) {
      return false
    }
    return(
      <CartView cartItems={this.state.cartItems} totalDiscount={this.state.totalDiscount} />
    )
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1 className="app-title">À la carte</h1>
        </div>
        {this.renderCartView()}
        {this.renderListingPage()}
      </div>
    );
  }
}

export default App
