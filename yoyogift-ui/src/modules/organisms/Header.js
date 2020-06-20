import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Styles from "../../assets/css/Header.module.css";
import { login, logout, createUser } from "../header/state/actions";
import history from "../atoms/history";
import MySnackBar from "../atoms/Snackbar";

const styles = {
  root: {
    flexGrow: 1,
    flexShrink: 1,
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  toolBar: {
    background: "#32567e",
  },
};

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrorSnack: false,
    };
  }
  render() {
    const { showErrorSnack } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {showErrorSnack ? (
          <MySnackBar message="Network Error! Please try again" color="red" />
        ) : null}
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Button onClick={this.goTolanding}>
                <span style={{ fontSize: "1.2em", color: "#ffffff" }}>
                  YOYOGift
                </span>
              </Button>
            </Typography>
            {this.props.isLoggedIn && this.props.userDetails.isAdmin ? (
              <Button color="inherit" onClick={this.showAllUsers}>
                Show All Users
              </Button>
            ) : null}
            {this.props.isLoggedIn ? (
              <Button
                className={Styles.headerButton}
                color="inherit"
                onClick={this.giftsReceived}
              >
                GIFTS RECEIVED
              </Button>
            ) : null}
            {this.props.isLoggedIn ? (
              <Button
                className={Styles.headerButton}
                color="inherit"
                onClick={this.giftsSend}
              >
                GIFTS SENT
              </Button>
            ) : null}
            {this.props.isLoggedIn ? (
              <Button
                className={Styles.headerButton}
                color="inherit"
                onClick={this.myProfile}
              >
                MY PROFILE
              </Button>
            ) : null}
            <Button
              className={Styles.headerButton}
              color="inherit"
              onClick={this.logInOut}
            >
              {this.props.isLoggedIn ? "LOGOUT" : "LOGIN"}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  goTolanding = () => {
    history.push("/");
  };
  myProfile = () => {
    history.push("/Profile");
  };

  giftsSend = () => {
    history.push("/GiftsSend");
  };

  giftsReceived = () => {
    history.push("/GiftsReceived");
  };

  logInOut = () => {
    if (!this.props.isLoggedIn) {
      history.push("/login");
    } else {
      this.logOut();
    }
  };

  showAllUsers = () => {
    history.push("/showallusers");
  };

  logOut = () => {
    this.props.logout();
    history.push("/");
    window.sessionStorage.removeItem("user");
  };
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.loginStatus,
    userDetails: state.login.detailsObject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login, logout, createUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
