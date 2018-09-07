import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderHome from '../components/HeaderHome'
import Marquee from '../components/Marquee'
import InfoLocal from '../components/InfoLocal'
import BannerPresente from '../components/BannerPresente'

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderHome />

        <img src="/gifs/korea.gif" />
        <img src="/gifs/cat.gif" />
        <br /> <br />

        <div className="row-fluid">
          <div className="span2">
          </div>

          <div className="span4">
            <Marquee />
            <center><img src="/imgs/nossa-foto.jpg" width="100%" /></center>
            <InfoLocal />
          </div>

          <div className="span4" style={{ textAlign: 'center' }}>
            <BannerPresente />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home
