import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import CategoryIcon from '@material-ui/icons/Category';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PaymentIcon from '@material-ui/icons/Payment';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'

const produtos = [
  {
    id: 1,
    categoria: "Eletrônicos",
    nome: "Smartphone Samsung Galaxy A50",
    descricao: "Smartphone Samsung Galaxy A50 128GB Azul 4G - 4GB RAM Tela 6,4” Câm. Tripla + Câm. Selfie 25MP",
    fotos: "https://images.colombo.com.br/produtos/909188/909188_SamsungA50Preto0_z.jpg",
    preco: 10.00,
    metodoDePagamento: "Cartão de Crédito",
    parcelas: 10, 
    quantidadeItem: 5, 
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
    quantidadeItem: 2, 
  }
] 

const Div = styled.div`
    text-align:center
`

export default class DescricaoProduto extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render () {
        return (
            <Div>               
                <List component="nav">
                    <ListItem>
                        <img src={produtos[1].fotos} width="200" />                                                          
                        <h2>{produtos[1].nome}</h2>                        
                    </ListItem>
                    <Divider/>
                    <ListItem>                                                                  
                        <ListItemIcon>
                            <DescriptionIcon/>
                        </ListItemIcon>    
                        <ListItemText primary={produtos[1].descricao} />                                                    
                    </ListItem>
                    <Divider/> 
                    <ListItem>                                                                  
                        <ListItemIcon>
                            <CategoryIcon/>
                        </ListItemIcon>    
                        <ListItemText primary={produtos[1].categoria} />                                                    
                    </ListItem>
                    <Divider/> 
                    <ListItem>                                                                  
                        <ListItemIcon>
                            <LocalOfferIcon/>
                        </ListItemIcon>    
                        <ListItemText primary={`R$ ${produtos[1].preco},00`} />                                                    
                    </ListItem> 
                    <Divider/>
                    <ListItem>                                                                  
                        <ListItemIcon>
                            <PaymentIcon />
                        </ListItemIcon>    
                        <ListItemText 
                            primary={produtos[1].metodoDePagamento} 
                            secondary={`Em ${produtos[1].parcelas} parcela(s)`} 
                        />                                                    
                    </ListItem> 
                    <Divider/> 
                </List> 
                <Button variant="contained"> 
                    <AddShoppingCartIcon />
                </Button>                  
            </Div>
        )
    }

}