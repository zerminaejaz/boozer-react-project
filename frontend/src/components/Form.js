import React from 'react'

export default class Form extends React.Component{
    
    // cocktail: name, description, instructions, source
    //ingredient: name
    // proportions: amount, cocktail, ingredient
    state={
        cocktail:{},
        ingredient:{},
        proportions:{}
    }
    render()
    {
        return(
            <React.Fragment>
                <h1 style={{paddingBottom:"5%"}}>Create a Cocktail</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="email" className="form-control" id="name" placeholder=""/> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" id="desc" placeholder=""/>
                           
                        </div>
                        <div className="form-group">
                            <label htmlFor="instructions">Instructions</label>
                            <input type="text" className="form-control" id="instructions" placeholder=""/>
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="source">Source</label>
                            <input type="password" className="form-control" id="source" placeholder=""/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="ingredient">Ingredient</label>
                            <input type="text" className="form-control" id="ingredient" placeholder=""/>
                            <div className="form-group">
                            <label htmlFor="proportions">Proportions</label>
                            <input type="number" className="form-control" id="proportions" placeholder=""/>
                        </div>
                        </div>
                            <button type="text" className="btn btn-primary">Submit</button>

                </form>
            </React.Fragment>
        )
    }
}
