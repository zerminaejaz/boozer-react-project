import React from 'react'
import Form from '../components/Form'

export default class FormContainer extends React.Component{
    render(){
        return(
            <div className="container-fluid" style={{paddingTop: "3%"}}>
                <Form/>
            </div>

        )

    }

}