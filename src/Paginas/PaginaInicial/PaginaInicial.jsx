import React from 'react';
import Rodape from '../../Componentes/Rodape/Rodape';
import Banner from '../../Componentes/Banner';
import ConteudoPrincipal from '../../Componentes/ConteudoPrincipal/ConteudoPrincipal';
import NavBar from '../../Componentes/Menu/NavBar';

function PaginaInicial() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Banner />
        <ConteudoPrincipal />
      </div>
      <Rodape />
    </div>
  );
}

export default PaginaInicial;
