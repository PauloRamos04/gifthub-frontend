import React from 'react'
import styles from './styles/rodape.module.css'
import logoRodape from './assets/logologoRodape.png'
import whatsapp from './assets/WhatsApp/whatsapp.png'
import facebook from './assets/Facebook/facebook.png'
import instagram from './assets/Instagram/instagram.png'
import twitter from './assets/Twitter/twitter.png'
import visaEmastercard from './assets/Visa&mastercard.png'
import paypal from './assets/Paypal.png'

export default function Rodape() {
  return (
    <footer className={styles.container}>
        <div className={styles.container_logo}>
            <a href="#"><img className={styles.logo_rodape} src={logoRodape} alt="Logo GiftHub" /></a>
        </div>
        <div className={styles.container_informacoes}>
            <div className={styles.container_informacoes_social}>
                <h1>Social Media</h1>
                <div className={styles.icons_social}>
                    <a href="#"><img className={styles.icone} src={whatsapp} alt="whatsApp" /></a>
                    <a href="#"><img className={styles.icone} src={facebook} alt="facebook" /></a>
                    <a href="#"><img className={styles.icone} src={instagram} alt="instagram"/></a>
                    <a href="#"><img className={styles.icone} src={twitter} alt="twitter" /></a>               </div>
            </div>
            <div className={styles.container_informacoes_pagamento}>
                <h1>Métodos de Pagamentos</h1>
                <div className={styles.logo_pagamento}>
                    <img className={styles.pag} src={visaEmastercard} alt="Símbolos da Visa e Mastercard"/>
                    <img className={styles.pag} src={paypal} alt="Símbolo da Paypal"/>
                </div>
            </div>
            <div className={styles.container_informacoes_noticia}>
                <h1>Receber Notícias</h1>
                <div className={styles.email}>
                    <input className={styles.caixaTexto} type="text" placeholder='Digite seu e-mail' />
                    <button className={styles.botao} type='submit'>Assinar</button>
                </div>
            </div>
        </div>
    </footer>
  )
}
