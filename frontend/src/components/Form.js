import React from 'react'

export default class Form extends React.Component{
    
    // cocktail: name, description, instructions, source
    //ingredient: name
    // proportions: amount, cocktail, ingredient
    state={
        name:"",
        desc:"",
        instruction: "",
        source: "",
        cocktail:{},
        ingredient:"",
        proportion:""
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render()
    {
        return(
            <React.Fragment>
                <h1 style={{paddingBottom:"5%"}}>Create a Cocktail</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="email" onChange={(e)=>this.handleChange}className="form-control" id="name" value={this.state.name}/> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" id="desc" value={this.state.desc}/>
                           
                        </div>
                        <div className="form-group">
                            <label htmlFor="instructions">Instructions</label>
                            <input type="text" className="form-control" id="instructions" value={this.state.instruction}/>
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="source">Source</label>
                            <input type="password" className="form-control" id="source" value={this.state.source}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="ingredient">Ingredient</label>
                            <input type="text" className="form-control" id="ingredient" value={this.state.ingredient}/>
                            <div className="form-group">
                            <label htmlFor="proportion">Proportions</label>
                            <input type="number" className="form-control" id="proportion" value={this.state.proportion}/>
                        </div>
                        </div>
                            <button type="text" className="btn btn-primary">Submit</button>

                </form>
            </React.Fragment>
        )
    }
}
