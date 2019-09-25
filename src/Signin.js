import React, { Component } from 'react';
import Logo from './Global/logo.png';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
    root : {
      maxWidth : "100vw",
      minHeight : "100vh",
      display : "flex"
    },
    left : {
      width : "70%",
      display : "flex",
      flexDirection : "column",
      alignItems : "center",
      backgroundColor : "#131F71",
    },
    right : {
      marginLeft : "70%",
      width : "30vw",
      height : "100%",
      position : 'fixed',
      background : "blue",
      display : "flex",
      justifyContent : "center",
      alignItems : "center"
    },
    logo : {
      width : "100%"
    },
    header : {
      height : "100px",
      display : "flex",
      alignItems : "center",
      justifyContent : "center",
      borderRadius : "10px",
      background : "lightblue",
      boxSizing : "border-box",
      padding : "2px 5px"
    },
    title : {
      color : "white",
      fontSize : "40px",
      textDecoration : "underline",
      letterSpacing : "1px"
    },
    cardContainer : {
      width : "100%",
      display : "flex",
      flexDirection : "column",
      justifyContent : "space-around",
      alignItems : "center"
    },
    card : {
      width : "75%",
      borderRadius : "15px",
      border : "2px solid black",
      height : "300px",
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#4068E0",
      fontSize : "40px"
    },
    vertical : {
      height : "100px",
    },
    signInBtn : {
      height : "150px",
      width : "90%",
      borderRadius : "20px",
      fontSize : "30px",
      cursor : "pointer",
      backgroundColor : "lightblue",
      '&:hover' : {
        backgroundColor : "#4068E0",
        transition : "0.5s"
      }
    }
}

class Signin extends Component {

  render() {
    const { handleSignIn, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.left}>
          <img src={Logo} alt="logo" className={classes.logo}/>
          <div className={classes.header}>
            <h1>A decentralized and secure document and file manager built with Blockstack</h1>
          </div>
          <h1 className={classes.title}>Features</h1>
          <div className={classes.cardContainer}>
            <hr className={classes.vertical}/>
            <div className={classes.card}>
              Create and Edit documents
            </div>
            <hr className={classes.vertical}/>
            <div className={classes.card}>
              Create Folders to sort your files
            </div>
            <hr className={classes.vertical}/>
            <div className={classes.card}>
              Import local files directly.
            </div>
          </div>
          <div style={{height : "100px"}} />
        </div>
        <div className={classes.right}>
          <button
              className={classes.signInBtn}
              id="signin-button"
              onClick={ handleSignIn.bind(this) }
            >
            Continue with Blockstack
          </button>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin)
