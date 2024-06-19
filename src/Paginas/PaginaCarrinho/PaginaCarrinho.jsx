import React, { useState, useEffect } from 'react';
import NavBar from '../../Componentes/Menu/NavBar';
import Rodape from '../../Componentes/Rodape/Rodape';
import axios from 'axios';
import qrcode from '../../img/qrcode.jpg';

// Importe as imagens
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
import paypal from '../../img/paypal.png';
import visa from '../../img/visa.png';

const imagensProdutos = {
  'PlaystationStore': playstationLogo,
  'Xbox': xboxConsole2,
  'Playstation2': playstationConsole,
  'Nintendo': nintendoConsole,
  'Xbox2': xboxConsole,
  'Ifood': ifoodService,
  'Netflix': netflixService,
  'Spotify': spotifyService,
  'Uber': uberService,
  'Airbnb': airbnbService,
  'Steam': steamPC,
  'Razer': razerPC,
  'Minecraft': minecraftPC,
  'LOL': lolPC,
  'Valorant': valorantPC,
  'Apple': appleMobile,
  'GooglePlay': googlePlayMobile,
  'FreeFire': freeFireMobile,
  'MobileLegends': lolMobile,
  'FCMobile': fcMobile,
};

function PaginaCarrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);
  const [checkoutStatus, setCheckoutStatus] = useState(false);
  const [numeroPedido, setNumeroPedido] = useState('');

  const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  useEffect(() => {
    const carregarCarrinho = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:8080/api/cart/${userId}`);
        const carrinhoData = response.data;

        const carrinhoAtualizado = [];

        for (let i = 0; i < carrinhoData.length; i++) {
          const productId = carrinhoData[i].productId;
          const produtoResponse = await axios.get(`http://localhost:8080/api/product/${productId}`);
          const produtoDetalhado = {
            ...carrinhoData[i],
            ...produtoResponse.data
          };
          carrinhoAtualizado.push(produtoDetalhado);
        }

        setCarrinho(carrinhoAtualizado);
        calcularTotalPedido(carrinhoAtualizado);

      } catch (error) {
        console.error('Erro ao carregar carrinho:', error);
      }
    };

    carregarCarrinho();
  }, []);

  const formatarPreco = (preco) => {
    if (typeof preco === 'number') {
      return `R$ ${preco.toFixed(2)}`;
    }
    return 'Preço Indisponível';
  };

  const calcularSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calcularTotalPedido = (carrinhoData) => {
    const total = carrinhoData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPedido(total);
    gerarNumeroPedido();
  };

  const gerarNumeroPedido = () => {
    const numeroAleatorio = Math.floor(Math.random() * 1000000) + 1;
    setNumeroPedido(numeroAleatorio);
  };

  const handleCheckout = async () => {
    try {
      const response = await api.post(`/cart/${localStorage.getItem('userId')}/checkout`);
      console.log('Resposta do servidor ao fazer checkout:', response);
  
      if (response.status === 201) {
        // Limpar o carrinho local após o checkout bem-sucedido
        setCarrinho([]);
  
        // Atualizar estado para exibir a seção de confirmação
        setCheckoutStatus(true);
  
        // Atualizar o total do pedido para refletir o carrinho vazio após o checkout
        setTotalPedido(0);
  
        // Exemplo: exibir mensagem de sucesso
        alert('Compra realizada com sucesso!');
      } else {
        throw new Error(`Erro ao fazer checkout: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Erro ao fazer checkout:', error);
      // Exemplo: exibir mensagem de erro para o usuário
      alert(`Erro ao fazer checkout: ${error.message}`);
    }
  };

  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto);
    alert('Texto copiado para a área de transferência!');
  };
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center my-4">Carrinho de Compras</h1>

        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="flex text-white font-semibold">
            <div className="w-2/4">Item</div>
            <div className="w-1/4">Preço</div>
            <div className="w-1/4">Quantidade</div>
            <div className="w-1/4">Subtotal</div>
          </div>

          {carrinho.map((item, index) => (
            <div key={index} className="flex items-center mt-4 border-t border-gray-700 pt-4">
              <img src={imagensProdutos[item.name]} alt={item.name} className="w-24 h-24 rounded-lg mr-4" />
              <div className="w-2/4">{item.name}</div>
              <div className="w-1/4">{formatarPreco(item.price)}</div>
              <div className="w-1/4">{item.quantity}</div>
              <div className="w-1/4">{formatarPreco(calcularSubtotal(item))}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-4 mt-8">
          <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
          <div className="flex justify-between items-center">
            <span className="text-lg">Total do Pedido</span>
            <span className="text-lg font-bold">{formatarPreco(totalPedido)}</span>
          </div>
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-bold mt-4"
            onClick={handleCheckout}
          >
            Comprar
          </button>
        </div>

        {checkoutStatus && (
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 mt-8">
            <h2 className="text-xl font-semibold mb-4">Confirmação de Compra</h2>
            <p>Quase lá! Pague via Pix para concluir sua compra</p>
            <p>Valor: {formatarPreco(totalPedido)} | Vencimento: 60 minutos</p>
            <p>Recomendação: Copie e cole os dados abaixo para efetuar o pagamento via Pix. Acesse seu banco e utilize a chave Pix ou leia o QR Code abaixo.</p>
            <p>Número do Pedido: #{numeroPedido}</p>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-bold mt-4"
              onClick={() => copiarTexto(`Valor: ${formatarPreco(totalPedido)} | Vencimento: 60 minutos`)}
            >
              Copiar Dados Pix
            </button>

            <div className="mt-4">
              <img src={qrcode} alt="QR Code Pix" className="w-32 h-32" />
            </div>
          </div>
        )}

      </div>

      <Rodape />
    </div>
  );
}

export default PaginaCarrinho;
