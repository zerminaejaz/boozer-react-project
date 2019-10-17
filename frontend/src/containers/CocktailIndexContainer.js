import React from 'react'
import Cocktail from '../components/Cocktail'



export default class CocktailIndexContainer extends React.Component{
    
    render(){
        return(
            <React.Fragment>
               {
                 this.props.cocktails.map(cocktail=>{
                    return <Cocktail key={cocktail.name} cocktail={cocktail}/>
                   })
               }
            </React.Fragment>

        )
    }

}