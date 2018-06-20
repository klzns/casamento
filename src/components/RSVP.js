import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RSVP extends Component {
  render () {
    return (
      <form className="form" style={{ padding: '0 20px', textAlign: 'center' }}>
        <h2>RSVP</h2>

        <label>
          Nome e sobrenome <br />
          <input type="text" name="name" />
        </label>

        <label>
          Mensagem para os noivos <br />
          <textarea name="message" />
        </label>

        <div style={{ textAlign: 'left' }}>
          <label className="radio">
            <input type="radio" name="vai" value="sim" defaultChecked="true" />
            Vou
          </label>
          <label className="radio">
            <input type="radio" name="vai" value="nao" />
            Não vou
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
        <div>
          <br />
          <img src="/gifs/mchammer.gif" />
          <img src="/gifs/mchammer.gif" />
          <img src="/gifs/mchammer.gif" />
        </div>
      </form>
    )
  }
}

RSVP.propTypes = {}

export default RSVP
