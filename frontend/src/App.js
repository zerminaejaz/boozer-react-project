import React from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailIndexContainer from './containers/CocktailIndexContainer'
import InfoContainer from './containers/InfoContainer'
import FormContainer from './containers/FormContainer';

const API= "http://localhost:3000/api/v1/cocktails"

export default class App extends React.Component {


  state={
    cocktails:[]
  }

  componentDidMount(){

    fetch(API)
    .then(res => res.json())
    .then(array=>
        this.setState({
          cocktails:array
        })
      )
  }

  handleClickedCocktail = (cocktail) => {
    //get index of the cocktail and show that cocktail in the showcontainer
    console.log("Showing Cocktail")
    return "Showing Cocktail"
  }

  render(){
    return(
      <div className="App">
        <div className="container-fluid" style={{paddingTop: "3%"}}>
          <div className="row justify-content-md-center">
              <div className="col-3 span4 col-3-lg">
              </div>
              <div className="col-6 col-6-lg">
                Boozer
              </div>
              <div className="col-3 col-3-lg">
              </div>
          </div>
        </div>
  
     
        <div className="body container-fluid" style={{paddingTop: "3%"}}>
          <div className="row justify-content-md-center">
              <div className="col-3 col-3-lg">
              <CocktailIndexContainer cocktails={this.state.cocktails} handleClickedCocktail={this.handleClickedCocktail} />
              </div>
              <div className="col-6 col-6-lg">
                <InfoContainer/>
              </div>
              <div className="col-3 col-3-lg">
                <FormContainer/>
              </div>
          </div>
        </div>
        </div>
    )
  }
}

