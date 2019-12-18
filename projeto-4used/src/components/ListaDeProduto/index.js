import React from 'react';
import styled from 'styled-components';
import ImgLogo from '../../imagens/logo.png'

const HeaderContainer = styled.div`
    display: flex;

`

class ListaDeProduto extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <img></img>
                <img></img>
                <div>
                    <button>Anuncie</button>
                    <input placeholder="Pesquisar"></input>
                </div>
            </div>
        )
    }
}

export default ListaDeProduto