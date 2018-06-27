import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class RSVP extends Component {
  constructor(props) {
    super(props)
    this.state = { success: null, error: null }
  }

  handleSubmit = e => {
    e.preventDefault()

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx9CHi9wtra91pugYuwoH7dp_47pxrCBvH8fBVlSFzca51F0FRZ/exec'
  
    const form = document.forms.rsvp
    const formData = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => this.setState({ success: true }))
      .catch(() => this.setState({ error: true }))
  }

  render () {
    return (
      <form className="form" id="rsvp" style={{ padding: '0 20px', textAlign: 'center' }} onSubmit={this.handleSubmit}>
        <h2>RSVP</h2>

        <label>
          Nome e sobrenome <br />
          <input type="text" name="nome" />
        </label>

        <label>
          Mensagem para os noivos <br />
          <textarea name="mensagem" />
        </label>

        <div style={{ textAlign: 'left' }}>
          <label className="radio">
            <input type="radio" name="vai" value="true" defaultChecked />
            Vou
          </label>
          <label className="radio">
            <input type="radio" name="vai" value="false" />
            Não vou
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>

        {this.state.success &&
          <div className="alert alert-success">
            Enviado!
          </div>
        }

        {this.state.error &&
          <div className="alert alert-danger">
            Opa! Ocorreu um erro! Avisa pro Breno!
          </div>
        }

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
