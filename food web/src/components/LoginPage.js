import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {MDBNavbar, MDBNavbarBrand, MDBMask, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, 
  MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBAnimation} from "mdbreact";
import fire from "../firebasa/fire";
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

import './LoginForm.css'


document.body.style.backgroundImage = "url('https://files.wallpaperpass.com/2019/10/food%20wallpaper%20136%20-%201920x1080.jpg')";

class LoginPage extends Component {

  constructor(props) {

    super(props)
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sigup = this.sigup.bind(this)
    this.state = {

      email: "",
      password: "",
      isSignedIn: false

    }

  }

  uiConfig = {

    signInFlow: "popup",
    signInOptions: [

      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      
     

    ],

    callback: {

      signInSuccess: () => false
    }
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  login(e) {

    e.preventDefault()

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.passeword).then((u) => {
      console.log(u)
    }).catch((err) => {
      console.log(err)
    })

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sigup(e) {
    e.preventDefault()
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u)
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {

    return (
      
      <div id="classicformpage row my-3 d-flex justify-content-center " >
        
       <MDBView  >
          <MDBMask>
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card" >
                      <MDBCardBody className="white-text ">                     
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Login
                        </h3>                        
                        <div className="text-center mt-4 black-text">                                                 
                          <hr className="hr-light" />
                          <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}/>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        
      </div>
       );
  }
}

export default LoginPage;