import React from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailIndexContainer from './containers/CocktailIndexContainer'
import InfoContainer from './containers/InfoContainer'
import FormContainer from './containers/FormContainer';


function App() {
  return (
    // Header
    <div className="App">
      <div className="container-fluid" style={{paddingTop: "3%"}}>
        <div className="row justify-content-md-center">
            <div className="col-3 span4 col-3-lg">
            </div>
            <div className="col-6 col-6-lg">
              Cocktails
            </div>
            <div className="col-3 col-3-lg">
            </div>
        </div>
      </div>

      {/* Body */}
      <div className="body container-fluid" style={{paddingTop: "3%"}}>
        <div className="row justify-content-md-center">
            <div className="col-3 col-3-lg">
            <CocktailIndexContainer/>
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
  ); 
}

export default App;
