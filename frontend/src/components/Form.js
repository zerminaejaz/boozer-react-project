import React from 'react'

export default class Form extends React.Component{
    render(){
        return(
            <React.Fragment>
                <form name="cocktail-form">
                    <input type="text" value=""/>
                    <input type="text" value=""/>
                    <input type="submit" value="Submit"/>
                </form>
            </React.Fragment>
        )
    }
}