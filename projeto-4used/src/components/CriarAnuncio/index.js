import React, { Component } from 'react';
import styled from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Logo from '../../imagens/FOTO.png'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Footer from '../Footer/index'
import axios from "axios";

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/fourUsed/products"

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
    padding: 20px;
    justify-items: center;
    grid-gap: 10px;
`

const StyledLogo = styled.img`
    width: 200px;
`

const TituloAnuncie = styled.h2`
    text-align: center;
    background-color: #FFFCEF;
    margin: 0;
    padding: 20px 0;
`

const ContainerFooter = styled.div`    
    background-color: #FFFCEF;
    padding: 200px 0 20px 0;
`

class CriarAnuncio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameProduct: "",
            descriptionProduct: "",
            priceProduct: 0,
            paymentMethodProduct: "",
            categoryProduct:"",
            photosProduct:[],
            installmentsProduct:0,
        }
    }

    visitarListaDeProduto = () => {
        this.props.visitarListaDeProduto()
    }

    createNewProduct = () => {
        const url = `${baseURL}`;
    
        const data = {
            name: this.state.nameProduct,
            description: this.state.descriptionProduct,
            price: this.state.priceProduct,
            paymentMethod: this.state.paymentMethodProduct,
            category: this.state.categoryProduct,
            photos: this.state.photosProduct,
            installments: this.state.installmentsProduct,            
        };

        const request = axios.post(url, data);
        request
          .then(response => {
            alert("criada com sucesso") ;
            this.props.produtos()

          }).catch(error => {
            alert("Não foi criada")
          })
      
          this.setState({ 
          nameProduct: "",
          descriptionProduct: "",
          priceProduct: 0,
          paymentMethodProduct: "",
          categoryProduct:"",
          photosProduct:[],
          installmentsProduct:0,})

    }

    onChangeName = event => {
        this.setState({nameProduct: event.target.value});
      };
    onChangeDescription = event => {
        this.setState({descriptionProduct: event.target.value});
      };
    onChangePrice = event => {
        this.setState({priceProduct: event.target.value});
      };
    onChangeMethod = event => {
        this.setState({paymentMethodProduct: event.target.value});
      };
    onChangeCategory = event => {
        this.setState({categoryProduct: event.target.value});
      };
    onChangePhoto = event => {
        this.setState({photosProduct: [event.target.value]});
      };
    onChangeInstallments = event => {
        this.setState({installmentsProduct: event.target.value});
      }; 

    render() {
        return (
            <MuiThemeProvider theme={usedFourTheme}>
                <BotaoContainer>
                    <Botao 
                        color="primary" 
                        variant="contained"
                        onClick={this.visitarListaDeProduto}
                    >
                        Ver Ofertas
                    </Botao>
                </BotaoContainer>
                <HeaderContainer>
                    <LogoContainer>
                        <StyledLogo src={Logo} alt="logo da empresa"/>
                    </LogoContainer>
                </HeaderContainer>
                <TituloAnuncie>Anuncie Aqui:</TituloAnuncie>
                <ContainerDeInputs>
                    <SelectInput native value={this.state.categoryProduct} onChange={this.onChangeCategory} >
                        <option>Selecione uma Categoria</option>
                        <option value="eletronico">Eletronicos</option>
                        <option value="roupas">Roupas</option>
                        <option value="cosmesticos"> Cosmésticos</option>
                        <option value="calcados">Calçados</option>
                        <option value="moveis">Móveis</option>
                        <option value="decoracao">Decoração</option>
                    </SelectInput>
                    <Input id="outlined-basic" variant="outlined" placeholder="Nome" value={this.state.nameProduct} onChange={this.onChangeName}></Input>
                    <Input id="standard-multiline-flexible" variant="outlined" placeholder="Descrição" multiline rowsMax="4" value={this.state.descriptionProduct} onChange={this.onChangeDescription}></Input>
                    <Input id="outlined-basic" variant="outlined" placeholder="Url da Foto" value={this.state.photosProduct} onChange={this.onChangePhoto}></Input>
                    <Input id="outlined-basic" variant="outlined" placeholder="Preço" type="number" value={this.state.priceProduct} onChange={this.onChangePrice}></Input>

                    <SelectInput native value={this.state.paymentMethodProduct} onChange={this.onChangeMethod}>
                        <option> Método de Pagamento</option>
                        <option value="boleto">Boleto</option>
                        <option value="cartao">Cartão de Crédito</option>
                    </SelectInput>

                    <SelectInput native defaultValue="selecione" value={this.state.installmentsProduct} onChange={this.onChangeInstallments}>
                        <option value="selecione">Parcelas</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </SelectInput>
          
                    <Botao color="primary" variant="contained" onClick={this.createNewProduct}>Salvar Produto</Botao>                    
                </ContainerDeInputs> 

                <ContainerFooter>
                    <Footer />
                </ContainerFooter>
            </MuiThemeProvider>
        )
    }
}

export default CriarAnuncio;