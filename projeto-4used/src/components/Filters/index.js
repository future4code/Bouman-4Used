import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

//STYLED DOS FILTROS MAX E MIN //
const StyledH2 = styled.h2`
   margin-left: 20px;
`

const StyledFormFilter = styled.form`
   margin-left: 30px;
   margin-top: 10px;
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
                  InputLabelProps={{
                  shrink: true,
                  }}
               />
            </StyledFormFilter>

            <StyledFormFilter>
               <TextField
                  id="standard-number"
                  label="Valor Máximo"
                  type="number"
                  variant="outlined"
                  color="primary"
                  InputLabelProps={{
                  shrink: true,
                  }}
               />

               <StyledFilterSeletor>
                  <MenuItem value="nome">Nome</MenuItem>
                  <MenuItem value="preço">Preço</MenuItem>
                  <MenuItem value="categoria">Categoria</MenuItem>
               </StyledFilterSeletor>
               
            </StyledFormFilter>
         </div>
      )
   }
}

export default Filters;