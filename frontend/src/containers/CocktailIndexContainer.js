import React from 'react'
import Cocktail from '../components/Cocktail'

export default class CocktailIndexContainer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Cocktail/>
                <Cocktail/>
            </React.Fragment>

        )
    }

}