import React, { useState } from "react";
import axios from 'axios';
import NavBar from "../../Componentes/Menu/NavBar";
import { useHistory } from 'react-router-dom';
import Rodape from "../../Componentes/Rodape/Rodape";
import logo from "../../img/logo.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Adicionar a importação do CSS aqui

function PaginaLogin() {
  const [credentials, setCredentials] = useState({
    login: "",
    password: ""
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", credentials);
      const { token, userId, username } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', username);
      toast.success("Login realizado com sucesso!");
      history.push("/");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 403) {
          toast.error("Erro: Usuário desabilitado. Verifique seu email para ativar a conta.");
        } else if (error.response.data.message === "Usuário inexistente ou senha inválida") {
          toast.error("Erro: Usuário inexistente ou senha inválida.");
        } else {
          console.error("Erro na requisição:", error.response.data);
          toast.error(`Erro: ${error.response.data.message || error.response.data}`);
        }
      } else {
        toast.error("Erro: Não foi possível conectar ao servidor.");
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <NavBar />
      <div className="container mx-auto flex-grow flex items-center justify-center">
        <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-6 text-center">
            <img src={logo} alt="logo" className="h-20 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white">Iniciar Sessão</h1>
          </div>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="login"
                placeholder="Usuario"
                required
                className="w-full p-2 bg-gray-700 border border-pink-500 rounded focus:outline-none focus:border-pink-600"
                value={credentials.login}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                required
                placeholder="Senha"
                className="w-full p-2 bg-gray-700 border border-pink-500 rounded focus:outline-none focus:border-pink-600"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                className="text-white underline"
                onClick={() => history.push('/recuperar-senha')}
              >
                Esqueci a senha
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-bold text-lg"
            >
              Entrar
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-400">
              Ainda não tem uma conta?{" "}
              <button
                type="button"
                className="text-pink-500 underline"
                onClick={() => history.push('/cadastro')}
              >
                Cadastre-se
              </button>
            </p>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default PaginaLogin;
