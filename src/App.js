import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PaginaInicial from './Paginas/PaginaInicial/PaginaInicial';
import ProdutoDetalhes from "./Paginas/ProdutoDetalhe/ProdutoDetalhe";
import PaginaCadastro from "./Paginas/PaginaCadastro/PaginaCadastro";
import PaginaLogin from "./Paginas/PaginaLogin/PaginaLogin";
import PaginaCarrinho from "./Paginas/PaginaCarrinho/PaginaCarrinho";

function App() {
  const adicionarAoCarrinho = (item) => {
    // Implementação da função para adicionar ao carrinho
    console.log('Adicionar ao carrinho:', item);
    // Aqui você pode implementar a lógica para adicionar o item ao carrinho no estado global, Redux, contexto, etc.
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PaginaInicial} />
        <Route path="/produto/:id">
          <ProdutoDetalhes adicionarAoCarrinho={adicionarAoCarrinho} />
        </Route>
        <Route path="/cadastro" component={PaginaCadastro} />
        <Route path="/login" component={PaginaLogin} />
        <Route path="/carrinho" component={PaginaCarrinho} />
        {/* Adicione outras rotas conforme necessário */}
      </Switch>
    </Router>
  );
}

export default App;
