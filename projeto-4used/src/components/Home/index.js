import React, { Component } from 'react';
import Brand from '../../imagens/FOTO.png'
import Button from '@material-ui/core/Button'
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core';

const Background = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   background: #FFFCEF;
   height: 100vh;
   text-align: center;
`

const Logo = styled.img`
   margin-top: 80px;
`

const Slogan = styled.h3`
   padding-bottom: 50px;
`

const StyledButton = styled(Button)`
   width: 200px;
`

const theme = createMuiTheme({
   
})

class Home extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (         
         <Background>
            <Logo src={Brand}/>
            <Slogan>Seu site de compras e vendas preferido!</Slogan>
            <div>
               <StyledButton variant="contained" color="primary">Anunciar</StyledButton>               
               <StyledButton variant="contained" color="primary">Ver Ofertas</StyledButton>
            </div>            
         </Background>
      )
   }
}

export default Home;