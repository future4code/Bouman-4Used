import React from 'react';
import styled from 'styled-components';
import ImgLogo from '../../imagens/marca-icone.png'
import TextLogo from '../../imagens/nome-marca.png'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'


const PageContainer = styled.div`
    background: #FFFCEF;
    

`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`
const RightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 120px;
    margin: 20px 0;
`

const usedFourTheme = createMuiTheme({
   palette:{
    primary: {main:"#F04E3E"} ,
   secondary:{main:"#43ADA5"} 
   } 
   
})

class ListaDeProduto extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <MuiThemeProvider theme={usedFourTheme}>
                <PageContainer>
                    <HeaderContainer>
                        <img src ={ImgLogo}></img>
                        <img src ={TextLogo}></img>
                        <RightContainer>
                            <Button color="primary" variant="contained">Anuncie</Button>
                            <TextField id="outlined-basic" variant="outlined" placeholder="Pesquisar"/>
                        </RightContainer>
                    </HeaderContainer>
                </PageContainer>
            </MuiThemeProvider>
            
            
        )
    }
}

export default ListaDeProduto