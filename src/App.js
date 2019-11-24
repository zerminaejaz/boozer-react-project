import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';
import CocktailIndexContainer from './containers/CocktailIndexContainer'
import ShowContainer from './containers/ShowContainer'
import FormContainer from './containers/FormContainer';
import ReactMapGL from 'react-map-gl';

const API= "http://localhost:3000/api/v1/cocktails"

export default class App extends React.Component {

  state={
    cocktails:[],
    cocktail:{},
    userLocation:{}
  }

  componentDidMount(){
  
    fetch(API)
    .then(res => res.json())
    .then(array=> {
        this.setState({
          cocktails: array
        })
    })
   
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

  updateAfterDeleteFetch=(cocktail)=>{
    let cocktailsArray = this.state.cocktails
          let foundIndex = cocktailsArray.findIndex(function(element) {
            return element.id === cocktail.id;
          });
  
          let newArray = this.state.cocktails
          
          newArray.splice(foundIndex,1)

          this.setState({
            cocktails: newArray,
            cocktail:{}
          })
  }

  handleSubmit=(data)=>{
    
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json' ,
        "Accepts": 'application/json'
      },
      body: JSON.stringify(data)})
      .then(res=>res.json())
      .then(cocktailObj=>{
        console.log(cocktailObj)

        this.setState({
          cocktails: [...this.state.cocktails, cocktailObj]
        })
      })
    
  }

  handleDelete=(cocktail)=>{
    console.log("HandleDelete:", cocktail)
    console.log(`${API}/${cocktail.id}`)

    fetch(`${API}/${cocktail.id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": 'application/json'}
      })
      .then(res=>
        {
         this.updateAfterDeleteFetch(cocktail)
        })
  }

  render(){
   
    return(
      <React.Fragment>
      <div className="App">
        <div className="container-fluid" style={{paddingTop: "3%"}}>
          
          <div className="row justify-content-md-center" style={{paddingTop:"3%"}}>
              <div className="col-3 span4 col-3-lg">
   
              </div>
              <div className="col-6 col-6-lg header">
                <h1 className="title">VELVET BROOKLYN</h1>
                <h6 className="subheader">Bar & Lounge</h6>
              </div>
              <div className="col-3 col-3-lg">
              </div>
          </div>
        <div className="body container-fluid" style={{paddingTop: "3%"}} height="80vh">
          <div className="row justify-content-md-center">
              <div className="col-3 col-3-lg index">
              <CocktailIndexContainer cocktails={this.state.cocktails} handleClickedCocktail={this.handleClickedCocktail} />
              </div>
              <div className="col-6 col-6-lg">
                {this.state.cocktail? <ShowContainer handleDelete={this.handleDelete} cocktail={this.state.cocktail}/>:<p>Click On A Cocktail</p>}
              </div>
              <div className="col-3 col-3-lg">
                <FormContainer handleSubmit={this.handleSubmit}/>
              </div>
          </div>
        </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}