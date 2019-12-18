import React, { Component } from 'react';
import Brand from '../../imagens/FOTO.png'
import styled from 'styled-components';

const Background = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #FFFCEF;
   height: 100vh;
   text-align: center;
`

const Logo = styled.img`
   margin-top: 30px;
   width: 250px;
   height: auto;
`

const Slogan = styled.h3`
   margin: 50px 0 50px 0;
   font-style: italic;
`

const StyledDiv = styled.div`
   display: flex;
   justify-content: space-between;
   width: 300px;
`

const StyledButtonAnuncio = styled.button`
   background: #43434F;
   color: white;
   border: 1px solid black;
   border-radius: 10px;
   padding: 0 25px;
   font-weight: bold;
   margin: 50px 0;
`

const StyledButtonOfertas = styled.button`
   background: #43434F;
   color: white;
   border: 1px solid black;
   border-radius: 10px;
   padding: 20px;
   font-weight: bold;
   margin: 50px 0;
`

const StyledText = styled.p`
   font-weight: bold;
   position: fixed;
   bottom: 0;
`


class Home extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <Background>
            <Logo src={Brand} />
            <Slogan>Seu site de compras e vendas preferido!</Slogan>
            <StyledDiv>
               <StyledButtonAnuncio>Anunciar</StyledButtonAnuncio>
               <StyledButtonOfertas>Ver Ofertas</StyledButtonOfertas>
            </StyledDiv>
            <StyledText>Direitos Autorais reservados</StyledText>
         </Background>
      )
   }
}

export default Home;