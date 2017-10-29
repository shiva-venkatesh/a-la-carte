import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import './css/cartView.css'

export default class CartView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finalPrice: this.props.totalBillAmount - this.props.totalDiscount - this.props.totalTypeDiscount
    }
  }

	static propTypes = {
    cartItems: PropTypes.array,
    minusButtonHandler: PropTypes.func,
    plusButtonHandler: PropTypes.func,
		items: PropTypes.array,
    totalDiscount: PropTypes.number,
    totalBillAmount: PropTypes.number,
		totalTypeDiscount: PropTypes.number
	}

	render() {
    let distinctCartItems = []
    distinctCartItems = _.uniq(this.props.cartItems)
     /* This step finds the all the distinct cart items as multiple 
     instances of an item are stored as multiple objects in this.props.cartItems */
 
    const fetchCartItems = distinctCartItems.map((item) => {
      let cartItemQty = this.props.cartItems.reduce(function (n, cartItem2) {
          return n + (cartItem2.id === item.id);
      }, 0);
      return(
          <div className="cart-item fadeIn">
              <div className="left-container">
                <div className="item-details">
                  <img className="cart-item-img" src={item.img_url} alt={item.name} />
                  <p>{item.name}</p>
                </div>
                <div className="qty-indicators right">
                  <button className="minus-button update-buttons" onClick={this.props.minusButtonHandler}>
                    <i className="fa fa-minus update-icons" aria-hidden="true"></i>
                  </button>
                  <div className="qty-holder">
                    <p className="cart-qty">{cartItemQty}</p>
                  </div>
                  <button className="plus-button update-buttons" onClick={() => this.props.plusButtonHandler(item)}>
                    <i className="fa fa-plus update-icons" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="right-container right">
                <p className="right">{item.price}</p>
              </div>
          </div>
        )
    })

		return(
      <div className="container checkout-container">
        <div className="page-heading">
          <p className="cart-page-heading">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            {' Order Summary'}
          </p>
        </div>
        <div className="summary-body">
          <div className="col-8x">
            <div className="summary-headings">
              <div className="left-container">
                <p>{'Items(' + this.props.cartItems.length + ')'}</p>
                <p className="qty-header">{'Qty'}</p>
              </div>
              <div className="right-container right">
                <p className="right">{'Price'}</p>
              </div>
            </div>
            {fetchCartItems}
          </div>
          <div className="col-4x">
            <div className="sticky-box">
              <div className="sticky-body">
                <div className="total-row">
                  <p className="left">Total</p>
                </div>
                <div className="item-count-row">
                  <p className="left">{'Items(' + this.props.cartItems.length + ')'}</p>
                  <p className="right">{'$' + this.props.totalBillAmount}</p>
                </div>
                <div className="discount-row">
                  <p className="left">Discount</p>
                  <p className="right">{'- $' + this.props.totalDiscount}</p>
                </div>
                <div className="type-discount-row">
                  <p className="left">Type discount</p>
                  <p className="right">{'- $' + this.props.totalTypeDiscount}</p>
                </div>
                <div className="checkout-footer">
                  <div className="order-total">
                    <p className="left">Order total</p>
                    <p className="right">{'$' + this.state.finalPrice}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>				
		)
	}
}