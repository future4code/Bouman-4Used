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
    text-align:center;
`

const StyledListItem = styled(ListItem)`
    display:flex;
    flex-direction:column;
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
                    <StyledListItem>
                        <img src={this.props.produtoDestaque.photos} width="200" />                                                          
                        <h3>{this.props.produtoDestaque.name}</h3>                        
                    </StyledListItem>
                    <Divider/>
                    <ListItem>                                                                  
                        <ListItemIcon>
                            <DescriptionIcon/>
                        </ListItemIcon>    
                        <ListItemText primary={this.props.produtoDestaque.description} />                                                    
                    </ListItem>
                    <Divider/> 
                    <ListItem>                                                                  
                        <ListItemIcon>
                            <CategoryIcon/>
                        </ListItemIcon>    
                        <ListItemText primary={this.props.produtoDestaque.category} />                                                    
                    </ListItem>
                    <Divider/> 
                    <ListItem>                                                                  
                        <ListItemIcon>
                            <LocalOfferIcon/>
                        </ListItemIcon>    
                        <ListItemText primary={`R$ ${this.props.produtoDestaque.price} `} />                                                    
                    </ListItem> 
                    <Divider/>
                    <ListItem>                                                                  
                        <ListItemIcon>
                            <PaymentIcon />
                        </ListItemIcon>    
                        <ListItemText 
                            primary={this.props.produtoDestaque.paymentMethod} 
                            secondary={`Em ${this.props.produtoDestaque.installments}  parcela(s)`} 
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