import React from 'react'


export default class Cocktail extends React.Component{
    render(){
        console.log(this.props.cocktail)
        return( 
            <React.Fragment>
                <h4>Cocktail Rendered</h4>
            </React.Fragment>

            )

    }

}