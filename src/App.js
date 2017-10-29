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
      totalDiscount: 0,
      totalBillAmount: 0,
      totalTypeDiscount: 0
    }
    this.renderCartButton = this.renderCartButton.bind(this)
    this.renderCartView = this.renderCartView.bind(this)
    this.renderListingPage = this.renderListingPage.bind(this)
    this.updateBill = this.updateBill.bind(this)
    this.addItemToCart = this.addItemToCart.bind(this)
    this.removeItemFromCart = this.removeItemFromCart.bind(this)
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
        <span className="number-of-cartItems">
          {'Cart Items : ' + this.state.cartItems.length} 
        </span>
          <button className="navigate-to-cart" onClick={() => { 
              this.updateBill()
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
    }, () => {
      this.updateBill()
    })
  }

  removeItemFromCart(item) {
    let modifiedcartItems = this.state.cartItems
    let itemToBeRemovedIndex = modifiedcartItems.length - 1 - modifiedcartItems.slice().reverse().findIndex( (cartItem) => cartItem.id === item.id );
    modifiedcartItems.pop(itemToBeRemovedIndex)
    this.setState({
      cartItems: [...modifiedcartItems]
    }, () => {
      this.updateBill()
    })
  }

  updateBill() {
    let totalDiscount = 0
    let totalBillAmount = 0
    let totalTypeDiscount = 0
    let itemDiscount
    const getCartItem = this.state.cartItems.map((cartItem) => {
      if(cartItem.type==='fiction') {
        totalTypeDiscount = totalTypeDiscount + (0.15*(cartItem.price))
      }
      return(
          totalBillAmount = totalBillAmount + cartItem.price,
          itemDiscount = (cartItem.discount)*(cartItem.price)/100,
          totalDiscount = totalDiscount + itemDiscount,
          this.setState({
            totalDiscount: totalDiscount,
            totalBillAmount: totalBillAmount,
            totalTypeDiscount: totalTypeDiscount
          })
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
      <CartView
        items={this.state.items}
        cartItems={this.state.cartItems}
        totalDiscount={this.state.totalDiscount}
        totalBillAmount={this.state.totalBillAmount}
        totalTypeDiscount={this.state.totalTypeDiscount}
        minusButtonHandler={this.removeItemFromCart}
        plusButtonHandler={this.addItemToCart}
      />
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
