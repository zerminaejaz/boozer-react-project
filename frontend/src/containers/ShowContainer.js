import React from 'react'
import './index.css';
import Cocktail from '../components/Cocktail'


export default class ShowContainer extends React.Component{

  
    
    render(){
      
        return(
            <Cocktail key={this.props.cocktail.name} cocktail={this.props.cocktail} 
            extraInfo ={this.props.extraInfo} handleClickedCocktail={this.props.handleClickedCocktail}/>
        )
    }

}