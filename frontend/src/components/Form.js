import React from 'react'

export default class Form extends React.Component{
    render()
    {
        return(
            <React.Fragment>
                <h1 style={{paddingBottom:"5%"}}>Create a Cocktail</h1>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/> 
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder=""/>
                           
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Instructions</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder=""/>
                        
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Source</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder=""/>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Ingredient</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder=""/>
                            <div class="form-group">
                            <label for="exampleInputPassword1">Proportion</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" placeholder=""/>
                        </div>
                        </div>
                            <button type="text" class="btn btn-primary">Submit</button>

                </form>
            </React.Fragment>
        )
    }
}
