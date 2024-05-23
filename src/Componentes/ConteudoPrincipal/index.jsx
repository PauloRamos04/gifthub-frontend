import React from 'react'
import style from './styles/principal.module.css'
import console1 from './assets/playstationconsole1.png'
import console2 from './assets/xbox_2console2.png'
import console3 from './assets/plastation_2console3.png'
import console4 from './assets/nitendoconsole4.png'
import console5 from './assets/xboxconsole5.png'
import servico1 from './assets/ifoodservico1.png'
import servico2 from './assets/netflixservico2.png'
import servico3 from './assets/spotifyservico3.png'
import servico4 from './assets/uberservico4.png'
import servico5 from './assets/airbnbservico5.png'
import pc1 from './assets/steampc1.png'
import pc2 from './assets/razerpc2.png'
import pc3 from './assets/minecraftpc3.png'
import pc4 from './assets/lolpc4.png'
import pc5 from './assets/valorantpc5.png'
import mobile1 from './assets/applemobile1.png'
import mobile2 from './assets/google_playmobile2.png'
import mobile3 from './assets/freefiremobile3.png'
import mobile4 from './assets/lolmobile4.png'
import mobile5 from './assets/fc_mobilemobile5.png'
import Cards from '../Cards'

export default function ConteudoPrincipal() {
  return (        
    <main className={style.container}>
      <h1 className={style.titulo_card}>Consoles</h1>
      <div className={style.container_card}>
        {/*Card 1 Console*/}
        <div className={style.card}>
          <img src={console1} alt="Logo Playstation" />
        </div>
        {/*Card 2 Console*/}
        <div className={style.card}>
          <img src={console2} alt="" />
        </div>
        {/*Card 3 Console*/}
        <div className={style.card}>
          <img src={console3} alt="" />
        </div>
        {/*Card 4 Console*/}
        <div className={style.card}>
          <img src={console4} alt="" />
        </div>
        {/*Card 4 Console*/}
        <div className={style.card}>
          <img src={console5} alt="" />
        </div>
        {/*Card 5 Console*/}
        <a href="#"><div className={style.verMais}>
          <h2>Ver Mais</h2>
        </div></a>
      </div>

      <h1 className={style.titulo_card}>Serviços</h1>
      <div className={style.container_card}>
        {/*Card 1 Serviços*/}
        <div className={style.card}>
          <img src={servico1} alt="" />
        </div>
        {/*Card 2 Serviços*/}
        <div className={style.card}>
          <img src={servico2} alt="" />
        </div>
        {/*Card 3 Serviços*/}
        <div className={style.card}>
          <img src={servico3} alt="" />
        </div>
        {/*Card 4 Serviços*/}
        <div className={style.card}>
          <img src={servico4} alt="" />
        </div>
        {/*Card 4 Serviços*/}
        <div className={style.card}>
          <img src={servico5} alt="" />
        </div>
        {/*Card 5 Serviços*/}
        <a href="#"><div className={style.verMais}>
          <h2>Ver Mais</h2>
        </div></a>
      </div>

      <h1 className={style.titulo_card}>PC's</h1>
      <div className={style.container_card}>
        {/*Card 1 PC*/}
        <div className={style.card}>
          <img src={pc1} alt="" />
        </div>
        {/*Card 2 PC*/}
        <div className={style.card}>
          <img src={pc2} alt="" />
        </div>
        {/*Card 3 PC*/}
        <div className={style.card}>
          <img src={pc3} alt="" />
        </div>
        {/*Card 4 PC*/}
        <div className={style.card}>
          <img src={pc4} alt="" />
        </div>
        {/*Card 4 PC*/}
        <div className={style.card}>
          <img src={pc5} alt="" />
        </div>
        {/*Card 5 PC*/}
        <a href=""><div className={style.verMais}>
          <h2>Ver Mais</h2>
        </div></a>
      </div>
      
      <h1 className={style.titulo_card}>Mobiles</h1>
      <div className={style.container_card}>
        {/*Card 1 Mobile*/}
        <div className={style.card}>
          <img src={mobile1} alt="" />
        </div>
        {/*Card 2 Mobile*/}
        <div className={style.card}>
          <img src={mobile2} alt="" />
        </div>
        {/*Card 3 Mobile*/}
        <div className={style.card}>
          <img src={mobile3} alt="" />
        </div>
        {/*Card 4 Mobile*/}
        <div className={style.card}>
          <img src={mobile4} alt="" />
        </div>
        {/*Card 4 Mobile*/}
        <div className={style.card}>
          <img src={mobile5} alt="" />
        </div>
        {/*Card 5 Mobile*/}
        <a href="#"><div className={style.verMais}>
          <h2>Ver Mais</h2>
        </div></a>
      </div>
    </main>
  )
}
