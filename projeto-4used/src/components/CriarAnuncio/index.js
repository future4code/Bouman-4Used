import React, { Component } from 'react';
import styled from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Logo from '../../imagens/FOTO.png'
import Button from '@material-ui/core/Button'

const usedFourTheme = createMuiTheme({
    palette: {
        primary: { main: "#F04E3E" },
        secondary: { main: "#43ADA5" }
    }
})

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #FFFCEF;
`

const BotaoContainer = styled.div`
    background-color: #FFFCEF;
    display: flex;
    justify-content: flex-end;
    padding-right: 70px;
    padding-top: 70px;
`

const LogoContainer = styled.div`
    margin: 0 auto;
`

const Botao = styled(Button)`
    background-color: #FFFCEF;

`

class CriarAnuncio extends Component {
    constructor(props) {
       super(props)
    }   

    render() {
        return (
            <MuiThemeProvider theme={usedFourTheme}>
                <BotaoContainer>
                    <Botao color="primary" variant="contained">Ver Ofertas</Botao>
                </BotaoContainer>
                <HeaderContainer>
                    <LogoContainer>
                        <img src={Logo}/>
                    </LogoContainer>
                </HeaderContainer>
            </MuiThemeProvider>
        )
     }
  }

export default CriarAnuncio;