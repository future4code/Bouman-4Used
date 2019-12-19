import React, { Component } from 'react';
import styled from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Logo from '../../imagens/FOTO.png'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Footer from '../Footer/index'

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

const Input = styled(TextField)`
    
    width: 500px;
`

const SelectInput = styled(Select)`
    width: 500px;
`

const ContainerDeInputs = styled.div`
    background-color: #FFFCEF;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    justify-items: center;
    grid-gap: 10px;
`

const TituloAnuncie = styled.h2`
    text-align: center;
    background-color: #FFFCEF;
    margin: 0;
    padding: 20px ;
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
                        <img src={Logo} />
                    </LogoContainer>
                </HeaderContainer>
                <TituloAnuncie>Anuncie Aqui:</TituloAnuncie>
                <ContainerDeInputs>
                    <SelectInput native defaultValue="selecione">
                        <option value="selecione">Selecione uma Categoria</option>
                        <option value="eletronico">Eletronicos</option>
                        <option value="roupas">Roupas</option>
                        <option value="cosmesticos"> Cosmésticos</option>
                        <option value="calcados">Calçados</option>
                        <option value="moveis">Móveis</option>
                        <option value="decoracao">Decoração</option>
                    </SelectInput>
                    <Input id="outlined-basic" variant="outlined" placeholder="Nome"></Input>
                    <Input id="standard-multiline-flexible" variant="outlined" placeholder="Descrição" multiline rowsMax="4"></Input>
                    <Input id="outlined-basic" variant="outlined" placeholder="Url da Foto"></Input>
                    <Input id="outlined-basic" variant="outlined" placeholder="Preço" type="number"></Input>

                    <SelectInput native defaultValue="selecione">
                        <option value="selecione">Método de Pagamento</option>
                        <option value="boleto">Boleto</option>
                        <option value="cartao">Cartão de Crédito</option>

                    </SelectInput>

                    <SelectInput native defaultValue="selecione">
                        <option value="selecione">Parcelas</option>
                        <option value="1">1x</option>
                        <option value="2">2x</option>
                        <option value="3">3x</option>
                        <option value="4">4x</option>
                        <option value="5">5x</option>
                        <option value="6">6x</option>
                        <option value="7">7x</option>
                        <option value="8">8x</option>
                        <option value="9">9x</option>
                        <option value="10">10x</option>
                        <option value="11">11x</option>
                        <option value="12">12x</option>
                    </SelectInput>
                    <Botao color="primary" variant="contained">Salvar Produto</Botao>
                </ContainerDeInputs>
                <Footer />
            </MuiThemeProvider>
        )
    }
}

export default CriarAnuncio;