import React from 'react';
import styled from 'styled-components';

const ProdutoContainer = styled.div`
  width: 40vw;
  height: 40vh;
  border: 1px dotted #FCCA64;
  width : 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  margin: 5px;
`

const ProdutoImage = styled.img`
  width: 100%;
  height: 130px;
`

const PNome = styled.p`
  align-self: center;
  margin-top: 10px;
`

const PValor = styled.p`
  margin: 15px 0px 10px 5px;
`

const ProdutoFooterContainer = styled.div`
  width: 100%;
  align-self: flex-end;
  height: 100%;
`

const ButtonAdicionarProduto = styled.button`
  align-self: flex-end;
  width: 100%;
  height: 75px;
  background-color: #43434F;
  color: white;
  outline: 0;
  border: 0;
  :hover {
    background-color: #FCCA64;
    color: black;
  }
`

class Produto extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <ProdutoContainer>
        <ProdutoImage src={this.props.fotos} />
        <PNome>{this.props.nome}</PNome>
        <PValor>R$ {this.props.preco},00</PValor>
        <ProdutoFooterContainer>
          <ButtonAdicionarProduto>Adicionar Item</ButtonAdicionarProduto>
        </ProdutoFooterContainer>
      </ProdutoContainer>
    )
  }
}

export default Produto