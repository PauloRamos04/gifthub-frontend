import React from "react";
import "./styles/PaginaLogin.css";
import NavBar from "../../Componentes/Menu/NavBar";
import Rodape from '../../Componentes/Rodape';

function PaginaLogin() {
    return (
        <div>
            <NavBar />
            <form action="" className="form-login">
                <h1 className="title-login">Iniciar Sessão</h1>
                <div className="login">
                    <input type="text" name="email" placeholder=" "required className="input-login"/>
                    <label htmlFor="input" className="label-input">E-mail</label>
                </div>
                <div className="login">
                    <input type="password" name="senha" required className="input-login"/>
                    <label htmlFor="input" className="label-input-senha">Senha</label>
                </div>
                <div>
                    <a href="#" className="esqueci-senha">Esqueci a senha</a>
                </div>
                <button type="submit" className="btn-login">Entrar</button>
                <hr className="line-login"/>
                <a href="#">
                    <h2 className="criar-conta">Ainda não tenho uma <u>conta</u></h2>
                </a>
            </form>
            <Rodape />
        </div>
    );
}

export default PaginaLogin;