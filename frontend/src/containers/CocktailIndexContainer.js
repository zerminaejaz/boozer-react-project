import React from 'react'
import './index.css';
import Cocktail from '../components/Cocktail'
import './cocktail_index.css'



export default class CocktailIndexContainer extends React.Component{

    state ={
        search: ""
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        let newArray = this.props.cocktails.filter(cocktailObj => {
            return  cocktailObj.name.includes(this.state.search)
        })

        return(
            <div className="index" height="100vh" >
                <div className="search">
                    <label>Search </label>
                    <input name="search" onChange={this.handleChange} value={this.state.search}></input>
                </div>
                <div className="container-fluid scrollbar-primary main" id="index-container">
                    <div className="force-overflow body">
                    {
                        newArray.map(cocktailObj=>{
                            return <Cocktail key={cocktailObj.name} cocktail={cocktailObj} handleClickedCocktail={this.props.handleClickedCocktail}/>
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}