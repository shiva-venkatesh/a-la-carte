import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CartView extends Component {

	static propTypes = {
		cartItems: PropTypes.array
	}

	render() {
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
          </div>
          <div className="col-4x">
            <div className="sticky-box">
              <div className="sticky-body">
                <div className="total-row">
                  <p className="left">Total</p>
                  <p className="right">500</p>
                </div>
                <div className="item-count-row">
                  <p className="left">{'Items(' + this.props.cartItems.length + ')'}</p>
                  <p className="right">600</p>
                </div>
                <div className="discount-row">
                  <p className="left">Discount</p>
                  <p className="right">100</p>
                </div>
                <div className="checkout-footer">
                  <div className="order-total">
                    <p className="left">Order</p>
                    <p className="right">1000</p>
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