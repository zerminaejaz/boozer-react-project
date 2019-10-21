import React from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailIndexContainer from './containers/CocktailIndexContainer'
import ShowContainer from './containers/ShowContainer'
import FormContainer from './containers/FormContainer';


const API= "http://localhost:3000/api/v1/cocktails"

export default class App extends React.Component {


  state={
    cocktails:[],
    cocktail:{}
  }

  componentDidMount(){
  
    fetch(API)
    .then(res => res.json())
    .then(array=> {
        this.setState({
          cocktails: array
        })
    })
    console.log(this.state.cocktail)
  }

  handleClickedCocktail = (cocktail) => {
    let id = cocktail.id
    fetch(`http://localhost:3000/api/v1/cocktails/${id}`)
    .then(res=>res.json())
    .then(cocktailObj=>{
      this.setState({
        cocktail:cocktailObj
      })
    })

  }


  render(){

    console.log(this.state)
    return(
      <div className="App">
        <div className="container-fluid" style={{paddingTop: "3%"}}>
          <div className="row justify-content-md-center">
              <div className="col-3 span4 col-3-lg">
              </div>
              <div className="col-6 col-6-lg">
                <h1>Boozer</h1>
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
                {this.state.cocktail? <ShowContainer cocktail={this.state.cocktail}/>:<p>Click On A Cocktail</p>}
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