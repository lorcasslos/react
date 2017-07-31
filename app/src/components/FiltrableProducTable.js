import React from 'react'
//improtanto la clase react

import SearchBar from './SearchBar.js'
import ProductTable from './ProducTable.js'

//para consumir la clase desde otro lado de los componentes
export default class FiltrableProducTable extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
      <SearchBar  />
      <ProductTable products={this.props.store}/>
      </div>
    );
  }
}



