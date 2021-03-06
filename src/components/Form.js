import React from 'react'
import './form.css'

const API= "http://localhost:3000/api/v1/cocktails"

export default class Form extends React.Component{
    
    //creating proportion class actually 

    // cocktail: name, description, instructions, source
    //ingredient: name
    // proportions: amount, cocktail, ingredient
    state={
        name:"",
        description:"",
        instructions: "",
        source: "",
        cocktail:{},
        ingredient_name:"",
        amount:"",
        proportions:[]
    }

    clearState(){
        this.setState({
            name:"",
            description:"",
            instructions: "",
            source: "",
            cocktail:{},
            ingredient_name:"",
            amount:"",
            proportions:[]
        })
    }

    handleChange=(event)=>{

        this.setState({
            [event.target.name]: event.target.value,
        })

    }

    handleSubmit=(event)=>{
        event.preventDefault()

        let proportionObj = {
            ingredient_name: this.state.ingredient_name,
            amount: this.state.amount
        }

        let cocktailObj = {
            name: this.state.name,
            description: this.state.description,
            instructions: this.state.instructions,
            source: this.state.source
        }

        this.setState({
            cocktail: cocktailObj,
            proportions: [...this.state.proportions,proportionObj]

        })

        
        let data = {
            name: this.state.name,
            description: this.state.description,
            instructions: this.state.instructions,
            source: this.state.source,
            proportions: [...this.state.proportions,proportionObj]
        }

        this.props.handleSubmit(data)
        this.clearState()
           
    }

    render()
    {
        return(
            <div className="form">
                <h1 style={{paddingBottom:"5%"}}>Create a Drink</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name = "name" value={this.state.name}/> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea rows="3" type="text" onChange={this.handleChange} className="form-control" style={{height:"50px"}} name="description" value={this.state.description}/>
                           
                        </div>
                        <div className="form-group">
                            <label htmlFor="instructions">Instructions</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name="instructions" value={this.state.instructions}/>
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="source">Source</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name="source" value={this.state.source}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="ingredient">Ingredient</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name="ingredient_name" value={this.state.ingredient_name}/>
                            
                            <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name="amount" value={this.state.amount}/>
                        </div>
                         </div>
                            <button type="text" className="btn btn-primary">Submit</button>

                </form>
            </div>
        )
    }
}