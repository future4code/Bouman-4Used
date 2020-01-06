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
         minValue: 0,
         maxValue: 0,
      }
   };

    onChangeMinValue = (event) => {
      this.setState({minValue: event.target.value});
    };


    onChangeMaxValue = (event) => {
      this.setState({maxValue: event.target.value});
    };


    filtroInputs = () => {
      return this.props.produtos.filter((item) => {
        if(item.price > this.minValue) {
          return true
        } else {
          return false
        } 
      }).filter((item) => {
       if(item.price < this.maxValue) { 
         return true
       }else{
         return false
       }
   })  
}
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
                  min="0"
                  value={this.minValue} 
                  onChange={this.onChangeMinValue}
               />
            </StyledFormFilter>
            <StyledFormFilter>
               <TextField
                  id="standard-number"
                  label="Valor Máximo"
                  type="number"
                  variant="outlined"
                  color="primary"
                  min="0"
                  value={this.maxValue} 
                  onChange={this.onChangeMaxValue}                 
               />
            </StyledFormFilter>
            <StyledFormFilter>
               <StyledFilterSeletor native defaultValue='selecione'>
                  <option>Selecione uma opção</option>
                  <option value="Nome">Nome</option>
                  <option value="Preço">Preço</option>
               </StyledFilterSeletor>
            </StyledFormFilter>
         </div>
      )
   }
}
export default Filters;