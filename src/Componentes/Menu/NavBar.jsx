import React, { useState } from "react";
import logo from "../../img/logo.png";
import { FaShoppingBasket, FaSearch } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

function NavBar({ produtos }) {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() !== '') {
      try {
        const response = await axios.get(`http://localhost:8080/api/product/search?search=${encodeURIComponent(term)}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <nav className="bg-gray-800 shadow-md py-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-12" />
        </Link>
        <div className="flex items-center ml-auto space-x-4">
          <form className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-gray-700 text-white py-2 px-3 rounded-l-lg focus:outline-none focus:border-pink-600"
            />
            <button
              type="submit"
              className="bg-gray-700 text-white py-2 px-4 rounded-r-lg hover:bg-gray-600 focus:outline-none absolute right-0 top-0 bottom-0"
            >
              <FaSearch />
            </button>
          </form>
          {searchTerm && (
            <div className="absolute z-10 w-full mt-2 bg-gray-800 rounded-md shadow-lg">
              {searchResults.length > 0 ? (
                <ul className="divide-y divide-gray-600">
                  {searchResults.map((product) => (
                    <li key={product.productId} className="px-4 py-2">
                      <Link
                        to={`/produto/${product.productId}`}
                        className="text-white hover:text-pink-500"
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-white p-2">Nenhum resultado encontrado.</div>
              )}
            </div>
          )}
          {/* Conditional rendering for login/logout */}
          {localStorage.getItem('token') ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none"
              >
                Logout
              </button>
              <Link
                to="/perfil"
                className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none"
              >
                Perfil
              </Link>
              {/* Cart button */}
              <Link
                to="/carrinho"
                className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none flex items-center ml-4"
              >
                <FaShoppingBasket className="mr-2" />
                Carrinho
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={handleLoginClick}
                className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none"
              >
                Entrar
              </button>
              {/* Register button */}
              <Link
                to="/cadastro"
                className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none"
              >
                Cadastrar
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
