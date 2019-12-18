import React, { Component } from 'react';
import styled from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Facebook from '../../imagens/facebookIcon.svg'
import Instagram from '../../imagens/instagramIcon.svg'
import Twitter from '../../imagens/twitterIcon.svg'


const FooterContainer = styled.div`
   display: flex;
   align-items: flex-end;
   width: 92vw;   
   padding: 2.5%;
   background-color: #43434F;
   border-radius: 15px;
   margin: 0 20px;
`
const FooterSubcontainer = styled.section`
   display: flex;
   align-items: space-evenly;  
   width: 20%; 
`

const Links = styled.span`
   padding: 0 15px;
   color: white;
`

const SocialIcons = styled.div`
   display: flex;
   justify-content: flex-end;
   width: 80%;
`
const Icon = styled.img`
   width: 25px;
   height: 25px;
   margin: 0 20px;
`

class Footer extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <FooterContainer>
            <FooterSubcontainer>
               <Links>Fale Conosco</Links> 
               <Links>Quem somos</Links>
            </FooterSubcontainer>
            <SocialIcons>
                  <Icon src={Facebook}/>
                  <Icon src={Twitter}/>
                  <Icon src={Instagram}/>

               </SocialIcons>
         </FooterContainer>
      )
   }
}

export default Footer;