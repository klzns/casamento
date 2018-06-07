import React from "react";
import { withSiteData } from "react-static";
import pic from "../assets/nossa-foto.jpg";
import presente from "../assets/presente.gif";
import counter from "../assets/counter2.gif";
import mchammer from "../assets/mchammer.gif";
import bolo from "../assets/bridegroomwaving.gif";
import hot from "../assets/hot.gif";
import korea from "../assets/korea.gif";
import cat from "../assets/cat.gif";
import baby from "../assets/KDancingbaby.gif";

// alert('Bem vindo!')

export default withSiteData(() => (
  <div>
    <h3 style={{ textAlign: "center" }}>
      <span style={{color:'#ff00e1'}}>B</span><span style={{color:'#ff12c1'}}>e</span><span style={{color:'#ff24a1'}}>m</span><span style={{color:'#ff3681'}}> </span><span style={{color:'#ff4960'}}>v</span><span style={{color:'#ff5b40'}}>i</span><span style={{color:'#ff6d20'}}>n</span><span style={{color:'#ff7f00'}}>d</span><span style={{color:'#ff8f00'}}>o</span><span style={{color:'#ff9f00'}}> </span><span style={{color:'#ffaf00'}}>a</span><span style={{color:'#ffbf00'}}> </span><span style={{color:'#ffcf00'}}>h</span><span style={{color:'#ffdf00'}}>o</span><span style={{color:'#ffef00'}}>m</span><span style={{color:'#ffff00'}}>e</span><span style={{color:'#dbff00'}}>p</span><span style={{color:'#b6ff00'}}>a</span><span style={{color:'#92ff00'}}>g</span><span style={{color:'#6dff00'}}>e</span><span style={{color:'#49ff00'}}> </span><span style={{color:'#24ff00'}}>d</span><span style={{color:'#00ff00'}}>o</span><span style={{color:'#00ff24'}}> </span><span style={{color:'#00ff49'}}>c</span><span style={{color:'#00ff6d'}}>a</span><span style={{color:'#00ff92'}}>s</span><span style={{color:'#00ffb6'}}>a</span><span style={{color:'#00ffdb'}}>m</span><span style={{color:'#00ffff'}}>e</span><span style={{color:'#0cebff'}}>n</span><span style={{color:'#18d7ff'}}>t</span><span style={{color:'#23c3ff'}}>o</span><span style={{color:'#2fafff'}}> </span><span style={{color:'#3b9aff'}}>d</span><span style={{color:'#4786ff'}}>e</span><span style={{color:'#5272ff'}}> </span><span style={{color:'#5e5eff'}}>B</span><span style={{color:'#695dfd'}}>r</span><span style={{color:'#755cfc'}}>e</span><span style={{color:'#805bfa'}}>l</span><span style={{color:'#8b5af9'}}>i</span><span style={{color:'#9659f7'}}>s</span><span style={{color:'#a258f6'}}>a</span><span style={{color:'#ad57f4'}}>!</span>
      <img src="/img/test/drudgesiren.gif" style={{ height: "50px" }}/>
      <br />
    </h3>

    <img src={korea} />
    <img src={cat} />
    <br /> <br />

    <div className="row-fluid">
      <div className="span3 offset1">
        <form className="form" style={{ padding: '0 20px', textAlign: 'center' }}>
          <h2>RSVP</h2>

          <label>
            Nome e sobrenome <br />
            <input type="text" />
          </label>

          <div style={{ textAlign: 'left'}}>
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
            <img src={mchammer} /><img src={mchammer} /><img src={mchammer} />
          </div>
        </form>
      </div>

      <div className="span4">
        <p>
          <strong style={{color: 'blue' }}>Local:</strong> <br/>
            <a href="https://goo.gl/maps/SMMfdnm5DG92">Espaço Arcádia</a> <br />
            Estr. Paiva Muniz, 750 - Guaratiba <br />
            Rio de Janeiro - RJ, 23020-010 <br />
          <strong style={{color: 'blue' }}>Dia e hora:</strong> <br />
            08/09/2018 às 16h
        </p>
        <marquee trueSpeed="900" >
          <p style={{ textAlign: "center", fontFamily: 'cursive', fontWeight: 'normal', color: '#fff', fontSize: '17px' }}>
            Prepare-se para o melhor casamento do ano!!! Muia bebida e diversão!! 
          </p>
        </marquee>
        <center><img src={pic} width="100%" /></center>
      </div>

      <div className="span4" style={{ textAlign: 'center' }}>
        <img src={bolo} />
        <img src={presente} />

        <br />
        <br />
        <button type="submit" className="btn">
          <img src={hot} /> Comprar um presente!
        </button>
      </div>
    </div>

    <div class="" style={{ textAlign: 'center', marginTop: '30px' }}>
      <img src={baby} />
      <img src={counter} />
    </div>
  </div>
));
