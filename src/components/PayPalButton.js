import React from 'react'

export default function PayPalButton({ name, price }) {
  return (
    <form className="paypal-button" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_cart" />
      <input type="hidden" name="business" value="KC64YPLKGDYPA" />
      <input type="hidden" name="lc" value="BR" />
      <input type="hidden" name="item_name" value={name} />
      <input type="hidden" name="amount" value={`${price}.00`} />
      <input type="hidden" name="currency_code" value="BRL" />
      <input type="hidden" name="add" value="1" />
      <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHosted" />
      <input type="hidden" name="on0" value="Mensagem para os noivos"/>
      
      <label>
        Mensagem para os noivos
        <input className="input-block-level" type="text" name="os0" maxLength="200"/>
      </label>

      <input type="image" className="add-to-cart" src="https://www.paypalobjects.com/pt_BR/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!" />
      <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
    </form>
  )
}
