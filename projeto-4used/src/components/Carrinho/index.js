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

export default class Carrinho extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    calcularTotal = () => {
        let novoSubTotal = 0
        for (let item of this.props.produtos) {
            novoSubTotal += item.quantidade * item.price
        }
        return novoSubTotal
    }

    deletarProduto = (e) => {
        this.props.deletarProduto(e.target.id)
    }


    render() {
        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem>
                        <h2>Carrinho</h2>
                    </ListItem>
                    {this.props.produtos.map(produto => {
                        if (produto.quantidade > 0) {
                            return (
                                <ListItem>
                                {/* <Button variant="text" size="small">
                                    <ListItemIcon>
                                        <AddIcon fontSize="small" />
                                    </ListItemIcon>
                                </Button>
                                <Button variant="text" size="small" >
                                    <ListItemIcon fontSize="small" >
                                        <RemoveIcon fontSize="small" />
                                    </ListItemIcon>
                                </Button > */}
                                <ListItemText primary={produto.name} secondary={`Quantidade: ${produto.quantidade}`} />
                                <Button onClick={this.deletarProduto} id={produto.id}>
                                <ListItemIcon id={produto.id}>
                                    <RemoveShoppingCartIcon id={produto.id}/>
                                </ListItemIcon>
                                </Button>
                            </ListItem>
                            )
                            
                        } else {return}

                    }

                    )}
                    <Divider />
                    <ListItem>
                        <ListItemText primary={`Subtotal:  R$ ${this.calcularTotal()}`} />
                    </ListItem>
                </List>
                {/* <ButtonDiv>
                    <Fab color="inherit" >
                        <ShoppingCartIcon />
                    </Fab>
                </ButtonDiv> */}
            </div>
        )
    }

}