import React from 'react';
import { Link } from 'react-router-dom';
import playstationLogo from '../../img/cards/card_playstation2.png';
import xboxConsole2 from '../../img/cards/card_xbox.png';
import playstationConsole from '../../img/cards/card_playstation.png';
import nintendoConsole from '../../img/cards/card_nintendo.png';
import xboxConsole from '../../img/cards/card_xbox2.png';
import ifoodService from '../../img/cards/card_ifood.png';
import netflixService from '../../img/cards/card_netflix.png';
import spotifyService from '../../img/cards/card_spotify.png';
import uberService from '../../img/cards/card_uber.png';
import airbnbService from '../../img/cards/card_airbnb.png';
import steamPC from '../../img/cards/card_steam.png';
import razerPC from '../../img/cards/card_razer.png';
import minecraftPC from '../../img/cards/card_minecraft.png';
import lolPC from '../../img/cards/card_lol.png';
import valorantPC from '../../img/cards/card_valorant.png';
import appleMobile from '../../img/cards/card_apple.png';
import googlePlayMobile from '../../img/cards/card_googleplay.png';
import freeFireMobile from '../../img/cards/card_freefire.png';
import lolMobile from '../../img/cards/card_mobilelegends.png';
import fcMobile from '../../img/cards/card_fcmobile.png';

function ConteudoPrincipal() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Consoles */}
        <section>
          <h1 className="text-3xl text-white mb-4">Consoles</h1>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/produto/1" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={playstationLogo} alt="Logo Playstation" className="w-full h-auto" />
            </Link>
            <Link to="/produto/2" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={xboxConsole2} alt="Xbox" className="w-full h-auto" />
            </Link>
            <Link to="/produto/3" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={playstationConsole} alt="Playstation" className="w-full h-auto" />
            </Link>
            <Link to="/produto/4" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={nintendoConsole} alt="Nintendo" className="w-full h-auto" />
            </Link>
            <Link to="/produto/5" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={xboxConsole} alt="Xbox" className="w-full h-auto" />
            </Link>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-white underline">
              Ver Mais
            </a>
          </div>
        </section>

        {/* Serviços */}
        <section>
          <h1 className="text-3xl text-white mb-4">Serviços</h1>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/produto/6" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={ifoodService} alt="iFood" className="w-full h-auto" />
            </Link>
            <Link to="/produto/7" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={netflixService} alt="Netflix" className="w-full h-auto" />
            </Link>
            <Link to="/produto/8" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={spotifyService} alt="Spotify" className="w-full h-auto" />
            </Link>
            <Link to="/produto/9" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={uberService} alt="Uber" className="w-full h-auto" />
            </Link>
            <Link to="/produto/10" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={airbnbService} alt="Airbnb" className="w-full h-auto" />
            </Link>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-white underline">
              Ver Mais
            </a>
          </div>
        </section>

        {/* PCs */}
        <section>
          <h1 className="text-3xl text-white mb-4">PC's</h1>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/produto/11" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={steamPC} alt="Steam" className="w-full h-auto" />
            </Link>
            <Link to="/produto/12" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={razerPC} alt="Razer" className="w-full h-auto" />
            </Link>
            <Link to="/produto/13" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={minecraftPC} alt="Minecraft" className="w-full h-auto" />
            </Link>
            <Link to="/produto/14" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={lolPC} alt="League of Legends" className="w-full h-auto" />
            </Link>
            <Link to="/produto/15" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={valorantPC} alt="Valorant" className="w-full h-auto" />
            </Link>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-white underline">
              Ver Mais
            </a>
          </div>
        </section>

        {/* Mobiles */}
        <section>
          <h1 className="text-3xl text-white mb-4">Mobiles</h1>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/produto/16" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={appleMobile} alt="Apple" className="w-full h-auto" />
            </Link>
            <Link to="/produto/17" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={googlePlayMobile} alt="Google Play" className="w-full h-auto" />
            </Link>
            <Link to="/produto/18" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={freeFireMobile} alt="Free Fire" className="w-full h-auto" />
            </Link>
            <Link to="/produto/19" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={lolMobile} alt="League of Legends" className="w-full h-auto" />
            </Link>
            <Link to="/produto/20" className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={fcMobile} alt="FC Mobile" className="w-full h-auto" />
            </Link>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-white underline">
              Ver Mais
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ConteudoPrincipal;
