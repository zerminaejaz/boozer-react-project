import React from 'react'
import './index.css';


export default class ShowContainer extends React.Component{

    
  
    renderCocktail = () => {
        return(
        <div className="text-left">
        <h3>{this.props.cocktail.name}</h3>
        <br></br>
        <p>{this.props.cocktail.description}</p>
        <p>{this.props.cocktail.instructions}</p>
        <p>{this.props.cocktail.source}</p>
        <br></br>
       <h5>Proportions</h5>
        <ul>{this.renderProportions()}</ul>
        <button type="text" onClick={()=>this.props.handleDelete(this.props.cocktail)}className="btn btn-danger">Delete Cocktail</button>
       </div>
        )
    }

    renderProportions=()=>{
        return (
        this.props.cocktail.proportions.map(proportion=>{
            return <li className="proportion-item">{proportion.amount} of {proportion.ingredient_name}</li>})
        )
    }

    isObjectEmpty(obj){
        return Object.keys(obj).length>0
    }

    render(){
      
        return(
            <div>
            {this.isObjectEmpty(this.props.cocktail)? this.renderCocktail() : null }
            </div>
       
        )
    }

}