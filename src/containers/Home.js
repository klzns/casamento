import React, { Component } from 'react'
import { withSiteData, Link } from 'react-static'
import Footer from '../components/Footer'

class Home extends Component {
  render() {
    return (
      <div>
    <h3 style={{ textAlign: 'center' }}>
      <span style={{ color: '#ff00e1' }}>B</span>
      <span style={{ color: '#ff12c1' }}>e</span>
      <span style={{ color: '#ff24a1' }}>m</span>
      <span style={{ color: '#ff3681' }}> </span>
      <span style={{ color: '#ff4960' }}>v</span>
      <span style={{ color: '#ff5b40' }}>i</span>
      <span style={{ color: '#ff6d20' }}>n</span>
      <span style={{ color: '#ff7f00' }}>d</span>
      <span style={{ color: '#ff8f00' }}>o</span>
      <span style={{ color: '#ff9f00' }}> </span>
      <span style={{ color: '#ffaf00' }}>a</span>
      <span style={{ color: '#ffbf00' }}> </span>
      <span style={{ color: '#ffcf00' }}>h</span>
      <span style={{ color: '#ffdf00' }}>o</span>
      <span style={{ color: '#ffef00' }}>m</span>
      <span style={{ color: '#ffff00' }}>e</span>
      <span style={{ color: '#dbff00' }}>p</span>
      <span style={{ color: '#b6ff00' }}>a</span>
      <span style={{ color: '#92ff00' }}>g</span>
      <span style={{ color: '#6dff00' }}>e</span>
      <span style={{ color: '#49ff00' }}> </span>
      <span style={{ color: '#24ff00' }}>d</span>
      <span style={{ color: '#00ff00' }}>o</span>
      <span style={{ color: '#00ff24' }}> </span>
      <span style={{ color: '#00ff49' }}>c</span>
      <span style={{ color: '#00ff6d' }}>a</span>
      <span style={{ color: '#00ff92' }}>s</span>
      <span style={{ color: '#00ffb6' }}>a</span>
      <span style={{ color: '#00ffdb' }}>m</span>
      <span style={{ color: '#00ffff' }}>e</span>
      <span style={{ color: '#0cebff' }}>n</span>
      <span style={{ color: '#18d7ff' }}>t</span>
      <span style={{ color: '#23c3ff' }}>o</span>
      <span style={{ color: '#2fafff' }}> </span>
      <span style={{ color: '#3b9aff' }}>d</span>
      <span style={{ color: '#4786ff' }}>e</span>
      <span style={{ color: '#5272ff' }}> </span>
      <span style={{ color: '#5e5eff' }}>B</span>
      <span style={{ color: '#695dfd' }}>r</span>
      <span style={{ color: '#755cfc' }}>e</span>
      <span style={{ color: '#805bfa' }}>l</span>
      <span style={{ color: '#8b5af9' }}>i</span>
      <span style={{ color: '#9659f7' }}>s</span>
      <span style={{ color: '#a258f6' }}>a</span>
      <span style={{ color: '#ad57f4' }}>!</span>
      <img src="/vendor/img/test/drudgesiren.gif" style={{ height: '50px' }} />
      <br />
    </h3>

    <img src="/gifs/korea.gif" />
    <img src="/gifs/cat.gif" />
    <br /> <br />

    <div className="row-fluid">
      <div className="span3 offset1">
        <form className="form" style={{ padding: '0 20px', textAlign: 'center' }}>
          <h2>RSVP</h2>

          <label>
            Nome e sobrenome <br />
            <input type="text" />
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
      </div>

      <div className="span4">
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
        <center><img src="/imgs/nossa-foto.jpg" width="100%" /></center>
        <p>
          <strong style={{ color: 'blue' }}>Local:</strong> <br />
          <a href="https://goo.gl/maps/SMMfdnm5DG92">Espaço Arcádia</a> <br />
          Estr. Paiva Muniz, 750 - Guaratiba <br />
          Rio de Janeiro - RJ, 23020-010 <br />
          <strong style={{ color: 'blue' }}>Dia e hora:</strong> <br />
          08/09/2018 às 16h <br />
          <strong style={{ color: 'blue' }}>Traje:</strong> <br />
          Vai bem bonitinho
        </p>
      </div>

      <div className="span4" style={{ textAlign: 'center' }}>
        <img src="/gifs/bridegroomwaving.gif" />
        <img src="/gifs/presente.gif" />

        <br />
        <br />
        <Link className="btn" to="/presentes">
          <img src="/gifs/hot.gif" /> Comprar um presente!
        </Link>
      </div>
    </div>

    <Footer />
  </div>
    )
  }
}

export default Home
