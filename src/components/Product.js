import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PayPalButton from './PayPalButton'

class Product extends Component {
  render () {
    return (
      <div>
        <img src={`/imgs/products/${this.props.image}`} />
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
