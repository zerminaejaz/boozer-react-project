import React from 'react'

export default class Form extends React.Component{
    render()
    {
        return(
            <React.Fragment>
                <h1 style={{paddingBottom:"5%"}}>Create a Cocktail</h1>
                <form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder=""/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword3" placeholder=""/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Instructions</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword3" placeholder=""/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Source</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword3" placeholder=""/>
                        </div>
                    </div>
                    <label for="divider" class="col-sm-2 col-form-label">--</label>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Ingredient</label>
                        <div class="col-sm-4">
                        <input type="text" class="form-control" id="inputPassword3" placeholder=""/>
                        </div>
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Porportion</label>
                        <div class="col-sm-4">
                        <input type="number" class="form-control" id="inputPassword3" placeholder=""/>
                        </div>
                    </div>

                    <div style={{paddingTop: "2%"}}class="form-group row">
                        <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>

                </form>
            </React.Fragment>
        )
    }
}
