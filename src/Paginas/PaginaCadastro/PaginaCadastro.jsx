import React, { useState } from "react";
import NavBar from "../../Componentes/Menu/NavBar";
import Rodape from "../../Componentes/Rodape/Rodape";
import logo from "../../img/logo.png";
import { FaCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import axios from 'axios'; // Importando Axios

function PaginaCadastro() {
  const [usuario, setUsuario] = useState({
    fullName: "",
    email: "",
    login: "",
    cpf: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usuario.password !== usuario.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/register", usuario);
      console.log("Resposta do servidor:", response.data);
      // Lógica para redirecionar ou exibir mensagem de sucesso
    } catch (error) {
      if (error.response) {
        // Erro na resposta do servidor
        console.error("Erro na requisição:", error.response.data);
        alert(`Erro: ${error.response.data.message || error.response.data}`);
      } else if (error.request) {
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
            <h1 className="text-3xl font-bold text-white">Criar uma conta</h1>
          </div>

          {/* Formulário de Cadastro */}
          <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            {/* Informações do Usuário */}
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <FaCircle className="text-pink-500 mr-2 opacity-0" />
                <h2 className="text-xl">Informações do Usuário</h2>
              </div>
            </div>
            <div className="relative col-span-1">
              <input
                type="text"
                name="fullName"
                placeholder="Nome Completo"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="relative col-span-1">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative col-span-1">
              <input
                type="text"
                name="login"
                placeholder="Login"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.login}
                onChange={handleChange}
              />
            </div>
            <div className="relative col-span-1">
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.cpf}
                onChange={handleChange}
              />
            </div>
            <div className="relative col-span-1">
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Data de Nascimento"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.dateOfBirth}
                onChange={handleChange}
              />
              <FiCalendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative col-span-1">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.password}
                onChange={handleChange}
              />
            </div>
            <div className="relative col-span-1">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Senha"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {/* Endereço do Usuário */}
            <div className="col-span-2 mt-4">
              <div className="flex items-center mb-4">
                <FaCircle className="text-pink-500 mr-2 opacity-0" />
                <h2 className="text-xl">Endereço do Usuário</h2>
              </div>
            </div>
            <div className="relative col-span-1">
              <input
                type="text"
                name="street"
                placeholder="Rua"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.address.street}
                onChange={handleAddressChange}
              />
            </div>
            <div className="relative col-span-1">
              <input
                type="text"
                name="city"
                placeholder="Cidade"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.address.city}
                onChange={handleAddressChange}
              />
            </div>
            <div className="relative col-span-1">
              <input
                type="text"
                name="state"
                placeholder="Estado"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.address.state}
                onChange={handleAddressChange}
              />
            </div>
            <div className="relative col-span-1">
              <input
                type="text"
                name="zipCode"
                placeholder="CEP"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.address.zipCode}
                onChange={handleAddressChange}
              />
            </div>
            <div className="relative col-span-1">
              <input
                type="text"
                name="country"
                placeholder="País"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                value={usuario.address.country}
                onChange={handleAddressChange}
              />
            </div>

            {/* Botão de Cadastro */}
            <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-bold text-lg"
              >
                Cadastrar-se
              </button>
            </div>
          </form>

          {/* Link para Login */}
          <div className="text-center mt-4">
            <p className="text-gray-400">
              Já possui uma conta? <a href="#" className="text-pink-500">Faça login aqui</a>
            </p>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default PaginaCadastro;
