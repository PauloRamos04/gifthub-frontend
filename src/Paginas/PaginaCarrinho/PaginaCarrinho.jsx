import React from "react";
import "./styles/PaginaCarrinho.css";
import NavBar from "../../Componentes/Menu/NavBar";
import Rodape from '../../Componentes/Rodape';
import Card from "./assets/psn-card.jpg"

function PaginaCarrinho() {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="title-carrinho">
                <h1>Carrinho de compras</h1>
            </div>
            <div className="descricao-carrinho">
                <ul>
                    <li>Itens</li>
                    <li>Preço</li>
                    <li>Quantidade</li>
                    <li>Subtotal</li>
                </ul>
            </div>
            <div className="informacoes-carrinho">
                <hr className="linha-carrinho1"/>
                <img src={Card} alt="card-produto"  className="card-carrinho"/>
                <ul>
                    <li className="preco">R$ 150,00</li>
                    <li className="quantidade">1</li>
                    <li className="subtotal">R$ 150,00</li>
                </ul>
                <hr className="linha-carrinho2"/>
            </div>
            <div className="resumo">
                <h2>Resumo</h2>
                <hr className="line-resumo"/>
                <h3>Total do pedido</h3>
                <h3 className="total-pedido">R$ 150,00</h3>
                <div>
                    <a href="#">
                        <button className="btn-resumo">Comprar</button>
                    </a>
                </div>
            </div>
            <div>
                <Rodape />
            </div>
        </div>
    );
}

export default PaginaCarrinho;