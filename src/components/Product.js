import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PayPalButton from './PayPalButton'

class Product extends Component {
  render () {
    return (
      <div className="gift">
        <div className="img-container">
          <img src={`/imgs/products/${this.props.image}`} />
        </div>
        <h4>{this.props.name}</h4>
        <p><strong>R$ {this.props.price}</strong></p>

        <PayPalButton {...this.props} />
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Product
