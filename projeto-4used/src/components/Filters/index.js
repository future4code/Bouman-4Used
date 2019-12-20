import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

//STYLED DOS FILTROS MAX E MIN //
const StyledH2 = styled.h2`
   margin-left: 20px;
`

const StyledFormFilter = styled.form`
   margin-left: 15px;
   margin: 10px 15px;
   width: 200px;
`

const StyledFilterSeletor = styled(Select)`
   width: 200px;
   height: 60px;
`
//FIM DO STYLED DOS FILTROS MAX E MIN //

class Filters extends Component {
   constructor(props) {
      super(props)

      this.state = {
         minValue: '',
         maxValue: '',
      }
   };

   atualizarFiltroMin = (valorMin) => {
      this.setState({
        filtroMin: valorMin,
      })
    }
    atualizarFiltroMax = (valorMax) => {
      this.setState({
        filtroMax: valorMax,
      })
    }
    
    onChangeMinValue = event => {
      this.setState({minValue: event.target.value});
    };
    onChangeMaxValue = event => {
      this.setState({maxValue: event.target.value});
    };

    render() {
      return (
         <div>
            <StyledH2>Filtros</StyledH2>

            <StyledFormFilter>
               <TextField
                  id="standard-number"
                  label="Valor Mínimo"
                  type="number"
                  variant="outlined"
                  color="primary"  
                  onChange={this.minValue}
               />
            </StyledFormFilter>
            
            <StyledFormFilter>
               <TextField
                  id="standard-number"
                  label="Valor Máximo"
                  type="number"
                  variant="outlined"
                  color="primary"
                  onChange={this.maxValue}                 
               />
            </StyledFormFilter>

            <StyledFormFilter>
               <StyledFilterSeletor native defaultValue='selecione'>
                  <option value="selecione">Selecione uma opção</option>
                  <option value="Nome">Nome</option>
                  <option value="Preço">Preço</option>
                  <option value="Categoria">Categoria</option>
               </StyledFilterSeletor>
            </StyledFormFilter>
         </div>
      )
   }
}

export default Filters;