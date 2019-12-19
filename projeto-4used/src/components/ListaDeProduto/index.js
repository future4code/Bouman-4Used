import React from 'react';
import styled from 'styled-components';
import ImgLogo from '../../imagens/marca-icone.png'
import TextLogo from '../../imagens/nome-marca.png'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { StepLabel } from '@material-ui/core';
import Footer from '../Footer';
import Carrinho from '../Carrinho';
import Produto from '../Produto/index'
import Filters from '../Filters';


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

class ListaDeProduto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        
        return (
            <MuiThemeProvider theme={usedFourTheme}>
                <PageContainer>
                    <HeaderContainer>
                        <img src={ImgLogo}></img>
                        <img src={TextLogo}></img>
                        <RightContainer>
                            <Button color="primary" variant="contained">Anuncie</Button>
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
                        <Filters/>
                        <ProdutoGrid>
                            {this.props.listaDeProdutos.map((cadaProduto) =>{
                                return(
                                    <Produto fotos={cadaProduto.fotos} nome={cadaProduto.nome} preco={cadaProduto.preco}/>
                                )
                            })}
                        </ProdutoGrid>
                        <Carrinho/>
                    </ContainerBodyProduto>                  

                    <Footer />
                </PageContainer>
            </MuiThemeProvider>
        )
    }
}

export default ListaDeProduto