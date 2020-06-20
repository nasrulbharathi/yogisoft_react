import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import axiosWrapper from "../../apis/axiosCreate";
import history from "../atoms/history";
import InputTypeComponent from "../atoms/inputTypeComponent";
import { login, createUser } from "../header/state/actions";

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

export class Login extends Component {
  isGoogleSignUpTest = false;
  isGoogleSignInTest = false;
  isSignInTest = false;
  isSignUpTest = false;

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailError: false,
      emailHelperText: "",
      password: "",
      passwordError: false,
      passwordlHelperText: "",
    };
  }

  handlEmailChange = (event) => {
    let value = event.target.value;
    if (
      // eslint-disable-next-line
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) &&
      value.length > 0 &&
      value.length < 100
    ) {
      this.setState({
        email: value,
        emailError: false,
        emailHelperText: "",
      });
    } else {
      this.setState({
        email: value,
        emailError: true,
        emailHelperText: "Only Valid emails are accepted",
      });
    }
  };

  handlPasswordChange = (event) => {
    let value = event.target.value;
    if (value.length > 0 && value.length < 100) {
      this.setState({
        password: value,
        passwordError: false,
        passwordHelperText: "",
      });
    } else {
      this.setState({
        password: value,
        passwordError: true,
        passwordHelperText: "Please enter a password",
      });
    }
  };

  signIn = async () => {
    const response = await axiosWrapper.get(`/users?email=${this.state.email}`);
    if (response.data && response.data.length > 0) {
      const user = response.data[0];
      if (user.password === this.state.password) {
        const userObj = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          balance_points: user.balance_points,
          isAdmin: user.isAdmin,
        };
        window.sessionStorage.setItem("user", userObj);
        this.isSignInTest = true;
        this.props.login(userObj);
        history.push("/");
      } else {
        this.setState({
          password: "",
          passwordError: true,
          passwordHelperText: "Password enter is wrong",
        });
      }
    } else {
      this.setState({
        email: "",
        emailError: true,
        emailHelperText: "Please enter the valid username",
      });
    }
  };

  signUp = () => {
    this.isSignUpTest = true;
    history.push("/signup");
  };

  responseGoogle = async (response) => {
    if (response.profileObj) {
      let userObj = {
        id: 0,
        first_name: response.profileObj.givenName,
        last_name: response.profileObj.familyName,
        email: response.profileObj.email,
        balance_points: 0,
        isAdmin: false,
      };
      const userPresent = await axiosWrapper.get(
        `/users?email=${response.profileObj.email}`
      );
      if (userPresent.data && userPresent.data.length > 0) {
        userObj.first_name = userPresent.data[0].first_name;
        userObj.id = userPresent.data[0].id;
        userObj.last_name = userPresent.data[0].last_name;
        userObj.email = userPresent.data[0].email;
        userObj.balance_points = userPresent.data[0].balance_points;
        userObj.isAdmin = userPresent.data[0].isAdmin;
      } else {
        userObj.id = Math.floor(Math.random() * 100 + 1);
        this.props.createUser(userObj);
        this.isGoogleSignUpTest = true;
      }
      this.isGoogleSignInTest = true;
      window.sessionStorage.setItem("user", userObj);
      this.props.login(userObj);
      history.push("/");
    }
  };

  render() {
    return (
      <>
        <InputTypeComponent
          styles={{
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "1rem",
            width: "45%",
          }}
          inputType="text"
          inputPlaceholder={"Email"}
          inputValue={this.state.email}
          inputError={this.state.emailError}
          endAdornment={false}
          inputHelperText={this.state.emailHelperText}
          handleInputChange={this.handlEmailChange.bind(this)}
        />

        <InputTypeComponent
          styles={{
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "1rem",
            width: "45%",
          }}
          inputType="password"
          inputPlaceholder={"Password"}
          inputValue={this.state.password}
          inputError={this.state.passwordError}
          endAdornment={false}
          inputHelperText={this.state.passwordHelperText}
          handleInputChange={this.handlPasswordChange.bind(this)}
        />
        <div style={{ marginTop: "10px", marginBottom: "100px" }}>
          <Button
            variant="contained"
            style={{ marginLeft: "20px" }}
            onClick={this.signUp}
          >
            SignUp
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "10px" }}
            color="primary"
            onClick={this.signIn}
          >
            Login
          </Button>
          <GoogleLogin
            render={renderProps => (
              <Button 
              variant="contained"
              color="primary"
              onClick={renderProps.onClick} style={{ marginLeft: "10px" }}>Google Login</Button>
            )}
            clientId="301726218911-epemcm7tdt3taqoav88725fnah1vkmvl.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          ></GoogleLogin>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.loginStatus,
    userDetails: state.login.detailsObject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login, createUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
