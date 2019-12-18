import React from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
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
  },
  {
    id: 3,
    categoria: "Roupas",
    nome: "Vestido FiveBlu Curto Estampado Azul",
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
    nome: "Camiseta masculina esportiva Ace",
    descricao: "Gola careca manga curta azul marinho",
    fotos: "https://cea.vteximg.com.br/arquivos/ids/10604851-1000-1200/Camiseta-Masculina-Esportiva-Ace-Gola-Careca-Manga-Curta-Azul-Marinho-8226483-Azul_Marinho_1.jpg?v=637055592205870000" ,
    preco: 40.00,
    metodoDePagamento: "Dinheiro",
    parcelas: 0, 
    quantidadeItem: 4, 
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
    quantidadeItem: 8, 
  }  
] 

const ButtonDiv = styled.div`
    text-align: right
`

let subTotal = 0;

for (let item of produtos) {
    subTotal += item.quantidadeItem*item.preco
}


export default class Carrinho extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render () {
        return (
            <div>               
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem>
                        <h2>Carrinho</h2>
                    </ListItem>
                    {produtos.map( produto =>
                        <ListItem>                                                                  
                            <Button variant="text" size="small">
                                <ListItemIcon>
                                    <AddIcon fontSize="small"/>
                                </ListItemIcon>    
                            </Button>                        
                            <Button variant="text" size="small">
                                <ListItemIcon fontSize="small">
                                    <RemoveIcon fontSize="small"/>
                                </ListItemIcon>  
                            </Button > 
                            <ListItemText primary={produto.nome} secondary={`Quantidade: ${produto.quantidadeItem}`} />                            
                            <ListItemIcon>
                                <RemoveShoppingCartIcon />
                            </ListItemIcon>
                        </ListItem>     
                    )}    
                    <Divider/>
                    <ListItem>
                        <ListItemText primary={`Subtotal:  R$ ${subTotal},00`} />
                    </ListItem>                    
                </List>
                <ButtonDiv>
                    <Fab color="inherit" >
                        <ShoppingCartIcon />
                    </Fab> 
                </ButtonDiv>         
            </div>
        )
    }

}