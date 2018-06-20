import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import Product from '../components/Product'
import Footer from '../components/Footer'

const gifts = [
  [
    {
      name: 'Jantar romântico',
      price: 200,
      image: 'dinner2.jpg',
    },
    {
      name: 'Gin Tanqueray',
      price: 120,
      image: 'gin.jpg',
    },
    {
      name: 'Café da manhã na praia',
      price: 170,
      image: 'cafedamanha.jpeg',
    },
    {
      name: 'Gelato na Fontana di Trevi ',
      price: 55,
      image: 'sorvete.jpg',
    }
  ],
  [
    {
      name: '2 entradas para o Coliseu',
      price: 170,
      image: 'coliseu.jpeg',
    },
    {
      name: 'Pizza de rua',
      price: 40,
      image: 'pizza.jpeg',
    },
  ]
]

class Presentes extends Component {
  render () {
    return (
      <div className="container">
        <center>
          
          <h1>
            <Link to="/"><img src="/gifs/back.gif" /></Link> Lista de presentes
          </h1>

          <hr />

          {gifts.map((line, index) =>
            <div className="row" key={index}>
              {line.map(gift =>
                <div className="span3" key={gift.name}>
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
