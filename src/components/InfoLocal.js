import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InfoLocal extends Component {
  render () {
    return (
      <p>
        <strong style={{ color: 'blue' }}>Local:</strong> <br />
        <a href="https://goo.gl/maps/SMMfdnm5DG92">Espaço Arcádia</a> <br />
        Estr. Paiva Muniz, 750 - Guaratiba <br />
        Rio de Janeiro - RJ, 23020-010 <br />
        <strong style={{ color: 'blue' }}>Dia e hora:</strong> <br />
        08/09/2018 às 16h <br />
        <strong style={{ color: 'blue' }}>Traje:</strong> <br />
        Vai bem bonitinho <br />
        <strong style={{ color: 'blue' }}>Importante!</strong> <br />
        Levar o convite para apresentar na entrada!
      </p>
    )
  }
}

InfoLocal.propTypes = {}

export default InfoLocal
