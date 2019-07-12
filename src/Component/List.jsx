
import React, { Component } from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import './Carte.css'
import Coeur from './coeur/coeur'
import Coms from './comment/Addcoms'
import axios from 'axios';
//import Delete from './comment/Delete'


export default class ListTous extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/profil')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <MDBRow>
                <div className="card-deck">    
                    {this.state.profil.length > 0 ? (  
                        this.state.profil.map(obj => (
                            <MDBCol md="4" className="colone">
                            <div className="card">
                                {/* <Delete/> */}
                                <img src={'http://localhost:8080/user/'+obj.photo_profil} alt="pdp" alt="upload images" width=" 250" height="250"/>
                                <div className="card-body">
                                    <h5 className="card-title">{obj.nom}</h5>
                                    <p>{obj.email}</p>
                                </div>
                                <div className="card-footer">
                                    <Coms/>     
                                    <Coeur /> 
                                </div>
                            </div>  
                            </MDBCol>    
                            ))
                ) : ''}  
                
                </div>
            </MDBRow>
        );
    }
}