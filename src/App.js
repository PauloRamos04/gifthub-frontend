import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Certifique-se de que o CSS está sendo importado

import PaginaInicial from './Paginas/PaginaInicial/PaginaInicial';
import ProdutoDetalhes from "./Paginas/ProdutoDetalhe/ProdutoDetalhe";
import PaginaCadastro from "./Paginas/PaginaCadastro/PaginaCadastro";
import PaginaLogin from "./Paginas/PaginaLogin/PaginaLogin";
import PaginaCarrinho from "./Paginas/PaginaCarrinho/PaginaCarrinho";

function App() {
  const adicionarAoCarrinho = (item) => {
    console.log('Adicionar ao carrinho:', item);
  };

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={PaginaInicial} />
        <Route path="/produto/:id">
          <ProdutoDetalhes adicionarAoCarrinho={adicionarAoCarrinho} />
        </Route>
        <Route path="/cadastro" component={PaginaCadastro} />
        <Route path="/login" component={PaginaLogin} />
        <Route path="/carrinho" component={PaginaCarrinho} />
      </Switch>
    </Router>
  );
}

export default App;
