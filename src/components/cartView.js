import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
		items: PropTypes.array,
    totalDiscount: PropTypes.number,
    totalBillAmount: PropTypes.number,
		totalTypeDiscount: PropTypes.number
	}

	render() {
    const fetchCartItems = this.props.items.map((item) => {
      let cartItemQty = this.props.cartItems.reduce(function (n, cartItem2) {
          return n + (cartItem2.id === item.id);
      }, 0);
      console.log(item.name + ' ' + cartItemQty)
      return(
          <div className="cart-item fadeIn">
              <div className="left-container">
                <img className="cart-item-img" src={item.img_url} alt={item.name} />
                <p>{item.name}</p>
                <p className="right">{cartItemQty}</p>
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
                <p className="right">{'Qty'}</p>
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
                  <p className="right">{'$' + this.props.totalDiscount}</p>
                </div>
                <div className="type-discount-row">
                  <p className="left">Type discount</p>
                  <p className="right">{'$' + this.props.totalTypeDiscount}</p>
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