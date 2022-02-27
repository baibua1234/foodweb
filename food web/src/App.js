import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Start from './components/Start';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import fire from './firebasa/fire'

import Fooditem from './components/Fooditem';
import contact from './components/contact';
import Reviews from './components/Reviews';
import Firestore from './components/fetch/read';
import Read from './components/fetch/read2';
import PageDetail from './components/fetch/detailpage';
import Detail from './components/fetch/detail';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener()
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }
  render() {
    if (this.state.user == null) {
      return (
        <div>
          <LoginPage />
          
        </div>
      );
    }
    return (
      <div>
        <div>
          <Route exact path="/" component={Start} />
          <Route path="/login" component={LoginPage} />
          <Route path="/Fooditem" component={Fooditem} />
          <Route path="/contact" component={contact} />
          <Route path="/Reviews" component={Reviews} />
          <Route path="/addfood" component={Firestore} />
          <Route path="/read" component={Read} />
          <Route path="/food" component={PageDetail} />
          <Route path="/detail/:id" component={Detail} />
        </div>
      </div>


    )
  }
}
export default App