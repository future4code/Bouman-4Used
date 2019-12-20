import React from 'react';
import styled from 'styled-components';
import ImgLogo from '../../imagens/marca-icone.png'
import TextLogo from '../../imagens/nome-marca.png'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Footer from '../Footer';
import Carrinho from '../Carrinho';
import Produto from '../Produto/index'
import Filters from '../Filters';
import DescricaoProduto from '../DescricaoProduto/index'
import axios from 'axios'



//STYLE DO HEADER DA PAGINA PRODUTOS //
const PageContainer = styled.div`
    background: #FFFCEF;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const RightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 120px;
    margin: 20px 0;
`

const usedFourTheme = createMuiTheme({
    palette: {
        primary: { main: "#F04E3E" },
        secondary: { main: "#43ADA5" }
    }
})
//FIM DO STYLE DO HEADER DA PAGINA PRODUTOS //

// STYLE DA BARRA DE MENU //
const StyledNav = styled.nav`
    background: #FFFCEF;
`

const StyledMenuBar = styled.div`
    background: #007d76;
    margin: 20px;
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
`

const StyledButtonNav = styled.button`
    background: none;
    color: white;
    outline: none;
    height: 60px;
    font-weight: bold;
    border: none;
    &.menu:hover {
        background: #005b56;
        width: 100px;
    }
`
// FIM DO STYLE DA BARRA DE MENU //

//INICIO DO CONTAINER DO PRODUTO//
const ProdutoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  gap: 10px;
  margin-top: 13px;
`
// FIM DO STYLE DO CONTAINER //

// STYLE DO CONTAINER QUE TEM O FILTROS-GRID-CARRINHO //
const ContainerBodyProduto = styled.div`
    display: flex;
    justify-content: space-between;
`
// FIM DO STYLE DO CONTAINER QUE TEM O FILTROS-GRID-CARRINHO //

//STYLE DO CONTAINER A ESQUERDA 

const ContainerLeft = styled.div`
display: flex; 
flex-direction: column;
`

class ListaDeProduto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            produtoDestaque: "" 
        }
    }


    visitarCriarAnuncio = () => {
        this.props.visitarCriarAnuncio()
    }

    destacarProduto = (id) =>{
        let produtoDesejado
        for(let produto of this.props.produtos){
            if(produto.id === id  ){
                produtoDesejado = produto
            }
        }
        this.setState({produtoDestaque: produtoDesejado })
    }

    adicionarAoCarrinho = () => {
        this.props.adicionarAoCarrinho(this.state.produtoDestaque.id)
    }

    deletarProduto = (id) => {
        // console.log(id)
        this.props.deletarProduto(id)
    }


    render() {

        return (
            <MuiThemeProvider theme={usedFourTheme}>
                <PageContainer>
                    <HeaderContainer>
                        <img src={ImgLogo} alt="logo da empresa" />
                        <img src={TextLogo} alt="Nome da empresa"/>
                        <RightContainer>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.visitarCriarAnuncio}
                            >
                                Anuncie
                            </Button>
                            <TextField id="outlined-basic" variant="outlined" placeholder="Pesquisar" />
                        </RightContainer>
                    </HeaderContainer>
                    <StyledNav>
                        <StyledMenuBar>
                            <StyledButtonNav className="menu">Eletrônicos</StyledButtonNav>
                            <StyledButtonNav className="menu">Roupas</StyledButtonNav>
                            <StyledButtonNav className="menu">Cosmésticos</StyledButtonNav>
                            <StyledButtonNav className="menu">Calçados</StyledButtonNav>
                            <StyledButtonNav className="menu">Móveis</StyledButtonNav>
                            <StyledButtonNav className="menu">Decoração</StyledButtonNav>
                        </StyledMenuBar>
                    </StyledNav>
                    <ContainerBodyProduto>
                        <ContainerLeft>
                            <Filters produtos={this.props.produtos}/>
                            {this.state.produtoDestaque ?<DescricaoProduto produtoDestaque={this.state.produtoDestaque} adicionarAoCarrinho={this.adicionarAoCarrinho}/> : "Nenhum Produto Selecionado"}
                        </ContainerLeft>

                        <ProdutoGrid>
                            {this.props.produtos.map((cadaProduto) => {
                                return (
                                    <Produto fotos={cadaProduto.photos} nome={cadaProduto.name} preco={cadaProduto.price} destacarProduto={this.destacarProduto} id={cadaProduto.id} />
                                )
                            })}
                        </ProdutoGrid>
                        <Carrinho produtos={this.props.produtos} deletarProduto = {this.deletarProduto}/>
                    </ContainerBodyProduto>

                    <Footer />
                </PageContainer>
            </MuiThemeProvider>
        )
    }
}

export default ListaDeProduto