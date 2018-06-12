import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import Product from '../components/Product'
import Footer from '../components/Footer'

class Presentes extends Component {
  render () {
    return (
      <div className="container">
        <center>
          
          <h1>
            <Link to="/"><img src="/gifs/back.gif" /></Link> Lista de presentes
          </h1>

          <hr />

          {this.props.gifts.map((line, index) =>
            <div className="row" key={index}>
              {line.map(gift =>
                <div className="span4" key={gift.name}>
                  <Product {...gift} />
                </div>
              )}
            </div>
          )}

          <Footer />
        </center>
      </div>
    )
  }
}

export default withRouteData(Presentes)
