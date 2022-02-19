// React core
import React, { Component } from 'react';

// Firebase.
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Styles
import './App.css'; // This uses CSS modules.
import './LoginPage'

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCFvVzTZ5n8DTKk0a6whyCsGFbPz_XRM3s",
  authDomain: "buatodo-272e3.firebaseapp.com",
  databaseURL: "https://buatodo-272e3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "buatodo-272e3",
  storageBucket: "buatodo-272e3.appspot.com",
  messagingSenderId: "401686557095",
  appId: "1:401686557095:web:3c3853e9e4e43bd12d4682",
  // measurementId: "G-QWBKMXG31B"
};




// Instantiate a Firebase app.
firebase.initializeApp(firebaseConfig);

class SignInScreen extends Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google , Facebook , Etc as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="container">
          <h1>FirebaseUI-React</h1>
          <h1> with Firebase Authentication</h1>

          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      );
    }
    return (
      <div className="container">
        <h1>FirebaseUI-React</h1>
        <h1> with Firebase Authentication</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL} />
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>
    );
  }
}

export default SignInScreen;