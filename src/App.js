import logo from './logo.svg';
import './App.css';
import PaginaInicial from './Paginas/PaginaInicial/PaginaInicial';
import PaginaCadastro from './Paginas/PaginaCadastro/PaginaCadastro';
import PaginaLogin from './Paginas/PaginaLogin/PaginaLogin';
import PaginaCarrinho from './Paginas/PaginaCarrinho/PaginaCarrinho';
import FinalizarCompra from './Paginas/FinalizarCompra/FinalizarCompra';
import NavBar from './Componentes/Menu/NavBar';

export default function App() {
  return (
    <>
      <FinalizarCompra />
    </>
  );
}