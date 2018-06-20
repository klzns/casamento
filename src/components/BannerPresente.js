import React, { Component } from 'react'
import { Link } from 'react-static'

class BannerPresente extends Component {
  render () {
    return (
      <div>
        <img src="/gifs/bridegroomwaving.gif" />
        <img src="/gifs/presente.gif" />

        <br />
        <br />
        <Link className="btn" to="/presentes">
          <img src="/gifs/hot.gif" /> Comprar um presente!
        </Link>
      </div>
    )
  }
}

export default BannerPresente
