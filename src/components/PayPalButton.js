import React from 'react'

export default function PayPalButton({ name, price }) {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_xclick" />
      <input type="hidden" name="business" value="KC64YPLKGDYPA" />
      <input type="hidden" name="lc" value="BR" />
      <input type="hidden" name="item_name" value={name} />
      <input type="hidden" name="amount" value={`${price}.00`} />
      <input type="hidden" name="currency_code" value="BRL" />
      <input type="hidden" name="button_subtype" value="services" />
      <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted" />
      <table>
        <tbody>
          <tr><td>
            <input type="hidden" name="on0" value="Mensagem"/>Mensagem para os noivos
          </td></tr>
          <tr><td>
            <input type="text" name="os0" maxLength="200"/>
          </td></tr>
        </tbody>
      </table>
      <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"/>
      <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1"/>
    </form>
  )
}
