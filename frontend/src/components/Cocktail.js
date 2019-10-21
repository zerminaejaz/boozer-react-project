import React from 'react'
import './cocktail.css'



export default class Cocktail extends React.Component{

formatDescription(desc){
    let shortDes = desc.substr(0, 100).concat("...")
    return shortDes
}

render(){
    return( 
        <div style={{paddingBottom: "2%"}}className="cocktail text-center hoverable" onClick={()=>this.props.handleClickedCocktail(this.props.cocktail)}>
            <h4 style={{textDecoration:"underline"}}>{this.props.cocktail.name}</h4>
            <p>{this.formatDescription(this.props.cocktail.description)}</p>
         </div>
        )

}


}