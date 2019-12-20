import React from 'react';
import Home from './components/Home';
import ListaDeProduto from './components/ListaDeProduto/index';
import CriarAnuncio from './components/CriarAnuncio';
import axios from 'axios';

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/fourUsed/products"



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
