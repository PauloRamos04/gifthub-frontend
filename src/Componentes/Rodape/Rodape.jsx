// Rodape.jsx
import React from 'react';
import logoRodape from '../../img/logorodape.png';
import whatsapp from './assets/WhatsApp/whatsapp.png';
import facebook from './assets/Facebook/facebook.png';
import instagram from './assets/Instagram/instagram.png';
import twitter from './assets/Twitter/twitter.png';
import visaEmastercard from '../../img/visa.png';
import paypal from '../../img/paypal.png';

const Rodape = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <img src={logoRodape} alt="Logo GiftHub" className="w-32 h-auto mx-auto lg:mx-0" />
        </div>
        
        {/* Social Media */}
        <div className="w-full lg:w-1/4 mb-4">
          <h1 className="text-lg font-bold mb-4">Social Media</h1>
          <div className="flex items-center space-x-4">
            <a href="#"><img src={whatsapp} alt="WhatsApp" className="w-8 h-8" /></a>
            <a href="#"><img src={facebook} alt="Facebook" className="w-8 h-8" /></a>
            <a href="#"><img src={instagram} alt="Instagram" className="w-8 h-8" /></a>
            <a href="#"><img src={twitter} alt="Twitter" className="w-8 h-8" /></a>
          </div>
        </div>

        {/* Métodos de Pagamento */}
        <div className="w-full lg:w-1/4 mb-4">
          <h1 className="text-lg font-bold mb-4">Métodos de Pagamento</h1>
          <div className="flex items-center space-x-4">
            <img src={visaEmastercard} alt="Visa e Mastercard" className="w-16 h-auto" />
            <img src={paypal} alt="Paypal" className="w-16 h-auto" />
          </div>
        </div>

        {/* Receber Notícias */}
        <div className="w-full lg:w-1/4 mb-4">
          <h1 className="text-lg font-bold mb-4">Receber Notícias</h1>
          <div className="flex">
            <input type="text" placeholder="Digite seu e-mail" className="w-2/3 bg-gray-800 text-white py-2 px-3 rounded-l-lg focus:outline-none" />
            <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-r-lg hover:bg-pink-600 focus:outline-none">Assinar</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
