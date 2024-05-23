import React from "react";
import "./styles/NavBar.css"
import logo from "./assets/logo.png"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";

function NavBar() {
    return (
        <div className="navigation">
            <hr className="line"/>
            <a href="#" className="btn-navabar">
                <img src={logo} alt="logo" className="logo" />
            </a>
            <ul>
                <li>
                    <a href="#" className="btn-navabar">Consoles</a>
                </li>
                <li>
                    <a href="#" className="btn-navabar">Serviços</a>
                </li>
                <li>
                    <a href="#" className="btn-navabar">PC</a>
                </li>
                <li>
                    <a href="#" className="btn-navabar">Mobile</a>
                </li>
                <li>
                    <a href="#" className="btn-navabar">Todos</a>
                </li>
                <li>
                    <input type="text" placeholder="Pesquisar" className="input-navbar"/>
                    <FaMagnifyingGlass className="icon-glass"/>
                </li>
                <li>
                    <a href="#" className="btn-navabar">Cadastrar</a>
                </li>
                <li>
                    <a href="#" className="btn-navabar">Entrar</a>
                </li>
                <li>
                    <a href="#" className="btn-navabar">
                        <FaShoppingBasket className="icon-basket"/>
                    </a>
                </li>
            </ul>
        </div>
        
    );
}

export default NavBar;