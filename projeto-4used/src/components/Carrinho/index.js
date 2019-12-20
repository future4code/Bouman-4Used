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



const ButtonDiv = styled.div`
    text-align: right;
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