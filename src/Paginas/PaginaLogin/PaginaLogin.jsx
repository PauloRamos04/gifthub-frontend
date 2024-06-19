import React, { useState } from "react";
import axios from 'axios'; // Importando Axios
import NavBar from "../../Componentes/Menu/NavBar";
import { useHistory } from 'react-router-dom';
import Rodape from "../../Componentes/Rodape/Rodape";
import logo from "../../img/logo.png";

function PaginaLogin() {
  const [credentials, setCredentials] = useState({
    login: "",
    password: ""
  });

  const history = useHistory(); // Usando useHistory para redirecionamento

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
      history.push("/");
    } catch (error) {
      if (error.response) {
        // Erro na resposta do servidor
        if (error.response.message === "Usuário inexistente ou senha inválida") {
          alert("Erro: Usuário inexistente ou senha inválida.");
        } else {
          console.error("Erro na requisição:", error.response.data);
          alert(`Erro: ${error.response.data.message || error.response.data}`);
        }
      } else if (error.response.message === "Usuário não verificado") {
        alert("Erro: Usuário não verificado.");
      }
      else if (error.request) {
        // Erro na requisição, sem resposta
        console.error("Erro na requisição, sem resposta:", error.request);
        alert("Erro na requisição. Por favor, tente novamente mais tarde.");
      } else {
        // Outro tipo de erro
        console.error("Erro:", error.message);
        alert(`Erro: ${error.message}`);
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

          {/* Formulário de Login */}
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
              <a href="#" className="text-white underline">
                Esqueci a senha
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-bold text-lg"
            >
              Entrar
            </button>
          </form>

          {/* Link para Cadastro */}
          <div className="text-center mt-4">
            <p className="text-gray-400">
              Ainda não tem uma conta?{" "}
              <a href="#" className="text-pink-500 underline">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default PaginaLogin;
