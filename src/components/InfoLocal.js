import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

const Info = ({ children }) =>
  <Fragment>
    <strong style={{ color: 'blue' }}>{children}</strong>
    <br />
  </Fragment>

class InfoLocal extends Component {
  render() {
    return (
      <p>
        <Info>Local:</Info>
        <a href="https://goo.gl/maps/SMMfdnm5DG92">Espaço Arcádia</a> <br />
        Estr. Paiva Muniz, 750 - Guaratiba <br />
        Rio de Janeiro - RJ, 23020-010 <br />
        <Info>Dia e hora:</Info>
        08/09/2018 às 16h <br />
        (demora 1h15 pra chegar da Zona Sul até lá)<br />
        <Info>Traje:</Info>
        Vai bem bonitinho <br />
        <Info>Transporte:</Info>
        As vans contratadas estão lotadas. <br />
        Uma boa opção é ir de Uber e agendar a volta no Uber pras 22h40, horário do fim da festa. <br />
        <Info>Importante!</Info>
        Levar o convite para apresentar na entrada!<br />
      </p>
    )
  }
}

InfoLocal.propTypes = {}

export default InfoLocal
