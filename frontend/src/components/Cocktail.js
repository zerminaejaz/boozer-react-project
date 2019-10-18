import React from 'react'
import './cocktail.css'


export default class Cocktail extends React.Component{

formatDescription(desc){
    let shortDes = desc.substr(0, 100).concat("...")
    return shortDes
}

    render(){
        return( 
            <div className="cocktail text-center" onClick={()=>this.props.handleClickedCocktail(this.props.cocktail)}>
                <h4>{this.props.cocktail.name}</h4>
                <p>{this.formatDescription(this.props.cocktail.description)}</p>
             </div>
         
            )

    }

}