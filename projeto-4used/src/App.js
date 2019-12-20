import React from 'react';
import Home from './components/Home';
import ListaDeProduto from './components/ListaDeProduto/index';
import CriarAnuncio from './components/CriarAnuncio';
import axios from 'axios';

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/fourUsed/products"

const produtos = [
  {
    id: 1,
    categoria: "Eletrônicos",
    nome: "Samsung Galaxy A50",
    descricao: "Smartphone Samsung Galaxy A50 128GB Azul 4G - 4GB RAM Tela 6,4” Câm. Tripla + Câm. Selfie 25MP",
    fotos: "https://images.samsung.com/is/image/samsung/br-galaxy-a50-a505-sm-a505gzwszto-frontwhite-172973431?$PD_GALLERY_L_JPG$",
    preco: 10.00,
    metodoDePagamento: "Cartão de Crédito",
    parcelas: 10,
    quantidadeItem: 1,
  },
  {
    id: 2,
    categoria: "Eletrônicos",
    nome: "Smartphone LG K9 TV",
    descricao: "Smartphone LG K9 TV 16GB Preto 4G Quad Core - 2GB RAM Tela 5” Câm. 8MP + Câm. Selfie 5MP",
    fotos: "https://a-static.mlcdn.com.br/640x480/smartphone-lg-k9-tv-16gb-preto-4g-quad-core-2gb-ram-tela-5-cam-8mp-cam-selfie-5mp/magazineluiza/155538800/e539a2a71f6ab109bccfd3a7350c0ab8.jpg",
    preco: 20.00,
    metodoDePagamento: "Cartão de Crédito",
    parcelas: 8,
    quantidadeItem: 1,
  },
  {
    id: 3,
    categoria: "Roupas",
    nome: "Vestido FiveBlu",
    descricao: "Curto Estampado Azul",
    fotos: "https://static.dafiti.com.br/p/FiveBlu-Vestido-FiveBlu-Curto-Estampado-Azul-3637-8956414-1-zoom.jpg",
    preco: 30.00,
    metodoDePagamento: "Dinheiro",
    parcelas: 0,
    quantidadeItem: 1,
  },
  {
    id: 4,
    categoria: "Roupas",
    nome: "Camiseta masculina",
    descricao: "Gola careca manga curta azul marinho",
    fotos: "https://cea.vteximg.com.br/arquivos/ids/10604851-1000-1200/Camiseta-Masculina-Esportiva-Ace-Gola-Careca-Manga-Curta-Azul-Marinho-8226483-Azul_Marinho_1.jpg?v=637055592205870000",
    preco: 40.00,
    metodoDePagamento: "Dinheiro",
    parcelas: 0,
    quantidadeItem: 1,
  },
  {
    id: 5,
    categoria: "Cosméticos",
    nome: "Base Fluída M·A·C ",
    descricao: "Base Fluída Studio Fix Fluid com FPS 15 MAC Cosmetics possuí fórmula com controle da oleosidade que oferece um acabamento natural mate e cobertura média a total.",
    fotos: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/325665-1000-1000/1844.jpg?v=636867207584630000",
    preco: 50.00,
    metodoDePagamento: "Cartão de Crédito",
    parcelas: 1,
    quantidadeItem: 1,
  },
  {
    id: 6,
    categoria: "Cosméticos",
    nome: "Gel Hidratante Neutrogena",
    descricao: "Gel Hidratante Facial Hydro Boost Water Neutrogena FPS25 - 55g",
    fotos: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327390-1000-1000/7891010887742_2.jpg?v=636881718003770000",
    preco: 60.00,
    metodoDePagamento: "Cartão de Crédito",
    parcelas: 1,
    quantidadeItem: 1,
  },
  {
    id: 7,
    categoria: "Calçados",
    nome: "Tênis Olympikus Attract",
    descricao: "Se a caminhada é o seu exercício, Olympikus Attract é o seu tênis.",
    fotos: "https://static.netshoes.com.br/produtos/tenis-olympikus-attract/20/D22-1787-120/D22-1787-120_zoom1.jpg",
    preco: 70.00,
    metodoDePagamento: "Cartão de Crédito",
    parcelas: 4,
    quantidadeItem: 1,
  },
  {
    id: 8,
    categoria: "Calçados",
    nome: "Sapatilha Sua Cia Feminina",
    descricao: "Confeccionada em material sintético de alta qualidade, possui enfeite na parte frontal, forro têxtil e palmilha macia, solado em Borracha.",
    fotos: "https://static.netshoes.com.br/produtos/sapatilha-sua-cia-feminina/04/L10-0191-004/L10-0191-004_zoom1.jpg",
    preco: 80.00,
    metodoDePagamento: "Cartão de Crédito",
    parcelas: 4,
    quantidadeItem: 1,
  },
  {
    id: 9,
    categoria: "Móveis",
    nome: "Sofá 3 Lugares",
    descricao: "O Sofá New Passion vai conquistar o seu coração. Dono de um design moderno de formas arredondadas, a peça, que é confeccionada com corino, conta com detalhes em capitonê e desenho de linhas aparentes vão agregar muito mais charme e sofisticação para a sua decoração.",
    fotos: "https://staticmobly.akamaized.net/p/LinoForte-SofC3A1-3-Lugares-New-Passion-Couro-SintC3A9tico-Preto-3734-426484-1-zoom.jpg",
    preco: 90.00,
    metodoDePagamento: "Cartão de Crédito",
    parcelas: 2,
    quantidadeItem: 1,
  },
  {
    id: 10,
    categoria: "Móveis",
    nome: "Cama Box Queen",
    descricao: "Ele combina a base estruturada em madeira maciça - o que reforça o uso diário - com colchão de molejo superlastic e uma camada extra de conforto em espuma D26.",
    fotos: "https://staticmobly.akamaized.net/p/Anjos-ColchC3B5es-Cama-Box-Queen-com-ColchC3A3o-Barcelona-D26-Cinza-1149-305874-1-zoom.jpg",
    preco: 100.00,
    metodoDePagamento: "Cartão de Crédito",
    parcelas: 5,
    quantidadeItem: 1,
  },
  {
    id: 11,
    categoria: "Decoração",
    nome: "Abajur Bola Luna",
    descricao: "Não há nada como poder relaxar em um ambiente à meia-luz, seja lendo um livro, vendo um filme ou conversando com alguém querido.",
    fotos: "https://staticmobly.akamaized.net/p/CerC3A2mica-Ana-Maria-Abajur-Bola-Luna-com-AlumC3ADnio-Branco-Perola-Brilho-9436-995361-1-zoom.jpg",
    preco: 110.00,
    metodoDePagamento: "Dinheiro",
    parcelas: 0,
    quantidadeItem: 1,
  },
  {
    id: 12,
    categoria: "Decoração",
    nome: "Papel de Parede Adesivo",
    descricao: "Não há nada como poder relaxar em um ambiente à meia-luz, seja lendo um livro, vendo um filme ou conversando com alguém querido.",
    fotos: "https://staticmobly.akamaized.net/p/EuColo-Papel-de-Parede-Adesivo-Poas-TreliC3A7a-de-CoraC3A7C3B5es-290-x-50-cm-6407-122485-1-zoom.jpg",
    preco: 120.00,
    metodoDePagamento: "Dinheiro",
    parcelas: 0,
    quantidadeItem: 1,
  }
]

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
      mostrandoHome: true,
      mostrandoListaDeProduto: false,
      mostrandoCriarAnuncio: false,
      produtos: [],
    }
  }

  visitarListaDeProduto = () => {
    this.setState({
      mostrandoHome: false,
      mostrandoListaDeProduto: true,
      mostrandoCriarAnuncio: false
    })
  }

  visitarCriarAnuncio = () => {
    this.setState({
      mostrandoHome: false,
      mostrandoListaDeProduto: false,
      mostrandoCriarAnuncio: true
    })
  }

  fetchProduct = () => {
    const request = axios.get(baseURL);
    request
      .then(response => {
        console.log(response.data.products) ;
        this.setState({produtos: response.data.products})
      }).catch(error => {
        alert(error.message + "Não retornou")
      })
    }

  componentDidMount() {
    this.fetchProduct();
  }   



  render(){
    return (
      <div className="App">
        { this.state.mostrandoHome && (
          <Home 
            visitarListaDeProduto={this.visitarListaDeProduto}
            visitarCriarAnuncio={this.visitarCriarAnuncio}
          />
        )}
        { this.state.mostrandoListaDeProduto && (
          <ListaDeProduto 
            listaDeProdutos={produtos} 
            visitarCriarAnuncio={this.visitarCriarAnuncio}
            produtos = {this.state.produtos}

          /> 
        )}
        { this.state.mostrandoCriarAnuncio && (
          <CriarAnuncio 
            visitarListaDeProduto={this.visitarListaDeProduto}
            produtos = {this.fetchProduct}
          /> 
        )}
          
      </div>
    );
  }
}

export default App;
