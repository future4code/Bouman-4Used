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