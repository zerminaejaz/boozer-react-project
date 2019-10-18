import React from 'react'
import './cocktail.css'


export default class Cocktail extends React.Component{

    createCocktail=(cocktail)=>{
        if(cocktail){
            return (
                <div className="cocktail" onClick={()=>this.props.handleClickedCocktail(cocktail)} >
                    <h4>{cocktail.name}</h4>
                </div>
            )
        }
        return null

    }

    // formattedDescription(description){
    //     let desc = description.substring(0,80).concat("...")
    //     return desc
    // }


    render(){
        return( 
            <div className="cocktail text-center" onClick={()=>this.props.handleClickedCocktail(this.props.cocktail)}>
                <h4>{this.props.cocktail.name}</h4>
                <p>{this.props.cocktail.description}</p>
             </div>
         
            )

    }

}