import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import Product from '../components/Product'
import Footer from '../components/Footer'

const gifts = [
  [
    {
      name: 'Jantar romântico típico',
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
      price: 90,
      image: 'cafedamanha.jpeg',
    },
    {
      name: '2 entradas para o Coliseu',
      price: 170,
      image: 'coliseu.jpeg',
    },
  ],
  [
    {
      name: '1 passagem de barca para Sardenha',
      price: 560,
      image: 'ferry.jpeg',
    },
    {
      name: 'Pizza de rua bem italiana',
      price: 48,
      image: 'pizza.jpeg',
    },
    {
      name: '2 passagens de trem',
      price: 220,
      image: 'train.jpeg',
    },
    {
      name: '1 passagem de avião',
      price: 3100,
      image: 'aviao.jpg',
    },
  ],
  [
    {
      name: 'Mergulho em Sardenha',
      price: 410,
      image: 'scuba.jpg',
    },
  ],
]

class Presentes extends Component {
  render() {
    return (
      <div className="container">
        <center>

          <h1>
            <Link to="/"><img src="/gifs/back.gif" /></Link> Lista de presentes
          </h1>

          <hr />

          <div className="row">
            <p className="span6">Nós vamos passar nossa lua de mel na Itália! Você pode ajudar a gente com algumas coisas que com certeza vão tornar essa viagem muito especial.</p>
            <p className="span6">Caso o PayPal dê problema, você pode depositar na conta: <br />
              Itau Unibanco S.A. <br />
              Agência 3830<br />
              Conta 02958-7<br />
              CPF 012.395.261-13<br />
            </p>
          </div>

          <div className="row">

          </div>

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
