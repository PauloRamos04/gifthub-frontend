import React from 'react'
import './styles/paginaInicial.module.css'
import Rodape from '../../Componentes/Rodape'
import Banner from '../../Componentes/Banner'
import ConteudoPrincipal from '../../Componentes/ConteudoPrincipal'
import NavBar from '../../Componentes/Menu/NavBar'

export default function PaginaInicial() {
  return (
    <>
    <menu>
      <NavBar></NavBar>
    </menu>
    <section>
      <Banner></Banner>
    </section>
    <main>
      <ConteudoPrincipal></ConteudoPrincipal>
    </main>
    <footer>
      <Rodape></Rodape>
    </footer>
    </>
  )
}
