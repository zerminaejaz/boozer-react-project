import React from 'react'
import './cocktail.css'


export default class Cocktail extends React.Component{



    render(){
        return( 
            <div className="cocktail text-center" onClick={()=>this.props.handleClickedCocktail(this.props.cocktail)}>
                <h4>{this.props.cocktail.name}</h4>
                <p>{this.props.cocktail.description}</p>
                {console.log(this.props.extraInfo === "true")}
                {/* {this.props.extraInfo? "true":"false"} */}
             </div>
         
            )

    }

}