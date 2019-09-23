import React, { Component } from 'react';
import Profile from './Profile.js';
import Signin from './Signin.js';
import Homescreen from './Pages/Homescreen';
import NavBar from './Global/NavBar';
import Upload from './Pages/Upload';
import FileEditor from './Pages/Editor';
import { Route } from 'react-router-dom';
import {
  UserSession,
  AppConfig
} from 'blockstack';

const appConfig = new AppConfig()
const userSession = new UserSession({ appConfig: appConfig })

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      text : "",
    }
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        this.setState({ userData: userData})
      });
    }
  }
  
  handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  setText = text => {
    this.setState({ text : text });
    console.log("updated text")
  }

  render() {
    return (
      <div className="site-wrapper">
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
            : 
            <div>
              <Route path="/" render={() => <NavBar />} />
              <div id="test" style={{boxSizing : "border-box", paddingLeft : "250px"}}>
                  <Route exact path="/files/:path?" render={(props) => <Homescreen {...props} changeText={this.setText}/>} />
                  <Route path="/upload" render={() => <Upload /> } />
                  <Route path="/profile" render={() => <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />} />
                  <Route exact path="/" render={() => <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />} />
                  <Route path="/editor/:path" render={(props) => <FileEditor userSession={userSession} text={this.state.text} {...props}/>} />
              </div>
            </div>
          }
      </div>
    );
  }
}
