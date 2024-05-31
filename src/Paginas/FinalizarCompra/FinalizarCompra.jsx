import React from 'react';
import "./styles/FinalizarCompra.css"
import NavBar from "../../Componentes/Menu/NavBar";
import Rodape from "../../Componentes/Rodape";
import Pix from "./assets/pix.png"
import Check from "./assets/check.png"
import Card from "./assets/psn-card.jpg"

function FinalizarCompra() {
    return (
        <div>
            <NavBar />
            <div className=''>
                <h1 className='title-finalizar'>Obrigado pela sua compra!</h1>
                <img src={Check} alt="check" className='check'/>
            </div>

            <div className='informacoes-pix'>
                <div className='informacoes'>
                    <h1>Quase lá! Pague via Pix para concluir sua compra</h1>
                    <label>Valor: R$ 150,00 | Vencimento: 60 minutos</label>
                    <hr />
                    <h1>Ou pague com Pix Cópia e Cola</h1>
                    <label>Acesse o seu banco ou aplicativo de pagamentos e escolha pagar via Pix. Em seguida, cole o seguinte código de pagamento:</label>
                    <br />
                    <br />
                    <label>00020101021226990014br.gov.bcbd...</label>
                    <button className='btn-copia'>Copiar</button>
                    <hr />
                    <h1>Escaneie este código QR para pagar</h1>
                </div>
                <div className='pix'>
                    <img src={Pix} alt="pix" className='qr-pix'/>
                </div>
            </div>
            
            <div className='informacoes-pedido'>
                <div className='informacoes'>
                    <h1>Pedido #005993869</h1>
                    <label>Enviamos a você um e-mail com todas as informações sobre sua compra :)</label>
                    <br />
                    <br />
                    <h1>E-mail</h1>
                    <label>adryannorf@hotmail.com</label>
                </div>

                <div className='pedido'>
                    <h1>Produto</h1>
                    <hr className='hr-cima'/>
                    <img src={Card} alt="card" />
                    <h3>Play Station Store</h3>
                    <h3>Total do Pedido: R$ 150,00</h3>
                    <h3>Quantidade: 1</h3>
                    <hr className='hr-baixo'/>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div>
                <Rodape />
            </div>
        </div>
    );
}

export default FinalizarCompra;