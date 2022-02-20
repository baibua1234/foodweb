import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {MDBNavbar, MDBNavbarBrand, MDBMask, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, 
  MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBAnimation} from "mdbreact";
import fire from "../firebasa/fire";
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

import './LoginForm.css'


document.body.style.backgroundImage = "url('https://i.pinimg.com/474x/a3/d9/50/a3d950fa6a5fbd4562dd24830deb447e.jpg')";

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
          <MDBMask className="d-flex justify-content-center align-items-center gradient ">
            <MDBContainer  className=' align-items-center'>
              <MDBRow >
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text ">
                      {/* <div class="text-center"> */}
                {/* <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/s960x960/51095734_1180564112147452_1471511896472420352_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeGcYscU0D2jhgjcw8RJJmATiCYbrg_vJOKIJhuuD-8k4ufJGBh_aq5uVbBPKZAmHEeVioJYXb-fw_fHJ69o_9dV&_nc_ohc=ucUfD9erfzMAX-sW2ZD&_nc_ht=scontent.fbkk5-4.fna&_nc_tp=7&oh=db36bcaa38686ff1a60b548052466595&oe=5EBD6C9A" */}
                    {/* className="img-thumbnail justify-content-center " width="200" height="90" /></div> */}
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Login
                        </h3>
                        {/* <hr className="hr-light" />
                        <MDBInput
                          className="white-text" iconClass="white-text" label="Your email" roup type="email" name="email" validate error="wrong"
                          success="right" icon="envelope" value={this.state.email} onChange={this.handleChange}/>
                        <MDBInput
                          className="white-text"  iconClass="white-text"label="Your password"
                          icon="lock"  type="password"  group type="password"  name="password" validate value={this.state.password} onChange={this.handleChange}/> */}
                        <div className="text-center mt-4 black-text">

                          {/* <MDBBtn color="amber" onClick={this.login} >Login</MDBBtn>
                          <MDBBtn color="amber" onClick={this.sigup}  >Sign Up</MDBBtn> */}
                         
                          <hr className="hr-light" />
                          <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                          />
                          
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