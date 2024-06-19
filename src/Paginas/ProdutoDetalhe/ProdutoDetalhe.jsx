import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'; // Importe os Hooks do react-router-dom
import NavBar from '../../Componentes/Menu/NavBar'; // Importe o componente NavBar
import Rodape from '../../Componentes/Rodape/Rodape'; // Importe o componente Rodape
import axios from 'axios'; // Importe o Axios para fazer requisições HTTP

// Importe as imagens aqui, se necessário
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

// Mapeamento de imagens por nome do produto
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

function ProdutoDetalhes({ adicionarAoCarrinho }) {
  const { id } = useParams();
  const history = useHistory();
  const [produto, setProduto] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // Pega o userId do localStorage

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/product/${id}`);
        console.log('Produto obtido:', response.data);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    fetchProduto();
  }, [id]);

  const handleQuantidadeChange = (event) => {
    const novaQuantidade = parseInt(event.target.value, 10);
    setQuantidade(novaQuantidade);
  };

  const handleAdicionarAoCarrinho = async () => {
    console.log('Clicou em Adicionar ao Carrinho');
    if (!userId) {
      console.error('Usuário não autenticado. Não é possível adicionar ao carrinho.');
      return;
    }

    if (!produto) {
      console.error('Produto não carregado. Não é possível adicionar ao carrinho.');
      return;
    }

    console.log('Produto antes de adicionar ao carrinho:', produto); // Log do produto antes de adicionar

    const item = {
      userId: userId,
      productId: id,
      quantity: quantidade
    };

    console.log('Enviando item para o carrinho:', item); // Log do item que será enviado

    try {
      const response = await axios.post('http://localhost:8080/api/cart/add', item, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Resposta do servidor ao adicionar ao carrinho:', response.data);

      // A função adicionarAoCarrinho deve ser chamada com o item recebido do backend
      adicionarAoCarrinho(response.data); // Supondo que a resposta do backend contenha o item atualizado no carrinho

      history.push('/carrinho');
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      console.error('Detalhes do erro:', error.response.data); // Log dos detalhes do erro
    }
  };

  if (!produto) {
    return <div>Carregando...</div>;
  }

  // Obtém o caminho da imagem com base no nome do produto
  const imgSrc = imagensProdutos[produto.name]; // Supondo que "produto.nome" corresponda ao nome do produto no objeto de imagens

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <NavBar produtos={[]} />
      <div className="container mx-auto flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg flex">
          <div className="w-1/3">
            <img src={imgSrc} alt={produto.name} className="h-full w-full object-contain" />
          </div>
          <div className="w-2/3 pl-6">
            <h1 className="text-4xl font-bold mb-4">{produto.name}</h1>
            <p className="text-sm text-gray-400 mb-4">Descrição: {produto.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-lg mr-2">Quantidade:</span>
              <input
                type="number"
                className="bg-gray-700 text-white py-1 px-3 rounded-lg mr-2 w-20"
                value={quantidade}
                onChange={handleQuantidadeChange}
                min="1"
              />
              <p className="text-xl">Preço Unitário: R$ {produto.price}</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-lg mr-2">Preço Total:</span>
              <p className="text-xl">R$ {produto.price * quantidade}</p>
            </div>
            <div className="flex">
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-bold text-lg mr-4"
                onClick={handleAdicionarAoCarrinho}
              >
                Adicionar ao Carrinho
              </button>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">Formas de pagamento</p>
              <div className="flex mt-2">
                <img src={visa} alt="Visa" className="h-8 mr-2" />
                <img src={paypal} alt="PayPal" className="h-8" />
              </div>
              <p className="text-sm text-gray-400 mt-2">Entrega imediata (Sujeito à forma de pagamento.)</p>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default ProdutoDetalhes;
