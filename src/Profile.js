import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

const styles = {
  container : {
    display : "flex",
    height : "100vh",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",

  },
  logoutBtn : {
    height : "100px",
    width : "200px",
    cursor : "pointer",
    borderRadius : "10px",
    background : "blue",
    color : "white",
    "&:hover" : {
      background : "white",
      color : "blue",
      transition : "0.5s"
    }
  }
}

class Profile extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  person: {
  	  	name() {
          return 'Anonymous';
        },
  	  	avatarUrl() {
  	  	  return avatarFallbackImage;
  	  	},
  	  },
  	};
  }

  componentWillMount() {
    const { userSession } = this.props;
    this.setState({
      person: new Person(userSession.loadUserData().profile),
    });
  }

  render() {
    const { handleSignOut, userSession, classes } = this.props;
    const { person } = this.state;
    return (
      !userSession.isSignInPending() ?
      <div className={classes.container}>
        <div className="avatar-section">
          <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
        </div>
        <h1>Hello, <span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span>!</h1>
        <p className="lead">
          <button
            className={classes.logoutBtn}
            id="signout-button"
            onClick={ handleSignOut.bind(this) }
          >
            Logout
          </button>
        </p>
      </div> 
      : null
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile)
