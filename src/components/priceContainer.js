import React from 'react'

import './css/priceContainer.css'

const PriceContainer = ({cartItems, totalBillAmount, totalDiscount, totalTypeDiscount, finalPrice}) => {
	return(
    <div className="sticky-box">
      <div className="sticky-body">
        <div className="total-row">
          <p className="left">Total</p>
        </div>
        <div className="item-count-row">
          <p className="left">{'Items(' + cartItems.length + ')'}</p>
          <p className="right">{'$' + totalBillAmount}</p>
        </div>
        <div className="discount-row">
          <p className="left">Discount</p>
          <p className="right">{'- $' + totalDiscount}</p>
        </div>
        <div className="type-discount-row">
          <p className="left">Type discount</p>
          <p className="right">{'- $' + totalTypeDiscount}</p>
        </div>
        <div className="checkout-footer">
          <div className="order-total">
            <p className="left">Order total</p>
            <p className="right">{'$' + finalPrice}</p>
          </div>
        </div>
      </div>
    </div>
	)
}

export default PriceContainer