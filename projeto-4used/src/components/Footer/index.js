import React, { Component } from 'react';
import styled from 'styled-components';
import Facebook from '../../imagens/facebookIcon.svg'
import Instagram from '../../imagens/instagramIcon.svg'
import Twitter from '../../imagens/twitterIcon.svg'
import Brand from '../../imagens/FOTO.png'



const FooterContainer = styled.div`
   display: flex;
   align-items: flex-end;
   padding: 1%;
   background-color: #43434F;
   border-radius: 15px;
   margin: 0 20px;
`
const FooterSubcontainer = styled.section`
   display: flex;
   align-items: space-evenly;  
   width: 30%; 
`

const Links = styled.span`
   padding: 0 15px;
   color: white;
   font-weight: bold;
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

const WhoAreWe = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   background-color: #FFFCEF;
   width: 50%;
   margin: 0 auto;
`

const Logo = styled.img`
   margin-top: 30px;
   width: 125px;
   height: auto;
`

const Labels = styled.label`
text-align: center;
`

const Paragraphs = styled.p`
   text-align: center;
`

 const ImgStyled = styled.img`
   width: 200px;
   height:200px;
   margin: 20px 0;

`

const StaffContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 20px;
`
const ImgContainer = styled.div`
display: flex;
flex-direction: column;
`

class Footer extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>

         <FooterContainer>
            <FooterSubcontainer>
               <Links>Fale Conosco</Links>
               <Links>Quem somos</Links>
            </FooterSubcontainer>
            <SocialIcons>
               <Icon src={Facebook} />
               <Icon src={Twitter} />
               <Icon src={Instagram} />
            </SocialIcons>
         </FooterContainer>

         {/* Quem Somos */}
         <WhoAreWe>
               <Logo src={Brand}/>
               <h2>Missão:</h2>
               <Paragraphs>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum </Paragraphs>
               <h2>Visão</h2>
               <Paragraphs>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum </Paragraphs>

               <h2>Equipe</h2>
            
            <StaffContainer>
               
               <ImgContainer>
                  <ImgStyled src="https://ca.slack-edge.com/TLAVDH7C2-UPXKT85AA-b30b9f827ad1-512"></ImgStyled>
                  <Labels>Andressa</Labels>
               </ImgContainer>

               <ImgContainer>
                  <ImgStyled src="https://ca.slack-edge.com/TLAVDH7C2-UPVDW72BF-e31355632134-512"></ImgStyled>
                  <Labels>Mateus</Labels>
               </ImgContainer>

               <ImgContainer>
                  <ImgStyled src="https://ca.slack-edge.com/TLAVDH7C2-UNT0CG7FX-5fc2598f363f-512"></ImgStyled>
                  <Labels>Patricia</Labels>
               </ImgContainer> 

               <ImgContainer>
                  <ImgStyled src="https://ca.slack-edge.com/TLAVDH7C2-UPVDM948Y-aa71b101e9c9-512"></ImgStyled>
                  <Labels>Saulo</Labels>
               </ImgContainer> 

               <ImgContainer>
                  <ImgStyled src="https://ca.slack-edge.com/TLAVDH7C2-UPVDM8QJU-336f74b90921-512"></ImgStyled>
                  <Labels>Yan</Labels>
               </ImgContainer>   
                  
            </StaffContainer>
               
         </WhoAreWe> 


         </div>
         
      )
   }
}

export default Footer;