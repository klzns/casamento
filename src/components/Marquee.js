import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Marquee extends Component {
  render () {
    return (
      <marquee>
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
            fontWeight: 'normal',
            color: '#fff',
            fontSize: '17px',
          }}
        >
          Prepare-se para o melhor casamento do ano!!! Muia bebida e diversão!!
          {' '}
        </p>
      </marquee>
    )
  }
}

Marquee.propTypes = {}

export default Marquee
