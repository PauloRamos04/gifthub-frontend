import React from "react";
import './Cadastro.css';
import NavBar from "./NavBar";
import { FaCircle } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

function Cadastro() {
    return (
        <div>
            <NavBar />
            <form action="" className="form-cadastro">
                <h1 className="title-cadastro">Criar uma conta</h1>
                <div className="informacoes-jogador">
                    <FaCircle className="circle-icon-jogador"/>
                    <h2 className="subtitle-cadastro">Informações do Jogador</h2>
                    <div>
                        <input type="text" name="nome" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-nome">Nome</label>
                    </div>
                    <div className="cadastro">
                        <input type="text" name="email" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-email">E-mail</label>
                    </div>
                    <div className="cadastro">
                        <input type="text" name="cpf" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-cpf">CPF</label>
                    </div>
                    <div className="cadastro">
                        <input type="date" name="dt-nasc" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-nasc">Data de Nascimento</label>
                        <CiCalendarDate className="date-icon"/>
                    </div>
                    <div className="cadastro">
                        <input type="password" name="senha" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-senha">Senha</label>
                    </div>
                    <div className="cadastro">
                        <input type="password" name="senha" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-repsenha">Repetir Senha</label>
                    </div>
                </div>

                <div className="endereco-jogador">
                    <FaCircle className="circle-icon-jogador"/>
                    <h2 className="subtitle-cadastro">Endereço do Jogador</h2>
                    <div>
                        <input type="text" name="pais" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-pais">País</label>
                    </div>
                    <div className="cadastro">
                        <input type="text" name="cep" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-cep">CEP</label>
                    </div>
                    <div className="cadastro">
                        <input type="text" name="cidade" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-cidade">Cidade</label>
                    </div>
                    <div className="cadastro">
                        <input type="text" name="estado" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-estado">Estado</label>
                    </div>
                    <div className="cadastro">
                        <input type="password" name="rua" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-rua">Rua</label>
                    </div>
                    <div className="cadastro">
                        <input type="password" name="numero" placeholder=" " required className="input-cadastro"/>
                        <label htmlFor="input" className="label-input-cadastro-numero">Nº</label>
                    </div>
                </div>    
                <button type="submit" className="btn-cadastro">Cadastrar-se</button>
                <hr className="line-cadastro"/>
                <a href="#">
                    <h2 className="tem-conta">Já tenho uma <u>conta</u></h2>
                </a> 
            </form>
        </div>
    );
}

export default Cadastro;