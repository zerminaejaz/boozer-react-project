import React from 'react'
import './index.css';
import Cocktail from '../components/Cocktail'



export default class CocktailIndexContainer extends React.Component{

    render(){
      
        return(
            <div className="container-fluid scrollbar-primary" id="index-container">
                <div className="force-overflow">
               {
                 this.props.cocktails.map(cocktail=>{
                    return <Cocktail key={cocktail.name} cocktail={cocktail} handleClickedCocktail={this.props.handleClickedCocktail}/>
                   })
               }
               </div>
            </div>

        )
    }

}